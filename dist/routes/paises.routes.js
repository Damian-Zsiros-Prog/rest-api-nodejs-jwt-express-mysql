"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _paises = require("../controllers/paises.controller");

var _auth = require("../controllers/auth.controller");

var _verifyToken = _interopRequireDefault(require("../middlewares/verifyToken.middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.get("/", function (req, res) {
  return res.redirect("/api/paises");
});
router.post("/api/login", _auth.login);
router.post("/api/signup", _auth.signup);
router.route("/api/paises").get(_verifyToken["default"], _paises.getAllPaises).post(_verifyToken["default"], _paises.createPais);
router.route("/api/pais/:id").get(_verifyToken["default"], _paises.getPaisById).put(_verifyToken["default"], _paises.updatePais)["delete"](_verifyToken["default"], _paises.deletePais);
var _default = router;
exports["default"] = _default;