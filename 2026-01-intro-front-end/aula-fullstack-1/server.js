import express from "express";

const port = 8080;
const app = express();

app.use(express.json());

let frase = "oi aluninhos";

app.get("/", (req, res) => {
  res.sendFile("/home/duda/Downloads/aula-fullstack-1/index.html");
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
