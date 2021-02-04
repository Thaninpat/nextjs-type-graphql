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
exports.DisplayedPage = exports.StyledPage = exports.GlobalStyle = void 0;

var styled_components_1 = require("styled-components");

var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");

fontawesome_svg_core_1.config.autoAddCss = false;
exports.GlobalStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n\n   html {\n      box-sizing: border-box;\n      font-size: 10px;\n   }\n   *, *:before, *:after {\n      box-sizing: inherit;\n   }\n   body {\n      margin: 0;\n      padding: 0;\n      font-size: 1.4rem;\n      font-family: 'Noto Sans', sans-serif;\n      font-family: 'Roboto', sans-serif;\n      font-weight: 400;\n   }\n\n   button {\n    border: none;\n    background: white;\n    font-size: 1.5rem;\n    color: ", ";\n    padding: 0.5rem 1rem;\n    border-radius: ", ";\n    cursor: pointer;\n    transition: background-color ", " ease-in;\n\n    &:hover {\n        background: ", ";\n    }\n   }\n"], ["\n  ", "\n\n   html {\n      box-sizing: border-box;\n      font-size: 10px;\n   }\n   *, *:before, *:after {\n      box-sizing: inherit;\n   }\n   body {\n      margin: 0;\n      padding: 0;\n      font-size: 1.4rem;\n      font-family: 'Noto Sans', sans-serif;\n      font-family: 'Roboto', sans-serif;\n      font-weight: 400;\n   }\n\n   button {\n    border: none;\n    background: white;\n    font-size: 1.5rem;\n    color: ", ";\n    padding: 0.5rem 1rem;\n    border-radius: ", ";\n    cursor: pointer;\n    transition: background-color ", " ease-in;\n\n    &:hover {\n        background: ", ";\n    }\n   }\n"])), fontawesome_svg_core_1.dom.css(), function (props) {
  return props.theme.colors.darkTeal;
}, function (props) {
  return props.theme.radius;
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.theme.colors.lightGrey;
});
exports.StyledPage = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: white;\n  color: ", ";\n"], ["\n  background: white;\n  color: ", ";\n"])), function (props) {
  return props.theme.fontColors.primary;
});
exports.DisplayedPage = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 80%;\n  margin: 0 auto;\n  padding: 2rem;\n  display: flex;\n  justify-content: center;\n"], ["\n  width: 80%;\n  margin: 0 auto;\n  padding: 2rem;\n  display: flex;\n  justify-content: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3;