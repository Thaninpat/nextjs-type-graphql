"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.HamMenu = exports.Actions = exports.Ul = exports.Logo = exports.Nav = exports.Header = void 0;
var styled_components_1 = require("styled-components");
// import '../../theme/theme-color.css';
exports.Header = styled_components_1["default"].header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 6rem;\n  background: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 0.2px solid #ebebeb;\n"], ["\n  width: 100%;\n  height: 6rem;\n  background: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 0.2px solid #ebebeb;\n"])), function (props) { return props.theme.backgroundColors.navBg; });
exports.Nav = styled_components_1["default"].nav(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 50%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  @media ", " {\n    width: 90%;\n  }\n"], ["\n  width: 50%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  @media ", " {\n    width: 90%;\n  }\n"])), function (props) { return props.theme.size.md; });
exports.Logo = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 20%;\n  margin: 0 auto;\n  color: #000;\n  font-size: 2.5rem;\n  cursor: pointer;\n\n  @media ", " {\n    width: 15%;\n  }\n\n  @media ", " {\n    width: 10%;\n  }\n\n  @media ", " {\n    display: flex;\n    justify-content: flex-start;\n  }\n"], ["\n  width: 20%;\n  margin: 0 auto;\n  color: #000;\n  font-size: 2.5rem;\n  cursor: pointer;\n\n  @media ", " {\n    width: 15%;\n  }\n\n  @media ", " {\n    width: 10%;\n  }\n\n  @media ", " {\n    display: flex;\n    justify-content: flex-start;\n  }\n"])), function (props) { return props.theme.size.lg; }, function (props) { return props.theme.size.md; }, function (props) { return props.theme.size.sm; });
exports.Ul = styled_components_1["default"].ul(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 62%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 0 4rem;\n\n  @media ", " {\n    display: none;\n  }\n\n  .active {\n    color: ", ";\n  }\n\n  a {\n    text-decoration: none;\n    list-style: none;\n    color: ", ";\n    transition: all 0.35s linear;\n    font-size: 1.5rem;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"], ["\n  width: 62%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 0 4rem;\n\n  @media ", " {\n    display: none;\n  }\n\n  .active {\n    color: ", ";\n  }\n\n  a {\n    text-decoration: none;\n    list-style: none;\n    color: ", ";\n    transition: all 0.35s linear;\n    font-size: 1.5rem;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"])), function (props) { return props.theme.size.sm; }, function (props) { return props.theme.fontColors.primary; }, function (props) { return props.theme.fontColors.main; });
exports.Actions = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 18%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  button {\n    background: ", ";\n    color: white;\n    &:hover {\n      background: #fff;\n      border: 0.5px solid ", ";\n      color: ", ";\n    }\n  }\n\n  @media ", " {\n    width: 20%;\n  }\n\n  @media ", " {\n    width: 25%;\n  }\n\n  @media ", " {\n    display: none;\n  }\n"], ["\n  width: 18%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  button {\n    background: ", ";\n    color: white;\n    &:hover {\n      background: #fff;\n      border: 0.5px solid ", ";\n      color: ", ";\n    }\n  }\n\n  @media ", " {\n    width: 20%;\n  }\n\n  @media ", " {\n    width: 25%;\n  }\n\n  @media ", " {\n    display: none;\n  }\n"])), function (props) { return props.theme.backgroundColors.buttonBg; }, function (props) { return props.theme.colors.border; }, function (props) { return props.theme.fontColors.main; }, function (props) { return props.theme.size.lg; }, function (props) { return props.theme.size.md; }, function (props) { return props.theme.size.sm; });
exports.HamMenu = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: none;\n\n  @media ", " {\n    display: block;\n  }\n"], ["\n  display: none;\n\n  @media ", " {\n    display: block;\n  }\n"])), function (props) { return props.theme.size.sm; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;