"use strict";

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__esModule = true;
exports.InputField = void 0;

var react_1 = require("react"); // import { useField } from 'formik'


var react_2 = require("@chakra-ui/react");

var react_hook_form_1 = require("react-hook-form");

var error_message_1 = require("@hookform/error-message"); // '' =. false
// 'error message stuff' => true


exports.InputField = function (_a) {
  var name = _a.name,
      label = _a.label,
      placeholder = _a.placeholder,
      type = _a.type;

  var _b = react_hook_form_1.useForm(),
      register = _b.register,
      errors = _b.errors;

  return react_1["default"].createElement(react_2.FormControl, null, react_1["default"].createElement(react_2.FormLabel, {
    htmlFor: name
  }, label), react_1["default"].createElement(react_2.Input, __assign({}, register, {
    id: name,
    type: type,
    placeholder: placeholder,
    ref: register({
      required: true
    })
  })), react_1["default"].createElement(error_message_1.ErrorMessage, {
    errors: errors,
    name: name === 'username' ? 'username' : 'password',
    render: function render(_a) {
      var message = _a.message;
      return react_1["default"].createElement("p", {
        style: {
          color: 'red',
          fontSize: '13px'
        }
      }, message);
    }
  }));
};