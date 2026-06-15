import express from "express";
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 8080;
const app = express();

app.use(express.json());

let frase = "oi aluninhos";

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html");
});

app.get("/mostra-frase", (req, res) => {
  res.send({
    frase: frase,
    sucesso: true,
  });
});

app.get("/troca-frase/:frase", (req, res) => {
  frase = req.params.frase;
  res.send({
    novaFrase: frase,
    sucess: true,
  });
});

app.listen(port, () => console.log("Server tá on!"));
