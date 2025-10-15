import Titulo from "../components/Titulo";
import Retangulo from "../components/Retangulo";

export default function SegundaAula() {
  return (
    <div>
      <Titulo corDeFundo="green" corDoTexto="red">
        Sou um título de teste
      </Titulo>
      <Titulo corDeFundo="blue" corDoTexto="pink">
        Sou outro título
      </Titulo>
      <Titulo corDeFundo="purple" corDoTexto="green">
        Chega sexta-feira!
      </Titulo>
      <Retangulo width="300px" height="200px" corDeFundo="red" />
      <Retangulo width="600px" height="400px" corDeFundo="green/" />
    </div>
  );
}
