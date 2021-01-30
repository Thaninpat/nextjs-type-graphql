"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryResolvers = void 0;
const type_graphql_1 = require("type-graphql");
const User_1 = require("../entities/User");
const Factory_1 = require("../entities/Factory");
const FactoryProduct_1 = require("../entities/FactoryProduct");
const validate_1 = require("../utils/validate");
let FactoryResolvers = class FactoryResolvers {
    async Factories() {
        try {
            return Factory_1.FactoryModel.find()
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
            });
        }
        catch (error) {
            throw error;
        }
    }
    async FactoryById(id) {
        try {
            const FactoryById = await Factory_1.FactoryModel.findById(id);
            if (!FactoryById)
                throw new Error('ID ที่ใส่มานั้นไม่ถูกต้อง');
            return Factory_1.FactoryModel.findById(id)
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
            });
        }
        catch (error) {
            throw error;
        }
    }
    async FactoryFindOne(factoryName) {
        try {
            const factoryNameFindOne = await Factory_1.FactoryModel.findOne({ factoryName });
            if (!factoryNameFindOne)
                throw new Error('ชื่อบริษัทที่ใส่มานั้นไม่ถูกต้อง');
            return Factory_1.FactoryModel.findOne({ factoryName })
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
            });
        }
        catch (error) {
            throw error;
        }
    }
    async createFactory(factoryName, { req }) {
        try {
            if (!factoryName)
                throw new Error('โปรใส่ชื่อบริษัท');
            const user = await User_1.UserModel.findById(req.userId);
            if (!user)
                return null;
            const isFactoryName = validate_1.ValidateNameFactory(factoryName);
            if (!isFactoryName)
                throw new Error('มีความยาวมากกว่า 60 ตัวอักษร');
            const newFactory = await Factory_1.FactoryModel.create({
                factoryName,
                user: user.id,
            });
            await newFactory.save();
            return Factory_1.FactoryModel.findById(newFactory.id).populate({
                path: 'user',
            });
        }
        catch (error) {
            throw error;
        }
    }
    async FactoryProducts() {
        try {
            return FactoryProduct_1.FactoryProductModel.find()
                .populate({
                path: 'factoryName',
            })
                .populate({
                path: 'factoryReceive',
            })
                .populate({
                path: 'user',
            });
        }
        catch (error) {
            throw error;
        }
    }
    async FactoryProductById(id) {
        try {
            const FactoryProductById = await FactoryProduct_1.FactoryProductModel.findById(id);
            if (!FactoryProductById)
                throw new Error('ID ที่ใส่มานั้นไม่ถูกต้อง');
            return FactoryProduct_1.FactoryProductModel.findById(id)
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
            });
        }
        catch (error) {
            throw error;
        }
    }
    async productFindOne(productName) {
        try {
            const productNameFindOne = await FactoryProduct_1.FactoryProductModel.findOne({
                productName,
            });
            if (!productNameFindOne)
                throw new Error('ชื่อ Product ที่ใส่มานั้นไม่ถูกต้อง');
            return FactoryProduct_1.FactoryProductModel.findOne({ productName })
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
            });
        }
        catch (error) {
            throw error;
        }
    }
    async createFactoryProduct(factoryNameId, productName, factoryReceiveId, description, imageUrl, { req }) {
        try {
            if (!factoryNameId)
                throw new Error('โปรใส่ ID ของ factory');
            if (!productName)
                throw new Error('โปรใส่ชื่อ Product');
            if (!description)
                throw new Error('โปรใส่ชื่อ Product');
            if (!imageUrl)
                throw new Error('โปรใส่คำอธิบายสินค้า');
            const user = await User_1.UserModel.findById(req.userId);
            if (!user)
                return null;
            const Factory = await Factory_1.FactoryModel.findById(factoryNameId).populate({
                path: 'productsMe',
                populate: { path: 'factoryName' },
            });
            if (!Factory)
                return null;
            const factoryReceive = await Factory_1.FactoryModel.findById(factoryReceiveId).populate({
                path: 'receivedProducts',
                populate: { path: 'factoryName' },
            });
            if (!factoryReceive)
                throw new Error('ไม่ได้ใส่ factoryReceiveId');
            const newFactoryProduct = await FactoryProduct_1.FactoryProductModel.create({
                factoryName: Factory.id,
                productName,
                factoryReceive: factoryReceive.id,
                description,
                imageUrl,
                user: user.id,
            });
            if (!Factory.productsMe) {
                Factory.productsMe = [newFactoryProduct];
            }
            else {
                Factory.productsMe.push(newFactoryProduct);
            }
            await Factory.save();
            if (!factoryReceive.receivedProducts) {
                factoryReceive.receivedProducts = [newFactoryProduct];
            }
            else {
                factoryReceive.receivedProducts.push(newFactoryProduct);
            }
            await factoryReceive.save();
            await newFactoryProduct.save();
            return FactoryProduct_1.FactoryProductModel.findById(newFactoryProduct.id)
                .populate({
                path: 'factoryName',
                populate: { path: 'productsMe' },
            })
                .populate({
                path: 'factoryReceive',
                populate: { path: 'receivedProducts' },
            });
        }
        catch (error) {
            throw error;
        }
    }
};
__decorate([
    type_graphql_1.Query(() => [Factory_1.Factory], { nullable: 'items' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FactoryResolvers.prototype, "Factories", null);
__decorate([
    type_graphql_1.Query(() => Factory_1.Factory, { nullable: true }),
    __param(0, type_graphql_1.Arg('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FactoryResolvers.prototype, "FactoryById", null);
__decorate([
    type_graphql_1.Query(() => Factory_1.Factory, { nullable: true }),
    __param(0, type_graphql_1.Arg('factoryName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FactoryResolvers.prototype, "FactoryFindOne", null);
__decorate([
    type_graphql_1.Mutation(() => Factory_1.Factory, { nullable: true }),
    __param(0, type_graphql_1.Arg('factoryName')),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FactoryResolvers.prototype, "createFactory", null);
__decorate([
    type_graphql_1.Query(() => [FactoryProduct_1.FactoryProduct], { nullable: 'items' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FactoryResolvers.prototype, "FactoryProducts", null);
__decorate([
    type_graphql_1.Query(() => FactoryProduct_1.FactoryProduct, { nullable: true }),
    __param(0, type_graphql_1.Arg('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FactoryResolvers.prototype, "FactoryProductById", null);
__decorate([
    type_graphql_1.Query(() => FactoryProduct_1.FactoryProduct, { nullable: true }),
    __param(0, type_graphql_1.Arg('productName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FactoryResolvers.prototype, "productFindOne", null);
__decorate([
    type_graphql_1.Mutation(() => FactoryProduct_1.FactoryProduct, { nullable: true }),
    __param(0, type_graphql_1.Arg('factoryNameId')),
    __param(1, type_graphql_1.Arg('productName')),
    __param(2, type_graphql_1.Arg('factoryReceiveId', { nullable: true })),
    __param(3, type_graphql_1.Arg('description')),
    __param(4, type_graphql_1.Arg('imageUrl')),
    __param(5, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, Object]),
    __metadata("design:returntype", Promise)
], FactoryResolvers.prototype, "createFactoryProduct", null);
FactoryResolvers = __decorate([
    type_graphql_1.Resolver()
], FactoryResolvers);
exports.FactoryResolvers = FactoryResolvers;
//# sourceMappingURL=FactoryResolvers.js.map