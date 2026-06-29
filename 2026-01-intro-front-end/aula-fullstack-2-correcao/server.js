import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 8080;
const app = express();

app.use(express.json());

const tarefas = [
  "Calibrar o canhão de plasma do mecha antes de colher mandioca.",
  "Verificar se o café está forte o suficiente para um veterano da Guerra do Vietnã.",
  "Explicar para as galinhas como a engenharia do petróleo pode revolucionar o galinheiro.",
  "Patrulhar a fazenda em modo stealth, porque o Acre é grande demais pra vacilar.",
  "Assistir à live do Felipe Neto enquanto o piloto automático do mecha ara o solo.",
  "Convencer os vizinhos de que um doutorado em engenharia do petróleo é extremamente útil para plantar milho.",
  "Trocar o óleo do mecha usando especificações dignas de uma plataforma offshore.",
  "Espantar uma capivara suspeita utilizando protocolos militares aprendidos décadas atrás.",
  "Atualizar a planilha de produtividade e fingir que não ouviu ninguém perguntar 'mas por que um mecha?'.",
  "Encerrar o expediente contemplando como a vida levou um veterano, doutor, agricultor e piloto de robô gigante ao Acre.",
];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

app.post("/tarefas", (req, res) => {
  const novaTarefa = req.body.tarefa;
  const ehTarefaValida = novaTarefa.length > 0;
  ehTarefaValida && tarefas.push(novaTarefa);
  res.json({ sucesso: ehTarefaValida });
});

app.get("/tarefas/:indice", (req, res) => {
  const indice = req.params.indice;
  const tarefa = tarefas[indice - 1];
  res.json({ tarefa: tarefa ? tarefa : "" });
});

app.listen(port, () => console.log("Server tá on!"));
