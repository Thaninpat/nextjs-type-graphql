"use strict";
exports.__esModule = true;
exports.Wrapper = void 0;
var react_1 = require("react");
var react_2 = require("@chakra-ui/react");
exports.Wrapper = function (_a) {
    var variant = _a.variant, children = _a.children;
    return (react_1["default"].createElement(react_2.Box, { mt: 8, mx: 'auto', maxW: variant === 'regular' ? '800px' : '400px', w: '100%' }, children));
};
