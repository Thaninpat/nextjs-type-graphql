import { getModelForClass, prop } from '@typegoose/typegoose'
import mongoose from 'mongoose'
import { ObjectType, Field, ID } from 'type-graphql'

import { RoleOptions } from '../types'
import { JobIt } from './JobIt'

@ObjectType({ description: 'User Model' })
export class User {
  @Field(() => ID)
  id: string

  @Field()
  @prop({ required: true, trim: true })
  username: string

  @Field()
  @prop({ required: true, trim: true, unique: true, lowercase: true })
  email: string

  @prop({ required: true })
  password: string

  @prop({ default: 0 })
  tokenVersion: number

  @prop()
  resetPasswordToken?: string

  @prop()
  resetPasswordTokenExpiry?: number

  // @prop()
  // facebookId?: string

  // @prop()
  // googleId?: string

  @Field(() => [String])
  @prop({
    type: String,
    enum: RoleOptions,
    //enum เลือกได้ 1 ใน 4 เท่านั้นไม่สามารถพิ้มอย่างอื่นได้และมี autocomplete(เติมข้อความอัติโนมัติ)
    default: [RoleOptions.client],
  })
  roles: RoleOptions[]

  @Field()
  @prop({ default: () => Date.now() + 60 * 60 * 1000 * 7 })
  createdAt: Date

  @Field(() => [JobIt], { nullable: 'items' })
  @prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'JobIt',
  })
  jobIts: JobIt[]
}

export const UserModel = getModelForClass(User)
