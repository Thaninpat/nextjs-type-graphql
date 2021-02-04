"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("@chakra-ui/react");
var react_2 = require("@chakra-ui/react");
var react_3 = require("react");
;
[];
var setStateStart = {
    id: '',
    jobContent: '',
    comment: ''
};
var jobIt = function (_a) {
    // const { isOpen, onOpen, onClose } = useDisclosure()
    // State Job Value Change
    var _b = react_3.useState(setStateStart), job = _b[0], setJob = _b[1];
    //  state Edit job Value Change
    var _c = react_3.useState(null), editJob = _c[0], setEditJob = _c[1];
    // state show allJob
    var _d = react_3.useState([]), allJob = _d[0], setAllJob = _d[1];
    // on off modal
    var _e = react_1.useDisclosure(), isOpen = _e.isOpen, onOpen = _e.onOpen, onClose = _e.onClose;
    // Function form input
    function onJobValueChange(event) {
        var _a = event.target, name = _a.name, value = _a.value;
        setJob(function (prevJob) {
            var _a;
            return __assign(__assign({}, prevJob), (_a = {}, _a[name] = value, _a));
        });
    }
    // Function form edit
    function onJobEditValueChange(event) {
        var _a = event.target, name = _a.name, value = _a.value;
        setEditJob(function (prevJob) {
            var _a;
            return __assign(__assign({}, prevJob), (_a = {}, _a[name] = value, _a));
        });
    }
    // Function Job submit
    function onJobSubmit(event) {
        event.preventDefault();
        setAllJob(function (prevAllJob) {
            var newJob = __assign({}, job);
            newJob.id = Date.now().toString();
            return __spreadArrays([newJob], prevAllJob);
        });
        setJob(setStateStart);
    }
    // Function Edit submit
    function onJobEditSubmit(event) {
        event.preventDefault();
        setAllJob(function (prevAllJob) {
            return prevAllJob.map(function (theJob) {
                if (theJob.id !== (editJob === null || editJob === void 0 ? void 0 : editJob.id)) {
                    return theJob;
                }
                else {
                    return editJob;
                }
            });
        });
        setEditJob(null);
    }
    function onJobDelete(jobId) {
        setAllJob(function (prevAllJob) {
            return prevAllJob.filter(function (theJob) { return theJob.id !== jobId; });
        });
    }
    function handleEditModal(theJob) {
        setEditJob(theJob);
        onOpen();
    }
    var editJobElement = null;
    if (!!editJob) {
        editJobElement = (react_3["default"].createElement(react_2.Modal, { isOpen: isOpen, onClose: onClose },
            react_3["default"].createElement(react_2.ModalOverlay, null),
            react_3["default"].createElement(react_2.ModalContent, null,
                react_3["default"].createElement(react_2.ModalHeader, null, "Edit"),
                react_3["default"].createElement(react_2.ModalCloseButton, null),
                react_3["default"].createElement("form", { onSubmit: onJobEditSubmit },
                    react_3["default"].createElement(react_2.ModalBody, { pb: 6 },
                        react_3["default"].createElement(react_1.FormControl, null,
                            react_3["default"].createElement(react_1.Input, { name: 'jobContent', type: 'text', placeholder: 'Input job', value: editJob.jobContent, onChange: onJobEditValueChange })),
                        react_3["default"].createElement(react_1.FormControl, { mt: 4 },
                            react_3["default"].createElement(react_1.Textarea, { name: 'comment', size: 'sm', placeholder: 'Comment...', value: editJob.comment, onChange: onJobEditValueChange }))),
                    react_3["default"].createElement(react_2.ModalFooter, null,
                        react_3["default"].createElement(react_1.Button, { m: 1, type: 'submit' }, "Submit"),
                        react_3["default"].createElement(react_1.Button, { m: 1, onClick: onClose }, "Cancel"))))));
    }
    var jobElements = allJob.map(function (theJob) {
        return (react_3["default"].createElement(react_1.Box, { key: theJob.id, mt: 4, p: 3, bg: '#f1f1f1', borderRadius: 5 },
            react_3["default"].createElement(react_1.Text, { px: 4, fontSize: '3xl' }, theJob.jobContent),
            react_3["default"].createElement(react_1.Text, { px: 4, fontSize: 'md' }, theJob.comment),
            react_3["default"].createElement(react_1.Button, { onClick: function () {
                    handleEditModal(theJob);
                }, bg: '#f1f1f1', _hover: {
                    bgColor: '#f1f1f1',
                    color: '#a4b85d'
                } }, "Edit"),
            react_3["default"].createElement("span", null, " | "),
            react_3["default"].createElement(react_1.Button, { onClick: function () {
                    onJobDelete(theJob.id);
                }, bg: '#f1f1f1', _hover: {
                    bgColor: '#f1f1f1',
                    color: '#c25f5f'
                } }, "Delete")));
    });
    return (react_3["default"].createElement(react_1.Flex, { align: 'center', justify: 'center', p: 20, flexDirection: 'column' },
        react_3["default"].createElement(react_1.Heading, null, "\u0E41\u0E08\u0E49\u0E07\u0E07\u0E32\u0E19 \u0E44\u0E2D\u0E17\u0E35"),
        react_3["default"].createElement(react_1.Container, { margin: 10 },
            react_3["default"].createElement("form", { onSubmit: onJobSubmit },
                react_3["default"].createElement(react_1.Stack, { spacing: 4, mb: 4 },
                    react_3["default"].createElement(react_1.Input, { name: 'jobContent', type: 'text', placeholder: 'Input job', value: job.jobContent, onChange: onJobValueChange }),
                    react_3["default"].createElement(react_1.Textarea, { name: 'comment', size: 'sm', placeholder: 'Comment...', value: job.comment, onChange: onJobValueChange })),
                react_3["default"].createElement(react_1.Button, { type: 'submit' }, "Add")),
            jobElements,
            editJobElement)));
};
exports["default"] = jobIt;
