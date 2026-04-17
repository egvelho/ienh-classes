import express from "express";
import cors from "cors";
import { CasteloController } from "./castelo/castelo.controller.js";

const PORT = 8080;

const app = express();
app.use(cors());
app.use(express.json());

const casteloController = new CasteloController();
casteloController.inicializaRouter();

app.use("/castelo", casteloController.router);

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Você está na frente do castelo!",
  });
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`),
);
