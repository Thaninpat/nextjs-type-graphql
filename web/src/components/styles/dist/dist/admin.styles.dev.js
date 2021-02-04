"use strict";

var __makeTemplateObject = void 0 && (void 0).__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

exports.__esModule = true;
exports.DeleteBtn = exports.Table = exports.Div = void 0;

var styled_components_1 = require("styled-components");

exports.Div = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 70%;\n"], ["\n  width: 70%;\n"])));
exports.Table = styled_components_1["default"].table(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse;\n\n  /* thead {\n    border: 1px solid ", ";\n  } */\n\n  th {\n    border: 1px solid ", ";\n    margin: 0;\n    font-weight: 800;\n  }\n\n  td {\n    border: 1px solid ", ";\n    margin: 0;\n    padding: 0.5rem;\n    font-weight: 400;\n    text-align: center;\n\n    .true {\n      color: ", ";\n    }\n\n    .false {\n      color: red;\n    }\n\n    .role_action {\n      margin: 0;\n      padding: 0;\n      display: flex;\n      justify-content: space-around;\n      border: none;\n\n      button {\n        margin: 0;\n        padding: 0.3rem;\n      }\n    }\n  }\n\n  .td_role {\n    background: ", ";\n  }\n"], ["\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse;\n\n  /* thead {\n    border: 1px solid ", ";\n  } */\n\n  th {\n    border: 1px solid ", ";\n    margin: 0;\n    font-weight: 800;\n  }\n\n  td {\n    border: 1px solid ", ";\n    margin: 0;\n    padding: 0.5rem;\n    font-weight: 400;\n    text-align: center;\n\n    .true {\n      color: ", ";\n    }\n\n    .false {\n      color: red;\n    }\n\n    .role_action {\n      margin: 0;\n      padding: 0;\n      display: flex;\n      justify-content: space-around;\n      border: none;\n\n      button {\n        margin: 0;\n        padding: 0.3rem;\n      }\n    }\n  }\n\n  .td_role {\n    background: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.lightGrey;
}, function (props) {
  return props.theme.colors.lightGrey;
}, function (props) {
  return props.theme.colors.lightGrey;
}, function (props) {
  return props.theme.colors.teal;
}, function (props) {
  return props.theme.colors.lighterGrey;
});
exports.DeleteBtn = styled_components_1["default"].button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background: red;\n  color: white;\n\n  &:hover {\n    background: orange;\n  }\n"], ["\n  background: red;\n  color: white;\n\n  &:hover {\n    background: orange;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3;