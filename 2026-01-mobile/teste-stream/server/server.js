const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

app.get("/", (req, res) => {
  res.send(`
    <html>
      <body style="background: #000; display: flex; justify-content: center; align-items: center; height: 100vh;">
        <img id="stream" style="width: 80%; border: 2px solid white;" />
        <script src="/socket.io/socket.io.js"></script>
        <script>
          const socket = io();
          const img = document.getElementById('stream');
          socket.on('frame', (data) => {
            img.src = 'data:image/jpeg;base64,' + data;
          });
        </script>
      </body>
    </html>
  `);
});

io.on("connection", (socket) => {
  console.log("Cliente conectado:", socket.id);

  socket.on("camera-frame", (base64Data) => {
    console.log("frame", base64Data);
    socket.broadcast.emit("frame", base64Data);
  });
});

server.listen(3000, "0.0.0.0", () =>
  console.log("Servidor rodando em http://localhost:3000"),
);
