import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 8080;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/faiz-login-pa-nois", (req, res) => {
  const usuario = req.body.usuario;
  const senha = req.body.senha;

  res.json({ success: usuario === "felipeneto" && senha === "soubetinha" });
});

app.listen(port, () => console.log("Server tá on!"));
