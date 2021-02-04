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
exports.Divider = exports.StyledSocial = exports.StyledInform = exports.StyledSwitchAction = exports.StyledError = exports.Button = exports.Input = exports.InputContainer = exports.StyledForm = exports.Header = exports.FormContainer = void 0;

var styled_components_1 = require("styled-components");

exports.FormContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 95%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  margin: 2.5rem 0;\n"], ["\n  width: 95%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  margin: 2.5rem 0;\n"])));
exports.Header = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  margin: 0;\n\n  h2 {\n    margin: 0;\n  }\n"], ["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  margin: 0;\n\n  h2 {\n    margin: 0;\n  }\n"])));
exports.StyledForm = styled_components_1["default"].form(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n  align-items: center;\n\n  .email_section_label {\n    margin: 0;\n    padding: 0;\n    color: ", ";\n  }\n"], ["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n  align-items: center;\n\n  .email_section_label {\n    margin: 0;\n    padding: 0;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.border;
});
exports.InputContainer = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n  margin: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n  align-items: stretch;\n"], ["\n  width: 100%;\n  margin: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n  align-items: stretch;\n"])));
exports.Input = styled_components_1["default"].input(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  height: 4rem;\n  border: 0.5px solid #eaeaea;\n  border-radius: ", ";\n  margin: 0.2rem 0;\n  padding: 1rem;\n  font-size: 1.4rem;\n  outline: none;\n  box-shadow: 2px 2px 4px ", ";\n  &:focus {\n    border: 0.5px solid ", ";\n  }\n"], ["\n  width: 100%;\n  height: 4rem;\n  border: 0.5px solid #eaeaea;\n  border-radius: ", ";\n  margin: 0.2rem 0;\n  padding: 1rem;\n  font-size: 1.4rem;\n  outline: none;\n  box-shadow: 2px 2px 4px ", ";\n  &:focus {\n    border: 0.5px solid ", ";\n  }\n"])), function (props) {
  return props.theme.radius;
}, function (props) {
  return props.theme.colors.lightGrey;
}, function (props) {
  return props.theme.colors.border;
});
exports.Button = styled_components_1["default"].button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100%;\n  height: 4rem;\n  background: ", ";\n  color: white;\n  font-size: 1.8rem;\n  margin-top: 2rem;\n\n  &:hover {\n    background: #fff;\n    border: 0.5px solid ", ";\n    color: ", ";\n  }\n"], ["\n  width: 100%;\n  height: 4rem;\n  background: ", ";\n  color: white;\n  font-size: 1.8rem;\n  margin-top: 2rem;\n\n  &:hover {\n    background: #fff;\n    border: 0.5px solid ", ";\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.backgroundColors.buttonBg;
}, function (props) {
  return props.theme.colors.border;
}, function (props) {
  return props.theme.fontColors.main;
});
exports.StyledError = styled_components_1["default"].p(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n  color: red;\n  font-size: 1.2rem;\n"], ["\n  margin: 0;\n  padding: 0;\n  color: red;\n  font-size: 1.2rem;\n"])));
exports.StyledSwitchAction = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n  width: 100%;\n\n  p {\n    font-size: 1.2rem;\n    color: black;\n    padding: 0;\n    margin: 0;\n    margin-top: 1rem;\n  }\n"], ["\n  margin: 0;\n  padding: 0;\n  width: 100%;\n\n  p {\n    font-size: 1.2rem;\n    color: black;\n    padding: 0;\n    margin: 0;\n    margin-top: 1rem;\n  }\n"])));
exports.StyledInform = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0.2rem;\n  width: 100%;\n\n  p {\n    font-size: 1.4rem;\n    color: ", ";\n    padding: 0;\n  }\n"], ["\n  margin: 0;\n  padding: 0.2rem;\n  width: 100%;\n\n  p {\n    font-size: 1.4rem;\n    color: ", ";\n    padding: 0;\n  }\n"])), function (props) {
  return props.theme.colors.border;
});
exports.StyledSocial = styled_components_1["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  margin: 1rem auto;\n  padding: 0.2rem;\n  width: 100%;\n\n  button {\n    width: 100%;\n    margin: 1rem auto;\n    padding: 4%;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    color: white;\n\n    a {\n      color: white;\n      text-decoration: none;\n    }\n  }\n\n  .facebook {\n    background: ", ";\n\n    &:hover {\n      background: ", ";\n    }\n  }\n\n  .google {\n    background: ", ";\n\n    &:hover {\n      background: ", ";\n    }\n  }\n"], ["\n  margin: 1rem auto;\n  padding: 0.2rem;\n  width: 100%;\n\n  button {\n    width: 100%;\n    margin: 1rem auto;\n    padding: 4%;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    color: white;\n\n    a {\n      color: white;\n      text-decoration: none;\n    }\n  }\n\n  .facebook {\n    background: ", ";\n\n    &:hover {\n      background: ", ";\n    }\n  }\n\n  .google {\n    background: ", ";\n\n    &:hover {\n      background: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.fbBlue;
}, function (props) {
  return props.theme.colors.fbDarkBlue;
}, function (props) {
  return props.theme.colors.googleRed;
}, function (props) {
  return props.theme.colors.googleDarkRed;
});
exports.Divider = styled_components_1["default"].hr(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  background-color: ", ";\n  height: 1px;\n  width: 100%;\n"], ["\n  background-color: ", ";\n  height: 1px;\n  width: 100%;\n"])), function (props) {
  return props.theme.colors.lightGrey;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;