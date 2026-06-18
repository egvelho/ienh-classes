import { io } from "socket.io-client";
import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const socket = io("http://0.0.0.0:3000");

socket.on("connect", async () => {
  console.log("a mãe tá on!");
  socket.on("mensagem", (message) => {
    console.log("Mensagem recebida: " + message);
  });

  while (true) {
    const mensagem = await rl.question("Digite a mensagem: ");
    socket.emit("mensagem", mensagem);
  }
});
