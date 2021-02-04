"use strict";

exports.__esModule = true;

var react_1 = require("@chakra-ui/react");

var react_2 = require("react");

var user = function user(_a) {
  var _b = react_2.useState(''),
      addUser = _b[0],
      setAddUser = _b[1];

  var _c = react_2.useState(''),
      addRole = _c[0],
      setAddRole = _c[1];

  return react_2["default"].createElement(react_1.Flex, {
    align: 'center',
    justify: 'center',
    p: 20,
    flexDirection: 'column'
  }, react_2["default"].createElement(react_1.Heading, null, "User page"), react_2["default"].createElement(react_1.Container, {
    margin: 10
  }, react_2["default"].createElement(react_1.Stack, {
    spacing: 4
  }, react_2["default"].createElement(react_1.Input, {
    type: 'text',
    placeholder: 'Input user',
    value: addUser,
    onChange: function onChange(event) {
      setAddUser(event.target.value);
    }
  }), react_2["default"].createElement(react_1.Input, {
    type: 'text',
    placeholder: 'Input role',
    value: addRole,
    onChange: function onChange(event) {
      setAddRole(event.target.value);
    }
  }))));
};

exports["default"] = user;