import { io } from "socket.io-client";

const baseUrl = "http://192.168.242.172";
const socketUrl = `${baseUrl}:8080`;

const mensagensDiv = document.querySelector("#mensagens-chat-div");
const mensagemInput = document.querySelector("#mensagem-chat-input");
const enviarBtn = document.querySelector("#mensagem-chat-btn");

const usernameInput = document.querySelector("#username-input");
const usernameBtn = document.querySelector("#username-btn");

const usuariosChatDiv = document.querySelector("#usuarios-chat-div");

const socket = io(socketUrl);

let directUsername = null;

usernameBtn.onclick = async () => {
  const username = usernameInput.value;

  if (!username || !username?.trim()) {
    alert("Precisa definir um username ou a profa tira nota do Gabriel.");
    return;
  }

  socket.emit("usuario-entrou", {
    username,
  });

  usernameInput.disabled = true;
  usernameBtn.remove();
  await registerPush(username);
};

enviarBtn.onclick = async () => {
  const username = usernameInput.value;

  if (!username || !username?.trim()) {
    alert("Precisa definir um username ou a profa tira nota do Gabriel.");
    return;
  }

  const mensagem = mensagemInput.value;
  socket.emit("mensagem-enviada", {
    mensagem,
    from: username,
    to: directUsername,
  });
  mensagemInput.value = "";
  await sendMessage({
    message: mensagem,
    from: username,
    to: directUsername,
  });
};

socket.on("connect", () => {
  socket.on("mensagem-recebida", ({ mensagem, from }) => {
    const mensagemEl = document.createElement("p");
    mensagemEl.innerHTML = `${from} disse: ${mensagem}`;
    mensagensDiv.append(mensagemEl);
  });

  socket.on("usuarios-atualizou", ({ usuarios }) => {
    const usuariosEls = [];
    for (const usuario of usuarios) {
      const usuarioEl = document.createElement("button");
      usuarioEl.innerHTML = usuario;
      usuarioEl.onclick = () => {
        const username = usuarioEl.textContent;

        [...document.querySelectorAll("#usuarios-chat-div button")].forEach(
          (usuario) => {
            usuario.style.backgroundColor = null;
          },
        );

        if (directUsername === username) {
          directUsername = null;
          return;
        }

        usuarioEl.style.backgroundColor = "red";
        directUsername = usuarioEl.textContent;
      };

      usuariosEls.push(usuarioEl);
    }

    usuariosChatDiv.innerHTML = "";
    usuariosChatDiv.append(...usuariosEls);
  });
});

const serverPath = `${baseUrl}:3000`;

// 192.168.242.172:5173

/*
document
  .getElementById("btn-subscribe")
  .addEventListener("click", registerPush);
document
  .getElementById("btn-unsubscribe")
  .addEventListener("click", unregisterPush);
document.getElementById("btn-trigger").addEventListener("click", sendMessage);
*/

async function registerPush(username) {
  if (!("serviceWorker" in navigator) || !("PushManager" in window)) {
    alert("Seu navegador não suporta notificações Push.");
    return;
  }

  const register = await navigator.serviceWorker.register("/sw.js");
  console.log("Service Worker registrado.");

  const response = await fetch(`${serverPath}/public-key`);
  const { publicKey } = await response.json();

  const existingSubscription = await register.pushManager.getSubscription();
  if (existingSubscription) {
    await existingSubscription.unsubscribe();
  }

  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: publicKey,
  });

  await fetch(`${serverPath}/subscribe`, {
    method: "POST",
    body: JSON.stringify({ username, subscription }),
    headers: { "Content-Type": "application/json" },
  });

  alert(`Inscrição realizada com sucesso para o usuário: ${username}`);
}

async function unregisterPush(username) {
  const register = await navigator.serviceWorker.getRegistration();

  if (register) {
    const subscription = await register.pushManager.getSubscription();
    if (subscription) {
      await subscription.unsubscribe();
    }
  }

  if (username) {
    await fetch(`${serverPath}/unsubscribe`, {
      method: "POST",
      body: JSON.stringify({ username }),
      headers: { "Content-Type": "application/json" },
    });
  }

  alert("Você foi desinscrito das notificações!");
}

async function sendMessage({ from, to, message }) {
  const response = await fetch(`${serverPath}/send-message`, {
    method: "POST",
    body: JSON.stringify({ from, to, message }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();
}
