import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();
app.use(cors());

const storage = multer.diskStorage({
  destination: "arquivos",
  filename(req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer({
  storage,
});

app.post("/upload", upload.single("arquivo"), (req, res) => {
  res.status(201).end("Arquivo enviado com sucesso!");
});

app.get("/download/:name", (req, res) => {
  res.download(`arquivos/${req.params.name}`);
});

app.listen("8080", () =>
  console.log("Servidor iniciado em http://localhost:8080")
);
