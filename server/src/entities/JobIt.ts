import { getModelForClass, prop } from '@typegoose/typegoose'
import mongoose from 'mongoose'
import { ObjectType, Field, ID } from 'type-graphql'
import { User } from './User'

@ObjectType({ description: 'Job IT Model 2' })
export class JobIt {
  @Field(() => ID)
  id: string

  @Field()
  @prop({ required: true, trim: true })
  typeJob: string

  @Field()
  @prop({ required: true, trim: true })
  comment: string

  @Field()
  @prop({ required: true })
  desiredDate: Date

  @Field()
  @prop({ default: () => Date.now() + 60 * 60 * 1000 * 7 })
  createdAt: Date

  @Field(() => User)
  @prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  user: User

  // @Field(() => [User], { nullable: 'items' })
  // @prop({
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User'
  // })
  // Users: User[]
}
export const JobItModel = getModelForClass(JobIt)
