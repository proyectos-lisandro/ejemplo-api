"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
// aca vamos a importar app

// aca llamamos el puerto con listen

_app["default"].listen(_app["default"].get("port"), function () {
  console.log("http://localhost:".concat(_app["default"].get("port")));
});

// aca finalizamos con el puerto