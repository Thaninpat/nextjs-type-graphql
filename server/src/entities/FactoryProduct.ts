import { getModelForClass, prop } from '@typegoose/typegoose';

import { ObjectType, Field, ID } from 'type-graphql';
import { User } from './User';
import { Factory } from './Factory';
import mongoose from 'mongoose'

@ObjectType({ description: 'ข้อมูลสินค้าที่บริษัทต้องๆผลิต' })
export class FactoryProduct {
    @Field(() => ID)
    id: string;
    
    @Field(() => Factory)
    @prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Factory',
        required: true
    })
    factoryName: Factory;

    @Field()
    @prop({ required: true, trim: true })
    productName: string;
    
    @Field(() => [Factory], { nullable: 'items' })
    @prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Factory'
    })
    factoryReceive: Factory[];
    
    @Field()
    @prop({ required: true, trim: true })
    description: string;

    @Field()
    @prop({ required: true, trim: true })
    imageUrl: string;

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

export const FactoryProductModel = getModelForClass(FactoryProduct);