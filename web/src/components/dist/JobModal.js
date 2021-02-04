"use strict";
exports.__esModule = true;
exports.JobModal = void 0;
var react_1 = require("react");
var react_2 = require("@chakra-ui/react");
exports.JobModal = function () {
    var _a = react_2.useDisclosure(), isOpen = _a.isOpen, onOpen = _a.onOpen, onClose = _a.onClose;
    return (react_1["default"].createElement(react_2.Modal, { isOpen: isOpen, onClose: onClose },
        react_1["default"].createElement(react_2.ModalOverlay, null),
        react_1["default"].createElement(react_2.ModalContent, null,
            react_1["default"].createElement(react_2.ModalHeader, null, "Modal Title"),
            react_1["default"].createElement(react_2.ModalCloseButton, null),
            react_1["default"].createElement("form", null,
                react_1["default"].createElement(react_2.ModalBody, null,
                    react_1["default"].createElement(react_2.Stack, { spacing: 4, mb: 4 },
                        react_1["default"].createElement(react_2.Input, { name: 'jobContent', type: 'text', placeholder: 'Input job', value: '' }),
                        react_1["default"].createElement(react_2.Textarea, { name: 'comment', size: 'sm', placeholder: 'Comment...', value: '' })),
                    react_1["default"].createElement(react_2.Button, { type: 'submit' }, "Add")),
                react_1["default"].createElement(react_2.ModalFooter, null,
                    react_1["default"].createElement(react_2.Button, { colorScheme: 'blue', mr: 3, onClick: onClose }, "Close"),
                    react_1["default"].createElement(react_2.Button, { variant: 'ghost' }, "Secondary Action"))))));
};
