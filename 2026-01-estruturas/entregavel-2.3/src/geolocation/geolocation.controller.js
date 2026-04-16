import { Router } from "express";
import { GeolocationService } from "./geolocation.service.js";

// É PROIBIDO IMPORTAR QUALQUER COISA ADICIONAL AQUI!

export class GeolocationController {
  constructor() {
    this.geolocationService = new GeolocationService();
    this.router = Router();
  }

  setupRoutes() {
    this.router.get("/exemplo/teste", this.teste.bind(this)); // Me apague

    this.router.get("/", this.getAllCoords.bind(this));
    this.router.get("/:index", this.getCoordsByIndex.bind(this));
    this.router.delete("/:index", this.deleteCoordsByIndex.bind(this));
    this.router.put("/:index", this.updateCoordsByIndex.bind(this));
    this.router.post("/", this.createCoords.bind(this));
    // Adicione uma rota para pegar a lista de coordenadas invertida
    // Adicione uma rota para buscar a coordenada mais próxima da lista, dada uma latitude e longitude (utilizar distância manhattan)
    // Adicione uma rota que atualize PARCIALMENTE uma rota pelo índice. Você deve ser capaz de atualizar somente a latitude, somente a longitude, ou ambos!
  }

  // Me apague
  async teste(req, res) {
    this.geolocationService.teste();
    res.status(200).json({ message: "Método de teste!" });
  }

  async getAllCoords(req, res) {
    res.status(200).json({
      message: "Implemente pra pegar a lista de coordenadas!",
    });
  }

  async getCoordsByIndex(req, res) {
    const index = req.params.index;
    res.status(200).json({
      message: `Implemente para pegar uma coordenada pelo índice! Índice que chegou: ${index}`,
    });
  }

  async deleteCoordsByIndex(req, res) {
    const index = req.params.index;
    res.status(200).json({
      message: `Implemente para deletar uma coordenada pelo índice! Índice que chegou: ${index}`,
    });
  }

  async updateCoordsByIndex(req, res) {
    const index = req.params.index;
    const coords = req.body;
    res.status(200).json({
      message: `Implemente para atualizar uma coordenada pelo índice! Índice que chegou: ${index}. Coordenadas que chegaram: ${JSON.stringify(coords)}`,
    });
  }

  async createCoords(req, res) {
    // { latitude: number, longitude: number }
    const coords = req.body;
    res.status(200).json({
      message: `Implemente para inserir uma coordenada ao final da lista! Coordenadas que chegaram: ${JSON.stringify(coords)}`,
    });
  }
}
