"use strict";
exports.__esModule = true;
exports.Search = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = require("react");
exports.Search = function (_a) {
    var value = _a.value, onValueChange = _a.onValueChange;
    return (react_2["default"].createElement(react_1.Center, { marginTop: '30px' },
        react_2["default"].createElement(react_1.Box, { padding: '10px' },
            react_2["default"].createElement(react_1.Input, { variant: 'flushed', placeholder: 'Search', type: 'text', value: value, onChange: function (event) {
                    onValueChange(event.target.value);
                } }))));
};
