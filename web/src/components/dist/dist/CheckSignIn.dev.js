"use strict";

exports.__esModule = true;
exports.CheckSignIn = void 0;

var router_1 = require("next/router");

var react_1 = require("react");

var AuthContextProvider_1 = require("../context/AuthContextProvider");

exports.CheckSignIn = function (_a) {
  var loggedInUser = react_1.useContext(AuthContextProvider_1.AuthContext).loggedInUser;
  react_1.useEffect(function () {
    // If user in not authenticated, push to home page
    if (!loggedInUser) {
      router_1["default"].push('/signIn'); //   alert('Please SignIn.')
    }
  }, [loggedInUser]);
  return react_1["default"].createElement("div", null);
};