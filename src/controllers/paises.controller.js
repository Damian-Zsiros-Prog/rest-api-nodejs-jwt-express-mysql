import { dbConnection } from "../database";

export const getAllPaises = (req, res) => {
  dbConnection.query("SELECT * FROM paises", (err, rows) => {
    if (!err) {
      return res.status(200).json({
        paises: rows,
      });
    } else {
      console.error(err);
      return res.status(400).json({
        message: "Error at get paises",
        error: err,
      });
    }
  });
};

export const getPaisById = (req, res) => {
  const { id } = req.params;
  dbConnection.query("SELECT * FROM paises WHERE id = ?", [id], (err, rows) => {
    if (!err) {
      return (
        res.status(200),
        json({
          pais: rows,
        })
      );
    } else {
      console.error(err);
      return res.status(400).json({
        message: "Error at get pais with id " + id,
        error: err,
      });
    }
  });
};

export const createPais = (req, res) => {
  const {
    nombre_oficial,
    nombre_comun,
    fechaCreacion,
    capital,
    idioma_oficial,
    gentilico,
    moneda,
    continente,
    extension,
    link_img,
  } = req.body;
  dbConnection.query(
    "INSERT INTO paises ( nombre_oficial, nombre_comun,link_img, fechaCreacion, capital, idioma_oficial, gentilico, moneda, continente, extension) VALUES(?,?,?,?,?,?,?,?,?)",
    [
      nombre_oficial,
      nombre_comun,
      fechaCreacion,
      capital,
      idioma_oficial,
      gentilico,
      moneda,
      continente,
      extension,
      link_img,
    ],
    (err, rows) => {
      if (!err) {
        return res.status(201).json({
          message: "Pais saved",
          paisCreated: {
            nombre_oficial,
            nombre_comun,
            fechaCreacion,
            capital,
            idioma_oficial,
            gentilico,
            moneda,
            continente,
            extension,
            link_img,
          },
        });
      } else {
        console.error(err);
        return (
          res.status(400),
          json({
            message: "Error at save pais",
            error: err,
          })
        );
      }
    }
  );
};

export const updatePais = (req, res) => {
  const { id } = req.params;
  const {
    nombre_oficial,
    nombre_comun,
    fechaCreacion,
    capital,
    idioma_oficial,
    gentilico,
    moneda,
    continente,
    extension,
    link_img,
  } = req.body;
  const updatedAt = new Date();
  dbConnection.query(
    "UPDATE paises SET nombre_oficial=?, nombre_comun=?, link_img=? fechaCreacion=?, capital=?, idioma_oficial=?, gentilico=?, moneda=?, continente=?, extension=?,updatedAt=? WHERE id=?",
    [
      nombre_oficial,
      nombre_comun,
      link_img,
      fechaCreacion,
      capital,
      idioma_oficial,
      gentilico,
      moneda,
      continente,
      extension,
      updatedAt,
      id,
    ],
    (err, rows) => {
      if (!err) {
        return res.status(200).json({
          message: "Pais updated",
          paisUpdated: {
            id,
            nombre_oficial,
            nombre_comun,
            link_img,
            fechaCreacion,
            capital,
            idioma_oficial,
            gentilico,
            moneda,
            continente,
            extension,
            updatedAt,
          },
        });
      } else {
        console.error(err);
        return res.status(400).json({
          message: "Error at update pais",
          error: err,
        });
      }
    }
  );
};

export const deletePais = (req, res) => {
  const { id } = req.params;
  dbConnection.query("DELETE FROM paises WHERE id = ?", [id], (err, rows) => {
    if (!err) {
      return res.status(200).json({
        message: "Pais deleted",
      });
    } else {
      console.error(err);
      return res.status(400).json({
        message: "Error at delete pais with id " + id,
        error: err,
      });
    }
  });
};
