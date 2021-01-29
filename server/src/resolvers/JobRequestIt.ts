import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql';
import { JobIt, JobItModel } from '../entities/JobIt';
import { User, UserModel } from '../entities/User';
import { AppContext, AppJobIt } from '../types';

@Resolver()
export class JobRequestIt {
  @Query(() => [JobIt], { nullable: 'items' })
  async JobIts(): Promise<JobIt[] | null> {
    try {
      return JobItModel.find()
        .populate({
          path: 'Users',
          populate: { path: "JobIts" }
        })
    } catch (error) {
      throw error
    }
  }

  @Mutation(() => [JobIt], { nullable: true })
  async getjob(
    @Arg('typeJob') typeJob: string,
    @Arg('comment') comment: string,
    @Arg('desiredDate') desiredDate: string,
    // @Arg('usernameId') usernameId: string,
    @Ctx() { req }: AppContext
  ): Promise<JobIt | null> {
    try {
      if (!typeJob) throw new Error('Type job is required.');
      if (!comment) throw new Error('comment is required.');
      if (!desiredDate) throw new Error('Date is required.');

      const user = await UserModel.findById(req.userId);
      if (!user) return null;

      const newJob = await JobItModel.create<
        Pick<JobIt, 'typeJob' | 'comment' | 'desiredDate' | 'Users'>
      >({
        typeJob,
        comment,
        desiredDate,
        Users: user.id
      });


      if (!user.JobIts) {
        //!  --->ถ้า user นั้นมีฟิลด์ที่ชื้อ products มั้ย ถ้าไม่มีก็ไปสร้างฟิลด์นี้ขึ้นมา
        user.JobIts = [JobIt]
      } else {
        //!  --->มิฉะนั้น  ถ้ามีฟิลด์ Product อยู่แล้ว ให้ push new product ที่พึ่ง Create เข้าไป
        user.JobIts.push(JobIt)
      }

      await newJob.save();
      return JobItModel.findById(JobIt.id).populate({
        path: 'Users',
        populate: { path: "JobIts" }
      })

    } catch (error) {
      throw error;
    }
  }
}
