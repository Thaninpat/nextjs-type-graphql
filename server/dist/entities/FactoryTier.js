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
exports.FactoryTierModel = exports.FactoryTier = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const type_graphql_1 = require("type-graphql");
const User_1 = require("./User");
const Factory_1 = require("./Factory");
const mongoose_1 = __importDefault(require("mongoose"));
let FactoryTier = class FactoryTier {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", String)
], FactoryTier.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => [Factory_1.Factory], { nullable: true }),
    typegoose_1.prop({
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Factory',
        required: true,
    }),
    __metadata("design:type", Array)
], FactoryTier.prototype, "factoryName", void 0);
__decorate([
    type_graphql_1.Field(() => [Factory_1.Factory], { nullable: true }),
    typegoose_1.prop({
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Factory',
        required: true,
    }),
    __metadata("design:type", Array)
], FactoryTier.prototype, "productForFactory", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ default: () => Date.now() + 60 * 60 * 1000 * 7 }),
    __metadata("design:type", Date)
], FactoryTier.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(() => [User_1.User], { nullable: true }),
    typegoose_1.prop({
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }),
    __metadata("design:type", Array)
], FactoryTier.prototype, "user", void 0);
FactoryTier = __decorate([
    type_graphql_1.ObjectType({ description: 'บริษัทที่รับงานจากบริษัทมาจากบริษัทอื่น' })
], FactoryTier);
exports.FactoryTier = FactoryTier;
exports.FactoryTierModel = typegoose_1.getModelForClass(FactoryTier);
//# sourceMappingURL=FactoryTier.js.map