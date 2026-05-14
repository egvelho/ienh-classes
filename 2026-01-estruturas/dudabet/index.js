import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";
import path from "path";
import { EventEmitter } from "node:events";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8080;

const app = express();
app.use(cors());
app.use(express.json());

const emissorAposta = new EventEmitter();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "banca.html"));
});

app.get("/jogador", (req, res) => {
  res.sendFile(path.join(__dirname, "jogador.html"));
});

app.post("/aposta", (req, res) => {
  const aposta = req.body;

  if (
    typeof aposta !== "object" ||
    !aposta.nome ||
    typeof aposta.nome !== "string" ||
    aposta.nome.length > 16 ||
    !aposta.aposta ||
    typeof aposta.aposta !== "number" ||
    aposta.aposta > 16 ||
    aposta.aposta < 0 ||
    parseInt(aposta.aposta) !== aposta.aposta
  ) {
    return res.json({
      text: "chega gustavo",
    });
  }

  emissorAposta.emit("aposta", aposta);
  res.json(aposta);
});

function delay(s) {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
}

app.get("/cartas", async (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Origin": "*",
    Connection: "keep-alive",
  });

  emissorAposta.on("aposta", (aposta) => {
    console.log(aposta);
    res.write(`data: ${JSON.stringify(aposta)}\n\n`);
  });
});

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`),
);
