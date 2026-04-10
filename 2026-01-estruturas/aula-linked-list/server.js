import express from "express";
import cors from "cors";
import { LinkedList } from "./linked-list.js";

const lista = new LinkedList();

const port = 8080;

const app = express();

app.use(cors());
app.use(express.json());

app.post("/push", (req, res) => {
  const json = req.body;
  lista.push(json.value);
  res.status(201).json({ success: true });
});

app.get("/list", (req, res) => {
  const array = lista.toArray();
  res.status(200).json(array);
});

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`),
);
