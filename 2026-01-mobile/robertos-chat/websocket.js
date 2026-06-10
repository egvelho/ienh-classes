import { createServer } from "http";
import { Server } from "socket.io";

const host = "0.0.0.0";
const port = 8080;

const usuarios = {};

const httpServer = createServer((req, res) => {
  res.writeHead(200);
  res.end("VAI EMBORA");
});

const io = new Server(httpServer, {
  cors: "*",
});

io.on("connection", (socket) => {
  const mandaPraTodoMundoInclusivePraMim = (event, mensagem) => {
    socket.emit(event, mensagem);
    socket.broadcast.emit(event, mensagem);
  };

  socket.on("usuario-entrou", ({ username }) => {
    console.log("alguéeem entroooou", username);
    usuarios[username] = socket.id;
    mandaPraTodoMundoInclusivePraMim("usuarios-atualizou", {
      usuarios: Object.keys(usuarios),
    });
  });

  socket.on("mensagem-enviada", (message) => {
    console.log(message);
    if (message.to) {
      const usernameToId = usuarios[message.to];
      socket.to(usernameToId).emit("mensagem-recebida", message);
    } else {
      mandaPraTodoMundoInclusivePraMim("mensagem-recebida", message);
    }
  });
});

httpServer.listen(port, host, () => {
  console.log("O websocket tá on!!!! Cuidado novinha");
});
