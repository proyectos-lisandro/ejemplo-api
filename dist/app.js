"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _dotenv = require("dotenv");
var _routes = _interopRequireDefault(require("./routes"));
var _morgan = _interopRequireDefault(require("morgan"));
// importaciones

(0, _dotenv.config)();
// esta constante es para la aplicación
var app = (0, _express["default"])();

// esta de aca donde vamos a definir el puerto del servidor
app.set("port", process.env.PORT || 3000);

// middlewares
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
// rutas
app.use("/", _routes["default"]);

// en esta exportamos app para index.js
var _default = exports["default"] = app;