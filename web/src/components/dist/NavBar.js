"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var router_1 = require("next/router");
// import styled from 'styled-components'
var AuthContextProvider_1 = require("../context/AuthContextProvider");
var graphql_1 = require("../generated/graphql");
var react_2 = require("@chakra-ui/react");
var NavBar = function (_a) {
    var _b = react_1.useContext(AuthContextProvider_1.AuthContext), loggedInUser = _b.loggedInUser, handleAuthAction = _b.handleAuthAction, setAuthUser = _b.setAuthUser;
    var signoutMutation = graphql_1.useSignoutMutation()[0];
    var handleSignout = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, signoutMutation()];
                case 1:
                    response = _c.sent();
                    if (!!((_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.signout) === null || _b === void 0 ? void 0 : _b.message)) {
                        setAuthUser(null);
                        // ทำให้ TAP อื่นๆ Signout ออกไปด้วย
                        window.localStorage.setItem('signout', Date.now().toString());
                        //  Push user go home page
                        router_1["default"].push('/signIn');
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _c.sent();
                    alert('Sorry cannot proceed');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var body = null;
    if (!!loggedInUser) {
        body = (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(react_2.Flex, null,
                react_1["default"].createElement(link_1["default"], { href: '/' }, "Home"),
                react_1["default"].createElement(link_1["default"], { href: '/user' }, "Users"),
                react_1["default"].createElement(link_1["default"], { href: '/budgetOverview' }, "Budget"),
                react_1["default"].createElement(link_1["default"], { href: '/jobIt' }, "Job It")),
            react_1["default"].createElement(react_2.Menu, null,
                react_1["default"].createElement(react_2.MenuButton, { size: 'sm', mr: 4, ml: 4 },
                    react_1["default"].createElement(react_2.Avatar, { size: 'sm', name: loggedInUser.username, src: '' })),
                react_1["default"].createElement(react_2.MenuList, { color: 'black' },
                    react_1["default"].createElement(react_2.MenuItem, null, "Edit profile"),
                    react_1["default"].createElement(react_2.MenuItem, { type: 'submit', onClick: handleSignout }, "Sign Out")))));
    }
    else {
        body = (react_1["default"].createElement(react_2.Flex, null,
            react_1["default"].createElement(link_1["default"], { href: '/signIn' }, "Sign In"),
            react_1["default"].createElement(link_1["default"], { href: '/signUp' }, "Sign Up")));
    }
    return (react_1["default"].createElement(react_2.Box, { bg: '#888', w: '100%', p: 2, color: 'white' },
        react_1["default"].createElement(react_2.Flex, { justifyContent: 'space-between' }, body)));
};
exports["default"] = NavBar;
