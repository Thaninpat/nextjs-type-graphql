import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql'
import { JobIt, JobItModel } from '../entities/JobIt'
import { UserModel } from '../entities/User'
import { AppContext, RoleOptions } from '../types'
import { ValidateTypeJob, ValidateComment } from '../utils/validate'
import { isAuthenticated } from '../utils/authHandler'
// import { Request, Response } from 'express';

@Resolver()
export class JobRequestIt {
  @Query(() => [JobIt], { nullable: 'items' }) // ผลที่ได้ [JobIt]! ข้างใน Array เป็น null ได้ ข้างนอกเป็น null ไม่ได้อย่างน้อยต้องเป็น Entities
  // ตัวสอบว่าถูกต้องไม @Query(() => [JobIt], { nullable: true }) ผลที่ได้ [JobIt!]
  // @Query(() => [JobIt]) // ผลที่ได้ [JobIt!]!
  async JobIts(@Ctx() { req }: AppContext): Promise<JobIt[] | null> {
    // async ใช้ไว้ให้รู้ว่าเป็น async ฟังชั้นไม่ต้อง await ก็ได้
    try {
      // Check if user is authenticated
      const user = await isAuthenticated(req)

      // Check if user is authorized (Admin, SuperAdmin)
      const isAuthorized =
        user.roles.includes(RoleOptions.superAdmin) ||
        user.roles.includes(RoleOptions.admin)

      if (!isAuthorized) throw new Error('No Authorization.')

      return JobItModel.find().populate({
        path: 'user',
        populate: { path: 'jobIts' },
      })
    } catch (error) {
      throw error
    }
  }

  // @Query(() => JobIt, { nullable: true })
  // async jobMe2(
  //   @Arg('user') user: string
  //   @Ctx() { req }: AppContext): Promise<User | JobIt | null> {
  //   try {

  //     const user = await isAuthenticated(req)
  //     console.log('user Id: ', req.userId)
  //     if (!user) throw new Error('Not authenticated')

  //     const jobMe = await JobItModel.find(user)
  //     console.log('Job user :', jobMe.id)

  //     return JobItModel.findById(req.userId).populate({
  //       path: 'jobIts',
  //       populate: { path: 'user' },
  //     })
  //   } catch (error) {
  //     throw error
  //   }
  // }

  // @Query(() => JobIt, { nullable: true })
  // async jobMe(
  //   // @Arg('user') user: string,
  //   @Ctx() { req }: AppContext
  // ): Promise<User | JobIt | null> {
  //   try {
  //     const userId = await isAuthenticated(req)
  //     console.log('user Id: ', userId.id)
  //     if (!userId) throw new Error('Not authenticated')

  //     // const jobIdUser = await JobItModel.findById(req.userId)
  //     // console.log('jobIdUser: ', jobIdUser.typeJob)

  //     return JobItModel.findById('601b944cb2448a0850e9aa4f').populate({
  //       path: 'user',
  //       populate: { path: 'jobIts' },
  //     })
  //     // return jobIdUser
  //   } catch (error) {
  //     throw error
  //   }
  // }

  // @Query(() => User, { nullable: true })
  // async jobMe(@Ctx() { req }: AppContext): Promise<User | null> {
  //   try {
  //     const userId = await isAuthenticated(req)

  //     if (!userId) throw new Error('Not authenticated')
  //     console.log('user Id: ', userId.jobIts)
  //     // return userId
  //     return UserModel.findById(req.userId).populate({
  //       path: 'jobIts',
  //       populate: { path: 'user' },
  //     })
  //   } catch (error) {
  //     throw error
  //   }
  // }

  @Mutation(() => JobIt)
  async createJob(
    @Arg('typeJob') typeJob: string,
    @Arg('comment') comment: string,
    @Arg('desiredDate') desiredDate: string,
    // @Ctx() { req, res }: {req: Request; res: Response} // req, res คือการ Object
    @Ctx() { req }: AppContext
  ): Promise<JobIt | null> {
    try {
      if (!typeJob) throw new Error('โปรใช้ประเภทงาน')
      if (!comment) throw new Error('โปรใส่ comment')
      if (!desiredDate) throw new Error('โปรใส่ วันที่ต้องการ')

      const user = await UserModel.findById(req.userId)
      if (!user) return null

      const isTypeJob = ValidateTypeJob(typeJob)
      const isComment = ValidateComment(comment)
      if (!isTypeJob || !isComment)
        throw new Error('มีความยาวมากกว่า 60 ตัวอักษร')

      const newJob = await JobItModel.create({
        typeJob,
        comment,
        desiredDate,
        user: user.id,
      })

      if (!user.jobIts) {
        //!  --->ถ้า user นั้นมีฟิลด์ที่ชื้อ jobIts มั้ย ถ้าไม่มีก็ไปสร้างฟิลด์นี้ขึ้นมา
        user.jobIts = [newJob]
      } else {
        //!  --->มิฉะนั้น  ถ้ามีฟิลด์ jobIts อยู่แล้ว ให้ push new product ที่พึ่ง Create เข้าไป
        user.jobIts.push(newJob)
      }

      await user.save()

      await newJob.save()
      return JobItModel.findById(newJob.id).populate({
        path: 'user',
        populate: { path: 'jobIts' },
      })
    } catch (error) {
      throw error
    }
  }
}
