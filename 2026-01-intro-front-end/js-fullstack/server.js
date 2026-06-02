import express from "express";

const port = 8080;
const app = express();

app.use(express.json());

app.get("/golfinho", (req, res) => {
  res.send("<h1>golfinho golfão</h1>");
});

app.get("/ballerina", (req, res) => {
  res.send(
    '<h1>ballerina</h1><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYJhq-mAcYdKBLFWuyoohL3Z2sCbD9Wz2iSg&s">',
  );
});

app.get("/personagens", (req, res) => {
  const personagens = [
    { nome: "Super Choque", idade: 14 },
    { nome: "Juniper Lee", idade: 13 },
    { nome: "Katara", idade: 14 },
  ];

  res.json(personagens);
});

app.listen(port, () => console.log("O server tá on!"));
