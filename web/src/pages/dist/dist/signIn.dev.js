"use strict";

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

exports.__esModule = true;

var react_1 = require("react");

var link_1 = require("next/link");

var graphql_1 = require("../generated/graphql");

var react_hook_form_1 = require("react-hook-form");

var AuthContextProvider_1 = require("../context/AuthContextProvider");

var router_1 = require("next/router");

var error_message_1 = require("@hookform/error-message");

var authHelpers_1 = require("../helpers/authHelpers");

var Wrapper_1 = require("../components/Wrapper");

var react_2 = require("@chakra-ui/react");

var signIn = function signIn() {
  var _a;

  var _b = react_1.useContext(AuthContextProvider_1.AuthContext),
      handleAuthAction = _b.handleAuthAction,
      setAuthUser = _b.setAuthUser;

  var _c = react_hook_form_1.useForm(),
      register = _c.register,
      errors = _c.errors,
      handleSubmit = _c.handleSubmit,
      formState = _c.formState;

  var router = router_1.useRouter();

  var _d = graphql_1.useSignInMutation({
    variables: {
      username: '',
      password: ''
    }
  }),
      signInMutation = _d[0],
      _e = _d[1],
      loading = _e.loading,
      error = _e.error;

  var submitSignin = handleSubmit(function (_a) {
    var username = _a.username,
        password = _a.password;
    return __awaiter(void 0, void 0, void 0, function () {
      var response, signin, user, error_1;

      var _b;

      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            _c.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , signInMutation({
              variables: {
                username: username,
                password: password
              }
            })];

          case 1:
            response = _c.sent();

            if ((_b = response.data) === null || _b === void 0 ? void 0 : _b.signin) {
              signin = response.data.signin;
              user = response.data.signin;

              if (signin) {
                handleAuthAction('close');
                setAuthUser(signin);
                router.push('/');
              }

              if (authHelpers_1.isAdmin(user)) {
                //  Push user to their admin
                router.push('/');
              } else {
                //  Push user to their user
                router.push('/');
              }
            }

            return [3
            /*break*/
            , 3];

          case 2:
            error_1 = _c.sent();
            console.log(error_1);
            setAuthUser(null);
            return [3
            /*break*/
            , 3];

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  });
  return react_1["default"].createElement(Wrapper_1.Wrapper, {
    variant: 'small'
  }, react_1["default"].createElement(react_2.Box, {
    d: 'flex',
    mt: '2',
    alignItems: 'center',
    justifyContent: 'center'
  }, react_1["default"].createElement(react_2.Heading, {
    as: 'h2',
    size: 'xl'
  }, "Sign in")), react_1["default"].createElement("form", {
    onSubmit: submitSignin
  }, react_1["default"].createElement(react_2.FormControl, null, react_1["default"].createElement(react_2.FormLabel, {
    htmlFor: 'username'
  }, "Username"), react_1["default"].createElement(react_2.Input, {
    type: 'text',
    name: 'username',
    id: 'username',
    placeholder: 'Your username',
    "aria-invalid": errors.username ? 'true' : 'false',
    ref: register({
      required: 'Username is required',
      minLength: {
        value: 3,
        message: 'Username must be at least 3 characters'
      },
      maxLength: {
        value: 60,
        message: 'Username must be not more than 60 characters '
      }
    })
  }), react_1["default"].createElement(error_message_1.ErrorMessage, {
    errors: errors,
    name: 'username',
    render: function render(_a) {
      var message = _a.message;
      return react_1["default"].createElement("p", {
        style: {
          color: 'red',
          fontSize: '13px'
        }
      }, message);
    }
  })), react_1["default"].createElement(react_2.FormControl, null, react_1["default"].createElement(react_2.FormLabel, {
    htmlFor: 'password'
  }, "Password"), react_1["default"].createElement(react_2.Input, {
    type: 'password',
    name: 'password',
    id: 'password',
    placeholder: 'Your password',
    "aria-invalid": errors.password ? 'true' : 'false',
    ref: register({
      required: 'Password is required',
      minLength: {
        value: 6,
        message: 'Password must be at least 6 characters'
      },
      maxLength: {
        value: 60,
        message: 'Password must be not more than 60 characters '
      }
    })
  }), react_1["default"].createElement(error_message_1.ErrorMessage, {
    errors: errors,
    name: 'password',
    render: function render(_a) {
      var message = _a.message;
      return react_1["default"].createElement("p", {
        style: {
          color: 'red',
          fontSize: '13px'
        }
      }, message);
    }
  })), react_1["default"].createElement(react_2.Button, {
    mt: 4,
    mb: 4,
    ml: 1,
    colorScheme: 'blue',
    type: 'submit',
    isLoading: formState.isSubmitting
  }, "Submit"), react_1["default"].createElement(react_2.Box, {
    m: 1
  }, error && react_1["default"].createElement("p", {
    style: {
      color: 'red',
      fontSize: '13px'
    }
  }, ((_a = error.graphQLErrors[0]) === null || _a === void 0 ? void 0 : _a.message) || 'Sorry, something went wrong!!!')), react_1["default"].createElement(react_2.Box, {
    m: 0
  }, react_1["default"].createElement(react_2.Text, {
    as: 'sub',
    fontSize: 'md'
  }, "Forgot password?", react_1["default"].createElement(link_1["default"], {
    href: '/signIn'
  }, react_1["default"].createElement("a", {
    style: {
      color: '#0366d6'
    }
  }, "Click")))), react_1["default"].createElement(react_2.Box, {
    m: 0
  }, react_1["default"].createElement(react_2.Text, {
    as: 'sub',
    fontSize: 'md'
  }, "New account?", react_1["default"].createElement(link_1["default"], {
    href: '/signUp'
  }, react_1["default"].createElement("a", {
    style: {
      color: '#0366d6'
    }
  }, "Create account"))))));
};

exports["default"] = signIn;