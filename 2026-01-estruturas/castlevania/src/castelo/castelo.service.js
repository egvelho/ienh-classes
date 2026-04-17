import { CasteloModel } from "./castelo.model.js";

export class CasteloService {
  constructor() {
    this.casteloModel = new CasteloModel();
  }

  validaAutenticacao(autenticacao) {
    const [prefixo, numero] = autenticacao.split("-");

    if (prefixo !== "RBD" || Number(numero) % 2 === 0) {
      return false;
    }

    return true;
  }

  pagaRecompensa(valorRecompensa) {
    const valorTesouro = this.casteloModel.getTesouro();

    if (valorRecompensa >= valorTesouro) {
      return false;
    }

    const novoValorTesouro = valorTesouro - valorRecompensa;
    this.casteloModel.setTesouro(novoValorTesouro);
    console.log(
      `O novo valor do tesouro é de ${novoValorTesouro} moedas de ouro`,
    );

    return true;
  }
}
