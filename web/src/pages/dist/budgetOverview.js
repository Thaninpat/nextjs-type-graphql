"use strict";
exports.__esModule = true;
var react_1 = require("@chakra-ui/react");
var react_2 = require("react");
var BudgetItem_1 = require("../components/BudgetItem");
var Search_1 = require("../components/Search");
var data_1 = require("./api/data");
var budgetOverview = function () {
    var _a = react_2.useState(''), searchText = _a[0], setSearchText = _a[1];
    var result = data_1.results
        .filter(function (result) {
        return result.label.includes(searchText);
    })
        .map(function (item, index) {
        return react_2["default"].createElement(BudgetItem_1.BudgetItem, { key: index, result: item });
    });
    return (react_2["default"].createElement(react_1.Flex, { align: 'center', justify: 'space-between', p: 20, flexDirection: 'column' },
        react_2["default"].createElement(react_1.Heading, { textAlign: 'center' }, "Budget"),
        react_2["default"].createElement(Search_1.Search, { value: searchText, onValueChange: setSearchText }),
        react_2["default"].createElement(react_1.Center, { marginTop: '30px' },
            react_2["default"].createElement(react_1.Box, { maxW: 1200, borderWidth: '1px', borderRadius: 'lg', p: 10 },
                react_2["default"].createElement(react_1.Table, { variant: 'simple', size: 'md' },
                    react_2["default"].createElement(react_1.TableCaption, null, "Table Caption"),
                    react_2["default"].createElement(react_1.Thead, null,
                        react_2["default"].createElement(react_1.Tr, null,
                            react_2["default"].createElement(react_1.Th, null, "Id"),
                            react_2["default"].createElement(react_1.Th, null, "Label"),
                            react_2["default"].createElement(react_1.Th, null, "Key"))),
                    react_2["default"].createElement(react_1.Tbody, null, result))))));
};
exports["default"] = budgetOverview;
