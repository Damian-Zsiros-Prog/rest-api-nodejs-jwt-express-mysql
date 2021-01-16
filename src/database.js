import mysql from "mysql";

export const dbConnection = mysql.createConnection({
    host: "localhost",
  user: "root",
  password: "",
  database: "rest-api-paises-nodejs-jwt-mysql",
});

dbConnection.connect((err) => {
  if (!err) {
    return console.log("DB is connected");
  } else {
    return console.error(err);
  }
});
