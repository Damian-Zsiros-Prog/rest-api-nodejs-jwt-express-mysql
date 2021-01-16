"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletePais = exports.updatePais = exports.createPais = exports.getPaisById = exports.getAllPaises = void 0;

var _database = require("../database");

var getAllPaises = function getAllPaises(req, res) {
  _database.dbConnection.query("SELECT * FROM paises", function (err, rows) {
    if (!err) {
      return res.status(200).json({
        paises: rows
      });
    } else {
      console.error(err);
      return res.status(400).json({
        message: "Error at get paises",
        error: err
      });
    }
  });
};

exports.getAllPaises = getAllPaises;

var getPaisById = function getPaisById(req, res) {
  var id = req.params.id;

  _database.dbConnection.query("SELECT * FROM paises WHERE id = ?", [id], function (err, rows) {
    if (!err) {
      return res.status(200), json({
        pais: rows
      });
    } else {
      console.error(err);
      return res.status(400).json({
        message: "Error at get pais with id " + id,
        error: err
      });
    }
  });
};

exports.getPaisById = getPaisById;

var createPais = function createPais(req, res) {
  var _req$body = req.body,
      nombre_oficial = _req$body.nombre_oficial,
      nombre_comun = _req$body.nombre_comun,
      fechaCreacion = _req$body.fechaCreacion,
      capital = _req$body.capital,
      idioma_oficial = _req$body.idioma_oficial,
      gentilico = _req$body.gentilico,
      moneda = _req$body.moneda,
      continente = _req$body.continente,
      extension = _req$body.extension;

  _database.dbConnection.query("INSERT INTO paises ( nombre_oficial, nombre_comun, fechaCreacion, capital, idioma_oficial, gentilico, moneda, continente, extension) VALUES(?,?,?,?,?,?,?,?,?)", [nombre_oficial, nombre_comun, fechaCreacion, capital, idioma_oficial, gentilico, moneda, continente, extension], function (err, rows) {
    if (!err) {
      return res.status(201).json({
        message: "Pais saved",
        paisCreated: {
          nombre_oficial: nombre_oficial,
          nombre_comun: nombre_comun,
          fechaCreacion: fechaCreacion,
          capital: capital,
          idioma_oficial: idioma_oficial,
          gentilico: gentilico,
          moneda: moneda,
          continente: continente,
          extension: extension
        }
      });
    } else {
      console.error(err);
      return res.status(400), json({
        message: "Error at save pais",
        error: err
      });
    }
  });
};

exports.createPais = createPais;

var updatePais = function updatePais(req, res) {
  var id = req.params.id;
  var _req$body2 = req.body,
      nombre_oficial = _req$body2.nombre_oficial,
      nombre_comun = _req$body2.nombre_comun,
      fechaCreacion = _req$body2.fechaCreacion,
      capital = _req$body2.capital,
      idioma_oficial = _req$body2.idioma_oficial,
      gentilico = _req$body2.gentilico,
      moneda = _req$body2.moneda,
      continente = _req$body2.continente,
      extension = _req$body2.extension;
  var updatedAt = new Date();

  _database.dbConnection.query("UPDATE paises SET nombre_oficial=?, nombre_comun=?, fechaCreacion=?, capital=?, idioma_oficial=?, gentilico=?, moneda=?, continente=?, extension=?,updatedAt=? WHERE id=?", [nombre_oficial, nombre_comun, fechaCreacion, capital, idioma_oficial, gentilico, moneda, continente, extension, updatedAt, id], function (err, rows) {
    if (!err) {
      return res.status(200).json({
        message: "Pais updated",
        paisUpdated: {
          id: id,
          nombre_oficial: nombre_oficial,
          nombre_comun: nombre_comun,
          fechaCreacion: fechaCreacion,
          capital: capital,
          idioma_oficial: idioma_oficial,
          gentilico: gentilico,
          moneda: moneda,
          continente: continente,
          extension: extension,
          updatedAt: updatedAt
        }
      });
    } else {
      console.error(err);
      return res.status(400).json({
        message: "Error at update pais",
        error: err
      });
    }
  });
};

exports.updatePais = updatePais;

var deletePais = function deletePais(req, res) {
  var id = req.params.id;

  _database.dbConnection.query("DELETE FROM paises WHERE id = ?", [id], function (err, rows) {
    if (!err) {
      return res.status(200).json({
        message: "Pais deleted"
      });
    } else {
      console.error(err);
      return res.status(400).json({
        message: "Error at delete pais with id " + id,
        error: err
      });
    }
  });
};

exports.deletePais = deletePais;