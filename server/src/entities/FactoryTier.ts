import { getModelForClass, prop } from '@typegoose/typegoose'
import { ObjectType, Field, ID } from 'type-graphql'

import { User } from './User'
import { Factory } from './Factory'

import mongoose from 'mongoose'

@ObjectType({ description: 'บริษัทที่รับงานจากบริษัทมาจากบริษัทอื่น' })
export class FactoryTier {
  @Field(() => ID)
  id: string

  @Field(() => [Factory], { nullable: true })
  @prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Factory',
    required: true,
  })
  factoryName: Factory[]

  @Field(() => [Factory], { nullable: true })
  @prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Factory',
    required: true,
  })
  productForFactory: Factory[]

  @Field()
  @prop({ default: () => Date.now() + 60 * 60 * 1000 * 7 })
  createdAt: Date

  @Field(() => [User], { nullable: true })
  @prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  user: User[]
}

export const FactoryTierModel = getModelForClass(FactoryTier)
