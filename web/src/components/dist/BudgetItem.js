"use strict";
exports.__esModule = true;
exports.BudgetItem = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = require("react");
;
[];
exports.BudgetItem = function (_a) {
    var result = _a.result;
    return (react_2["default"].createElement(react_1.Tr, null,
        react_2["default"].createElement(react_1.Td, null, result.id + 1),
        react_2["default"].createElement(react_1.Td, null, result.label),
        react_2["default"].createElement(react_1.Td, null, result.key)));
};
