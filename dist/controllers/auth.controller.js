"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signup = exports.login = void 0;

var _database = require("../database");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var login = function login(req, res) {
  var _req$body = req.body,
      username = _req$body.username,
      password = _req$body.password;

  if (username && password && (username !== "" || password !== "")) {
    _database.dbConnection.query("SELECT * FROM users WHERE username=? AND password=?", [username, password], function (err, rows, fields) {
      if (!err) {
        if (rows.length > 0) {
          var token = _jsonwebtoken["default"].sign({
            id: rows[0].id
          }, "shh", {
            expiresIn: 86400
          });

          return res.status(200).json({
            message: "Logued",
            token: token
          });
        } else {
          return res.status(400).json({
            message: "Datos incorrectos o no existe el usuario. En ese caso registrate...",
            token: null
          });
        }
      } else {
        return console.error(err);
      }
    });
  } else {
    return res.json({
      message: "Faltan los valores del username y/o del password o estan sus valores vacios. Ingreselos e intentelo de nuevo"
    });
  }
};

exports.login = login;

var signup = function signup(req, res) {
  var _req$body2 = req.body,
      username = _req$body2.username,
      password = _req$body2.password;

  if (username && password && (username !== "" || password !== "")) {
    _database.dbConnection.query("SELECT * FROM users WHERE username=?", [username], function (err, rows, fields) {
      if (!err) {
        if (!rows.length > 0) {
          _database.dbConnection.query("INSERT INTO users (username,password) VALUES(?,?)", [username, password], function (err) {
            if (!err) {
              return res.status(200).json({
                message: "Singup succesfully. Login now..."
              });
            } else {
              console.error(err);
              return res.status(400).json({
                message: "Error at signup",
                errpr: err
              });
            }
          });
        } else {
          res.status(400).json({
            message: "User exists"
          });
        }
      }
    });
  } else {
    return res.json({
      message: "Faltan los valores del username y/o del password o estan sus valores vacios. Ingreselos e intentelo de nuevo"
    });
  }
};

exports.signup = signup;