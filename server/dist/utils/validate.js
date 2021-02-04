"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateNameFactory = exports.ValidateComment = exports.ValidateTypeJob = exports.validatePassword = exports.validateEmail = exports.validateUsername = void 0;
const validateUsername = (username) => {
    const fmtUsername = username.trim();
    return fmtUsername.length >= 3 && fmtUsername.length <= 60;
};
exports.validateUsername = validateUsername;
const validateEmail = (email) => {
    const fmtEmail = email.trim().toLowerCase();
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(fmtEmail);
};
exports.validateEmail = validateEmail;
const validatePassword = (password) => password.length >= 6 && password.length <= 50;
exports.validatePassword = validatePassword;
const ValidateTypeJob = (typeJob) => {
    const fmtTypeJob = typeJob.trim();
    return fmtTypeJob.length >= 3 && fmtTypeJob.length <= 60;
};
exports.ValidateTypeJob = ValidateTypeJob;
const ValidateComment = (comment) => {
    const fmtComment = comment.trim();
    return fmtComment.length >= 3 && fmtComment.length <= 60;
};
exports.ValidateComment = ValidateComment;
const ValidateNameFactory = (nameFactory) => {
    const fmtNameFactory = nameFactory.trim();
    return fmtNameFactory.length >= 3 && fmtNameFactory.length <= 60;
};
exports.ValidateNameFactory = ValidateNameFactory;
//# sourceMappingURL=validate.js.map