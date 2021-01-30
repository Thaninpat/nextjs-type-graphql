import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql'

import { UserModel } from '../entities/User'
import { Factory, FactoryModel } from '../entities/Factory'
import { FactoryProduct, FactoryProductModel } from '../entities/FactoryProduct'

import { AppContext } from '../types'
import { ValidateNameFactory } from '../utils/validate'

@Resolver()
export class FactoryResolvers {
  @Query(() => [Factory], { nullable: 'items' })
  async Factories(): Promise<Factory[] | null> {
    try {
      return FactoryModel.find()
        .populate({
          path: 'productsMe',
        })
        .populate({
          path: 'receivedProducts',
          populate: {
            path: 'factoryName',
            populate: {
              path: 'receivedProducts',
              populate: { path: 'factoryName' },
            },
          },
        })
    } catch (error) {
      throw error
    }
  }
  @Query(() => Factory, { nullable: true })
  async FactoryById(@Arg('id') id: string): Promise<Factory | null> {
    try {
      const FactoryById = await FactoryModel.findById(id)
      if (!FactoryById) throw new Error('ID ที่ใส่มานั้นไม่ถูกต้อง')

      return FactoryModel.findById(id)
        .populate({
          path: 'productsMe',
          populate: { path: 'factoryReceive' },
        })
        .populate({
          path: 'receivedProducts',
          populate: {
            path: 'factoryName',
            populate: {
              path: 'receivedProducts',
              populate: {
                path: 'factoryName',
                populate: {
                  path: 'receivedProducts',
                  populate: { path: 'factoryName' },
                },
              },
            },
          },
        })
        .populate({
          path: 'user',
        })
    } catch (error) {
      throw error
    }
  }
  @Query(() => Factory, { nullable: true })
  async FactoryFindOne(
    @Arg('factoryName') factoryName: string
  ): Promise<Factory | null> {
    try {
      const factoryNameFindOne = await FactoryModel.findOne({ factoryName })
      if (!factoryNameFindOne)
        throw new Error('ชื่อบริษัทที่ใส่มานั้นไม่ถูกต้อง')

      return FactoryModel.findOne({ factoryName })
        .populate({
          path: 'productsMe',
          populate: { path: 'factoryReceive' },
        })
        .populate({
          path: 'receivedProducts',
          populate: {
            path: 'factoryName',
            populate: {
              path: 'receivedProducts',
              populate: {
                path: 'factoryName',
                populate: {
                  path: 'receivedProducts',
                  populate: { path: 'factoryName' },
                },
              },
            },
          },
        })
        .populate({
          path: 'user',
        })
    } catch (error) {
      throw error
    }
  }
  @Mutation(() => Factory, { nullable: true })
  async createFactory(
    @Arg('factoryName') factoryName: string,
    @Ctx() { req }: AppContext
  ): Promise<Factory | null> {
    try {
      if (!factoryName) throw new Error('โปรใส่ชื่อบริษัท')

      const user = await UserModel.findById(req.userId)
      if (!user) return null

      //TODO กำหนดมีความยาวมากกว่า 60-*250 ตัวอักษร
      const isFactoryName = ValidateNameFactory(factoryName)
      if (!isFactoryName) throw new Error('มีความยาวมากกว่า 60 ตัวอักษร')

      const newFactory = await FactoryModel.create({
        factoryName,
        user: user.id,
      })

      // if (!user.Factorys) {
      //     //  --->ถ้า user นั้นมีฟิลด์ที่ชื้อ Factorys มั้ย ถ้าไม่มีก็ไปสร้างฟิลด์นี้ขึ้นมา
      //     user.Factorys = [newFactory]
      //   } else {
      //     // --->มิฉะนั้น  ถ้ามีฟิลด์ Factorys อยู่แล้ว ให้ push new product ที่พึ่ง Create เข้าไป
      //     user.Factorys.push(newFactory)
      //   }
      // await user.save()

      await newFactory.save()
      return FactoryModel.findById(newFactory.id).populate({
        path: 'user',
      })
    } catch (error) {
      throw error
    }
  }

