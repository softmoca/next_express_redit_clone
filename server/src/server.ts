import express from "express";
import morgan from "morgan";
import { AppDataSource } from "./data-source";
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use(express.static("public"));

let port = 4000;
app.listen(port, async () => {
  console.log(`server running at ${port}`);

  AppDataSource.initialize()
    .then(() => {
      console.log("database initialized");
    })
    .catch((error) => console.log(error));
});
