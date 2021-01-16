"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbConnection = void 0;

var _mysql = _interopRequireDefault(require("mysql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dbConnection = _mysql["default"].createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "rest-api-paises-nodejs-jwt-mysql"
});

exports.dbConnection = dbConnection;
dbConnection.connect(function (err) {
  if (!err) {
    return console.log("DB is connected");
  } else {
    return console.error(err);
  }
});