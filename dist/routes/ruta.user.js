"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controller = require("../controllers/controller.user");
var rutausuario = (0, _express.Router)();
rutausuario.get("/usuario", _controller.metodos.listarusuarios);
rutausuario.get("/usuario/:id", _controller.metodos.mostrarusuarios);
rutausuario.post("/usuario", _controller.metodos.agregarusuarios);
rutausuario.put("/usuario", _controller.metodos.modificarusuarios);
rutausuario["delete"]("/usuario", _controller.metodos.eliminarusuarios);
var _default = exports["default"] = rutausuario;