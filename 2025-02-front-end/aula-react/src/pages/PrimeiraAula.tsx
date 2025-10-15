import MostraNome from "../components/MostraNome";
import Dobra from "../components/Dobra";
import NomeCompleto from "../components/NomeCompleto";
import Soma from "../components/operacoes/Soma";
import Subtrai from "../components/operacoes/Subtrai";
import Multiplica from "../components/operacoes/Multiplica";
import Divide from "../components/operacoes/Divide";

export default function PrimeiraAula() {
  return (
    <div>
      <input type="text" value="" />
      olá mundo
      <MostraNome>Duda V.</MostraNome>
      <MostraNome>Jimi H.</MostraNome>
      <MostraNome>Ozzy O.</MostraNome>
      <Dobra>10</Dobra>
      <Dobra>20</Dobra>
      <NomeCompleto nome="Eduarda" sobrenome="Velho" />
      <NomeCompleto nome="Jimi" sobrenome="Hendrix" />
      <NomeCompleto nome="Ozzy" sobrenome="Osbourne" />
      <Soma a={10} b={5} />
      <Subtrai a={7} b={5} />
      <Multiplica a={10} b={3} />
      <Divide a={50} b={5} />
    </div>
  );
}
