import jwt from "jsonwebtoken";
import { dbConnection } from "../database";

const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) return res.status(403).json({ message: "No token provided" });
  const decoded = jwt.verify(token, "shh");
  req.userId = decoded.id;
  try {
    dbConnection.query(
      "SELECT * FROM users WHERE id=?",
      [req.userId],
      (err, rows, fields) => {
        if (!err) {
          if (rows.length > 0) {
            next();
          } else {
            return res.status(404).json({
              message: "No user found",
              token: null,
            });
          }
        } else {
          return console.error(err);
        }
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Unautorizated" });
  }
};

export default verifyToken;
