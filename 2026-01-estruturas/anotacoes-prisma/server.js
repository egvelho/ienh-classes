import express from "express";
import cors from "cors";
import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { z, ZodError } from "zod";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const PORT = 8080;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.get("/usuarios", async (req, res) => {
  const usuarios = await prisma.user.findMany();
  res.json(usuarios);
});

const userDto = z.object({
  name: z.string().min(2).max(200),
  surname: z.string().min(2).max(200),
  age: z.number("Tua idade tá errada rapá"),
  email: z.email(),
  address: z.string().min(5).max(200),
});

app.post("/usuarios", async (req, res) => {
  const novoUsuario = req.body;
  userDto.parse(novoUsuario);
  const usuarioCriado = await prisma.user.create({ data: novoUsuario });
  res.json(usuarioCriado);
});

app.post("/anotacoes", async (req, res) => {
  const anotacao = req.body;
  const anotacaoCriada = await prisma.note.create({ data: anotacao });
  res.json(anotacaoCriada);
});

app.use((error, req, res, next) => {
  if (error instanceof ZodError) {
    res.json(error.issues);
    return;
  }

  throw error;
});

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`),
);
