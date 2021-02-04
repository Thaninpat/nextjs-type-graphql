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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryProductModel = exports.FactoryProduct = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const type_graphql_1 = require("type-graphql");
const User_1 = require("./User");
const Factory_1 = require("./Factory");
const mongoose_1 = __importDefault(require("mongoose"));
let FactoryProduct = class FactoryProduct {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", String)
], FactoryProduct.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => Factory_1.Factory),
    typegoose_1.prop({
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Factory',
        required: true
    }),
    __metadata("design:type", Factory_1.Factory)
], FactoryProduct.prototype, "factoryName", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ required: true, trim: true }),
    __metadata("design:type", String)
], FactoryProduct.prototype, "productName", void 0);
__decorate([
    type_graphql_1.Field(() => [Factory_1.Factory], { nullable: 'items' }),
    typegoose_1.prop({
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Factory'
    }),
    __metadata("design:type", Array)
], FactoryProduct.prototype, "factoryReceive", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ required: true, trim: true }),
    __metadata("design:type", String)
], FactoryProduct.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ required: true, trim: true }),
    __metadata("design:type", String)
], FactoryProduct.prototype, "imageUrl", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ default: () => Date.now() + 60 * 60 * 1000 * 7 }),
    __metadata("design:type", Date)
], FactoryProduct.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(() => [User_1.User], { nullable: true }),
    typegoose_1.prop({
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }),
    __metadata("design:type", Array)
], FactoryProduct.prototype, "user", void 0);
FactoryProduct = __decorate([
    type_graphql_1.ObjectType({ description: 'ข้อมูลสินค้าที่บริษัทต้องๆผลิต' })
], FactoryProduct);
exports.FactoryProduct = FactoryProduct;
exports.FactoryProductModel = typegoose_1.getModelForClass(FactoryProduct);
//# sourceMappingURL=FactoryProduct.js.map