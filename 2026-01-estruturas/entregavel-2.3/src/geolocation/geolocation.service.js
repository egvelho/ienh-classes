import { GeolocationModel } from "./geolocation.model.js";

// É PROIBIDO IMPORTAR QUALQUER COISA ADICIONAL AQUI!

export class GeolocationService {
  constructor() {
    this.geolocationModel = new GeolocationModel();
  }

  teste() {
    console.log("Estou no service, e agora vou chamar a model!");
    this.geolocationModel.teste();
  }
}
