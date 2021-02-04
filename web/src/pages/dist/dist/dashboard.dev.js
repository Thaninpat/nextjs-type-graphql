"use strict";

exports.__esModule = true;

var react_1 = require("react");

var Home_module_css_1 = require("../styles/Home.module.css");

var dashboard = function dashboard(_a) {
  return react_1["default"].createElement("div", {
    className: Home_module_css_1["default"].container
  }, react_1["default"].createElement("h2", null, "Dashboard page"));
};

exports["default"] = dashboard;