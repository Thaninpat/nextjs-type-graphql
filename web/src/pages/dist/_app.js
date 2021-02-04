"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
require("../styles/globals.css");
var client_1 = require("@apollo/client");
var client_2 = require("../apollo/client");
var AuthContextProvider_1 = require("../context/AuthContextProvider");
// import '../styles/globals.css'
var NavBar_1 = require("../components/NavBar");
var react_1 = require("@chakra-ui/react");
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (React.createElement(client_1.ApolloProvider, { client: client_2.client },
        React.createElement(react_1.ChakraProvider, null,
            React.createElement(react_1.CSSReset, null),
            React.createElement(AuthContextProvider_1["default"], null,
                React.createElement(NavBar_1["default"], null),
                React.createElement(Component, __assign({}, pageProps))))));
}
exports["default"] = MyApp;
