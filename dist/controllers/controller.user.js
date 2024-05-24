"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.metodos = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _db = _interopRequireDefault(require("../database/db"));
var _mensa = _interopRequireDefault(require("../res/mensa"));
var listarusuarios = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var respuesta;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _db["default"].query("CALL sp_listar_usuarios()");
        case 3:
          respuesta = _context.sent;
          _mensa["default"].success(req, res, 200, respuesta[0]);
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          _mensa["default"].error(req, res, 500, _context.t0);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function listarusuarios(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var mostrarusuarios = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, respuesta;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.prev = 1;
          _context2.next = 4;
          return _db["default"].query("CALL sp_mostrar_usuario(?);", [id]);
        case 4:
          respuesta = _context2.sent;
          _mensa["default"].success(req, res, 200, respuesta[0]);
          _context2.next = 11;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          _mensa["default"].error(req, res, 500, _context2.t0);
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return function mostrarusuarios(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var agregarusuarios = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var nombre, respuesta;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          nombre = req.body.nombre;
          _context3.prev = 1;
          _context3.next = 4;
          return _db["default"].query("CALL sp_agregar_usuario(?);", [nombre]);
        case 4:
          respuesta = _context3.sent;
          if (respuesta[0].affectedRows == 1) {
            _mensa["default"].success(req, res, 200, "usuario agregado");
          } else {
            _mensa["default"].error(req, res, 400, "usuario no agregado");
          }
          _context3.next = 11;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          _mensa["default"].error(req, res, 500, _context3.t0);
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return function agregarusuarios(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var modificarusuarios = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body, id, nombre, respuesta;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _req$body = req.body, id = _req$body.id, nombre = _req$body.nombre;
          _context4.prev = 1;
          _context4.next = 4;
          return _db["default"].query("CALL sp_modificar_usuario(?,?);", [id, nombre]);
        case 4:
          respuesta = _context4.sent;
          if (respuesta[0].affectedRows == 1) {
            _mensa["default"].success(req, res, 200, "usuario modificad0");
          } else {
            _mensa["default"].error(req, res, 400, "usuarios no modificado");
          }
          _context4.next = 11;
          break;
        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          _mensa["default"].error(req, res, 500, _context4.t0);
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return function modificarusuarios(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var eliminarusuarios = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, respuesta;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.body.id;
          _context5.prev = 1;
          _context5.next = 4;
          return _db["default"].query("CALL sp_eliminar_usuario(?);", [id]);
        case 4:
          respuesta = _context5.sent;
          if (respuesta[0].affectedRows == 1) {
            _mensa["default"].success(req, res, 200, "usuario eliminado");
          } else {
            _mensa["default"].error(req, res, 400, "usuario no eliminado");
          }
          _context5.next = 11;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          _mensa["default"].error(req, res, 500, _context5.t0);
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return function eliminarusuarios(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var metodos = exports.metodos = {
  listarusuarios: listarusuarios,
  mostrarusuarios: mostrarusuarios,
  agregarusuarios: agregarusuarios,
  modificarusuarios: modificarusuarios,
  eliminarusuarios: eliminarusuarios
};