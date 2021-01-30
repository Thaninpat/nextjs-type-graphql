import { getModelForClass, prop } from '@typegoose/typegoose';
import { ObjectType, Field, ID } from 'type-graphql';
import mongoose from 'mongoose'

import { User } from './User';
import { FactoryProduct } from './FactoryProduct';

@ObjectType({ description: 'Factory Data' })
export class Factory {
    @Field(() => ID)
    id: string;

    @Field()
    @prop({ required: true, trim: true })
    factoryName: string;

    @Field(() => [FactoryProduct], { nullable: true })
    @prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FactoryProduct',
        required: true
    })
    productsMe: FactoryProduct[];

    @Field(() => [FactoryProduct], { nullable: "items" })
    @prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FactoryProduct'
    })
    receivedProducts: FactoryProduct[];

    @Field()
    @prop({ default: () => Date.now() + 60 * 60 * 1000 * 7 })
    createdAt: Date;

    @Field(() => [User], { nullable: true })
    @prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    })
    user: User[];
}

export const FactoryModel = getModelForClass(Factory);