  @Query(() => [FactoryProduct], { nullable: 'items' })
  async FactoryProducts(): Promise<FactoryProduct[] | null> {
    try {
      return FactoryProductModel.find()
        .populate({
          path: 'factoryName',
        })
        .populate({
          path: 'factoryReceive',
        })
        .populate({
          path: 'user',
        })
    } catch (error) {
      throw error
    }
  }
  @Query(() => FactoryProduct, { nullable: true })
  async FactoryProductById(
    @Arg('id') id: string
  ): Promise<FactoryProduct | null> {
    try {
      const FactoryProductById = await FactoryProductModel.findById(id)
      if (!FactoryProductById) throw new Error('ID ที่ใส่มานั้นไม่ถูกต้อง')

      return FactoryProductModel.findById(id)
        .populate({
          path: 'factoryName',
          populate: { path: 'productsMe' },
        })
        .populate({
          path: 'factoryReceive',
          populate: {
            path: 'receivedProducts',
            populate: {
              path: 'factoryName',
              populate: {
                path: 'receivedProducts',
                populate: {
                  path: 'factoryName',
                  populate: {
                    path: 'receivedProducts',
                    populate: {
                      path: 'factoryName',
                    },
                  },
                },
              },
            },
          },
        })
        .populate({
          path: 'user',
        })
    } catch (error) {
      throw error
    }
  }
  @Query(() => FactoryProduct, { nullable: true })
  async productFindOne(
    @Arg('productName') productName: string
  ): Promise<FactoryProduct | null> {
    try {
      const productNameFindOne = await FactoryProductModel.findOne({
        productName,
      })
      if (!productNameFindOne)
        throw new Error('ชื่อ Product ที่ใส่มานั้นไม่ถูกต้อง')

      return FactoryProductModel.findOne({ productName })
        .populate({
          path: 'factoryName',
          populate: { path: 'productsMe' },
        })
        .populate({
          path: 'factoryReceive',
          populate: {
            path: 'receivedProducts',
            populate: {
              path: 'factoryName',
              populate: {
                path: 'receivedProducts',
                populate: {
                  path: 'factoryName',
                  populate: {
                    path: 'receivedProducts',
                    populate: {
                      path: 'factoryName',
                    },
                  },
                },
              },
            },
          },
        })
        .populate({
          path: 'user',
        })
    } catch (error) {
      throw error
    }
  }
  @Mutation(() => FactoryProduct, { nullable: true })
  async createFactoryProduct(
    @Arg('factoryNameId') factoryNameId: string,
    @Arg('productName') productName: string,
    @Arg('factoryReceiveId', { nullable: true }) factoryReceiveId: string,
    @Arg('description') description: string,
    @Arg('imageUrl') imageUrl: string,
    @Ctx() { req }: AppContext
  ): Promise<FactoryProduct | null> {
    try {
      if (!factoryNameId) throw new Error('โปรใส่ ID ของ factory')
      if (!productName) throw new Error('โปรใส่ชื่อ Product')
      if (!description) throw new Error('โปรใส่ชื่อ Product')
      if (!imageUrl) throw new Error('โปรใส่คำอธิบายสินค้า')

      // find user who perform createFactoryProduct --> from logged in.
      const user = await UserModel.findById(req.userId)
      if (!user) return null

      // Check if the newFactoryProduct is already in Factory.productsMe.

      //FIXME: ว่างๆกลับไปศึกษาวิธีใช้งาน
      const Factory = await FactoryModel.findById(factoryNameId).populate({
        path: 'productsMe',
        populate: { path: 'factoryName' },
      })
      if (!Factory) return null

      //FIXME: แบงค์ ต้ังค่า if else ถ้าไม่ใส่ factoryReceiveId ก็จะสามารถบันทึกได้
      const factoryReceive = await FactoryModel.findById(
        factoryReceiveId
      ).populate({
        path: 'receivedProducts',
        populate: { path: 'factoryName' },
      })
      if (!factoryReceive) throw new Error('ไม่ได้ใส่ factoryReceiveId')

      // const findFactoryProductIndex = Factory.productsMe.findIndex(FactoryProduct => FactoryProduct.factoryName.id === id)

      // A. The  newFactoryProduct is already in Factory.
      // A.2 Fine the FactoryProduct From database.
      // A.3 Update productFromTiers.

      // B. the newFactoryProduct is not in Factory yet.
      // B.1 create newFactoryProduct.
      // B.2 Update Factory.productsMe.
      const newFactoryProduct = await FactoryProductModel.create({
        factoryName: Factory.id,
        productName,
        factoryReceive: factoryReceive.id,
        description,
        imageUrl,
        user: user.id,
      })

      if (!Factory.productsMe) {
        Factory.productsMe = [newFactoryProduct]
      } else {
        Factory.productsMe.push(newFactoryProduct)
      }
      await Factory.save()

      if (!factoryReceive.receivedProducts) {
        factoryReceive.receivedProducts = [newFactoryProduct]
      } else {
        factoryReceive.receivedProducts.push(newFactoryProduct)
      }
      await factoryReceive.save()

      await newFactoryProduct.save()

      return FactoryProductModel.findById(newFactoryProduct.id)
        .populate({
          path: 'factoryName',
          populate: { path: 'productsMe' },
        })
        .populate({
          path: 'factoryReceive',
          populate: { path: 'receivedProducts' },
        })
    } catch (error) {
      throw error
    }
  }
}
