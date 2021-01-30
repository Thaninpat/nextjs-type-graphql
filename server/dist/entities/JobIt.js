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
exports.JobItModel = exports.JobIt = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const mongoose_1 = __importDefault(require("mongoose"));
const type_graphql_1 = require("type-graphql");
const User_1 = require("./User");
let JobIt = class JobIt {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", String)
], JobIt.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ required: true, trim: true }),
    __metadata("design:type", String)
], JobIt.prototype, "typeJob", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ required: true, trim: true }),
    __metadata("design:type", String)
], JobIt.prototype, "comment", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], JobIt.prototype, "desiredDate", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ default: () => Date.now() + 60 * 60 * 1000 * 7 }),
    __metadata("design:type", Date)
], JobIt.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(() => User_1.User),
    typegoose_1.prop({
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }),
    __metadata("design:type", User_1.User)
], JobIt.prototype, "user", void 0);
JobIt = __decorate([
    type_graphql_1.ObjectType({ description: 'Job IT Model 2' })
], JobIt);
exports.JobIt = JobIt;
exports.JobItModel = typegoose_1.getModelForClass(JobIt);
//# sourceMappingURL=JobIt.js.map