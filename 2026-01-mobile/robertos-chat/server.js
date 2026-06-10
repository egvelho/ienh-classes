import express from "express";
import cors from "cors";
import webpush from "web-push";

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());

const vapidKeys = webpush.generateVAPIDKeys();

webpush.setVapidDetails(
  "mailto:email@email.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey,
);

const usersSubscriptions = new Map();

app.get("/public-key", (req, res) => {
  res.json({ publicKey: vapidKeys.publicKey });
});

app.post("/subscribe", (req, res) => {
  const { username, subscription } = req.body;

  if (!username || !subscription) {
    return res
      .status(400)
      .json({ error: "Username e Subscription são obrigatórios." });
  }

  usersSubscriptions.set(username, subscription);
  console.log(`Usuário '${username}' registrado com sucesso.`);

  res.status(201).json({});
});

app.post("/unsubscribe", (req, res) => {
  const { username } = req.body;
  if (username) {
    usersSubscriptions.delete(username);
    console.log(`Usuário '${username}' removido do servidor.`);
  }
  res.status(200).json({});
});

app.post("/send-message", async (req, res) => {
  const { from, to, message } = req.body;

  const targetSubscription = usersSubscriptions.get(to);

  const payload = JSON.stringify({
    title: from ? `Mensagem de @${from}` : "Nova Mensagem Direta",
    body: message,
  });

  try {
    if (targetSubscription) {
      await webpush.sendNotification(targetSubscription, payload);
      console.log(targetSubscription);
      console.log(`Notificação enviada de '${from}' para '${to}'.`);
    } else {
      for (const subscribe of usersSubscriptions) {
        await webpush.sendNotification(subscribe[1], payload);
      }
    }
    return res
      .status(200)
      .json({ message: "Notificação enviada com sucesso!" });
  } catch (err) {
    console.error(`Falha ao enviar push para '${to}':`, err);
    if (err.statusCode === 410 || err.statusCode === 404) {
      usersSubscriptions.delete(to);
    }
    return res
      .status(500)
      .json({ error: "Falha ao despachar a notificação push." });
  }
});

app.listen(PORT, () =>
  console.log(`Servidor de Comunicação Push rodando na porta ${PORT}`),
);
