import { dbConnection } from "../database";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const login = (req, res) => {
  const { username, password } = req.body;
  if (username && password && (username !== "" || password !== "")) {
    dbConnection.query(
      "SELECT * FROM users WHERE username=?",
      [username, password],
      (err, rows, fields) => {
        if (!err) {
          if (rows.length > 0) {
            const token = jwt.sign({ id: rows[0].id }, "shh", {
              expiresIn: 86400,
            });
            return res.status(200).json({
              message: "Logued",
              token,
            });
          } else {
            return res.status(400).json({
              message:
                "Datos incorrectos o no existe el usuario. En ese caso registrate...",
              token: null,
            });
          }
        } else {
          return console.error(err);
        }
      }
    );
  } else {
    return res.json({
      message:
        "Faltan los valores del username y/o del password o estan sus valores vacios. Ingreselos e intentelo de nuevo",
    });
  }
};

export const signup = (req, res) => {
  const { username, password } = req.body;

  if (username && password && (username !== "" || password !== "")) {
    dbConnection.query(
      "SELECT * FROM users WHERE username=?",
      [username],
      (err, rows, fields) => {
        if (!err) {
          if (!rows.length > 0) {
            const passEncryptd = bcrypt.hashSync(password, 10);
            dbConnection.query(
              "INSERT INTO users (username,password) VALUES(?,?)",
              [username, passEncryptd],
              (err) => {
                if (!err) {
                  return res.status(200).json({
                    message: "Singup succesfully. Login now...",
                  });
                } else {
                  console.error(err);
                  return res.status(400).json({
                    message: "Error at signup",
                    errpr: err,
                  });
                }
              }
            );
          } else {
            res.status(400).json({
              message: "User exists",
            });
          }
        }
      }
    );
  } else {
    return res.json({
      message:
        "Faltan los valores del username y/o del password o estan sus valores vacios. Ingreselos e intentelo de nuevo",
    });
  }
};
