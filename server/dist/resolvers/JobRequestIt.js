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
exports.JobRequestIt = void 0;
const type_graphql_1 = require("type-graphql");
const JobIt_1 = require("../entities/JobIt");
const User_1 = require("../entities/User");
const types_1 = require("../types");
const validate_1 = require("../utils/validate");
const authHandler_1 = require("../utils/authHandler");
let JobRequestIt = class JobRequestIt {
    async JobIts({ req }) {
        try {
            const user = await authHandler_1.isAuthenticated(req);
            const isAuthorized = user.roles.includes(types_1.RoleOptions.superAdmin) ||
                user.roles.includes(types_1.RoleOptions.admin);
            if (!isAuthorized)
                throw new Error('No Authorization.');
            return JobIt_1.JobItModel.find().populate({
                path: 'user',
                populate: { path: 'jobIts' },
            });
        }
        catch (error) {
            throw error;
        }
    }
    async jobMe(typeJob) {
        try {
            const jobIt = await JobIt_1.JobItModel.findOne({ typeJob });
            if (!jobIt)
                throw new Error('JobIt not found.');
            return JobIt_1.JobItModel.findOne({ typeJob }).populate({
                path: 'user',
                populate: { path: 'jobIts' },
            });
        }
        catch (error) {
            throw error;
        }
    }
    async createJob(typeJob, comment, desiredDate, { req }) {
        try {
            if (!typeJob)
                throw new Error('โปรใช้ประเภทงาน');
            if (!comment)
                throw new Error('โปรใส่ comment');
            if (!desiredDate)
                throw new Error('โปรใส่ วันที่ต้องการ');
            const user = await User_1.UserModel.findById(req.userId);
            if (!user)
                return null;
            const isTypeJob = validate_1.ValidateTypeJob(typeJob);
            const isComment = validate_1.ValidateComment(comment);
            if (!isTypeJob || !isComment)
                throw new Error('มีความยาวมากกว่า 60 ตัวอักษร');
            const newJob = await JobIt_1.JobItModel.create({
                typeJob,
                comment,
                desiredDate,
                user: user.id,
            });
            if (!user.jobIts) {
                user.jobIts = [newJob];
            }
            else {
                user.jobIts.push(newJob);
            }
            await user.save();
            await newJob.save();
            return JobIt_1.JobItModel.findById(newJob.id).populate({
                path: 'user',
                populate: { path: 'jobIts' },
            });
        }
        catch (error) {
            throw error;
        }
    }
};
__decorate([
    type_graphql_1.Query(() => [JobIt_1.JobIt], { nullable: 'items' }),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JobRequestIt.prototype, "JobIts", null);
__decorate([
    type_graphql_1.Query(() => JobIt_1.JobIt, { nullable: true }),
    __param(0, type_graphql_1.Arg('typeJob')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobRequestIt.prototype, "jobMe", null);
__decorate([
    type_graphql_1.Mutation(() => JobIt_1.JobIt),
    __param(0, type_graphql_1.Arg('typeJob')),
    __param(1, type_graphql_1.Arg('comment')),
    __param(2, type_graphql_1.Arg('desiredDate')),
    __param(3, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", Promise)
], JobRequestIt.prototype, "createJob", null);
JobRequestIt = __decorate([
    type_graphql_1.Resolver()
], JobRequestIt);
exports.JobRequestIt = JobRequestIt;
//# sourceMappingURL=JobRequestIt.js.map