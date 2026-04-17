import { Router } from "express";
import { CasteloService } from "./castelo.service.js";

export class CasteloController {
  constructor() {
    this.casteloService = new CasteloService();
    this.router = Router();
  }

  inicializaRouter() {
    this.router.post("/paga-recompensa", this.pagaRecompensa.bind(this));
  }

  pagaRecompensa(req, res) {
    const carta = req.body;

    if (
      carta.autenticacao === undefined ||
      carta.valor === undefined ||
      carta.motivo === undefined
    ) {
      return res.status(400).json({
        message: "cai fora jaguara, que essa carta é fake!",
      });
    }

    if (
      typeof carta.autenticacao !== "string" ||
      typeof carta.valor !== "number" ||
      typeof carta.motivo !== "string"
    ) {
      return res.status(400).json({
        message:
          "boa tentativa, mas carta falsa também não funciona! teje preso!",
      });
    }

    const isAutentica = this.casteloService.validaAutenticacao(
      carta.autenticacao,
    );

    if (!isAutentica) {
      return res.status(403).json({
        message: "traidor! a autenticação não é verdadeira! guilhotina já!",
      });
    }

    if (carta.valor > 1000) {
      return res.status(400).json({
        message: "Esse valor tá estranho. Na dúvida, guilhotina!",
      });
    }

    const isRecompensaPaga = this.casteloService.pagaRecompensa(carta.valor);

    if (!isRecompensaPaga) {
      return res.status(400).json({
        message:
          "parece que tá tudo certo. mas, o castelo tá falido. neste caso, vamos vender os seus órgãos! :D",
      });
    }

    res.status(200).json({
      message: `você recebeu a recompensa de ${carta.valor} moedas de ouro, pelo seguinte motivo: ${carta.motivo}!`,
    });
  }
}
