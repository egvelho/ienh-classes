import { createServer } from "http";
import { Server } from "socket.io";
import { HashTable } from "./hash-table.js";

const host = "0.0.0.0";
const port = 3000;

const usuarios = new HashTable(10);

const httpServer = createServer((req, res) => {
  res.writeHead(200);
  res.end("socket.io iniciado");
});

const io = new Server(httpServer, {
  cors: "*",
});

io.on("connection", (socket) => {
  console.log(`chegou o usuário com id ${socket.id}`);
  socket.on("mensagem", (message) => {
    console.log("recebi uma mensagem:" + message);
    socket.broadcast.emit("mensagem", message);
  });
});

httpServer.listen(port, host, () =>
  console.log(`Servidor http rodando em http://${host}:${port}`),
);
