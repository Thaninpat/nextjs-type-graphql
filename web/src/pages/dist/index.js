"use strict";
exports.__esModule = true;
var router_1 = require("next/router");
var react_1 = require("@chakra-ui/react");
var react_2 = require("react");
var AuthContextProvider_1 = require("../context/AuthContextProvider");
// import Loader from 'react-spinners/ScaleLoader'
var react_loader_spinner_1 = require("react-loader-spinner");
var Index = function () {
    var loggedInUser = react_2.useContext(AuthContextProvider_1.AuthContext).loggedInUser;
    react_2.useEffect(function () {
        if (!loggedInUser) {
            router_1["default"].push('/');
        }
    }, [loggedInUser]);
    return !loggedInUser ? (React.createElement(react_1.Flex, { align: 'center', justify: 'center', p: 20 },
        React.createElement(react_loader_spinner_1["default"], { type: 'ThreeDots', color: '#0366d6', height: 50, width: 50, timeout: 10000 }))) : (React.createElement(React.Fragment, null,
        React.createElement(react_1.Flex, { align: 'center', justify: 'center', p: 20, flexDirection: 'column' },
            React.createElement(react_1.Heading, null, "Hello "),
            React.createElement(react_1.Text, { fontSize: '3xl' }, "Home page"),
            React.createElement(react_1.Box, null,
                React.createElement("p", null,
                    " Username : ", loggedInUser === null || loggedInUser === void 0 ? void 0 :
                    loggedInUser.username)))));
};
exports["default"] = Index;
