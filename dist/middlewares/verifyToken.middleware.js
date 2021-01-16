"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _database = require("../database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var verifyToken = function verifyToken(req, res, next) {
  var token = req.headers["x-access-token"];
  if (!token) return res.status(403).json({
    message: "No token provided"
  });

  var decoded = _jsonwebtoken["default"].verify(token, "shh");

  req.userId = decoded.id;

  try {
    _database.dbConnection.query("SELECT * FROM users WHERE id=?", [req.userId], function (err, rows, fields) {
      if (!err) {
        if (rows.length > 0) {
          next();
        } else {
          return res.status(404).json({
            message: "No user found",
            token: null
          });
        }
      } else {
        return console.error(err);
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      message: "Unautorizated"
    });
  }
};

var _default = verifyToken;
exports["default"] = _default;