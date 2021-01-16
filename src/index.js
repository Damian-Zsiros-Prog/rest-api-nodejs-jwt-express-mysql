import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import router from "./routes/paises.routes";
import morgan from 'morgan';
// Initializations
dotenv.config();
const app = express();
// Settings
app.set("port", process.env.PORT || 3000);
// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Routes
app.use(router);
// Starting the server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
