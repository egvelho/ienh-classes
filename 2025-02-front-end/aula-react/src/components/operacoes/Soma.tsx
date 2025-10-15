import { soma } from "../../operacoes";

const duda = {
  nome: "Eduarda",
  sobrenome: "Velho",
  idade: 50,
};

const gustavo: Pessoa = {
  nome: "Gustavo",
  sobrenome: "Morchel",
  idade: 24,
};

function concatenaNomeCompleto(pessoa: Pessoa) {
  return pessoa.nome + " " + pessoa.sobrenome;
}

const nome = concatenaNomeCompleto(gustavo);

type Pessoa = {
  nome: string;
  sobrenome: string;
  idade: number;
};

type SomaProps = {
  a: number;
  b: number;
};

export default function Soma(props: SomaProps) {
  const resultado = soma(props.a, props.b);
  return <div>Soma: {resultado}</div>;
}
