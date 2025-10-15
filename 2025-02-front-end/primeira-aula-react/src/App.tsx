export default function App() {
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

function NomeCompleto(props) {
  console.log(props);
  return (
    <div>
      {props.nome} {props.sobrenome}
    </div>
  );
}

function MostraNome(props) {
  console.log(props);
  return <h1>{props.children}</h1>;
}

function Dobra(props) {
  return <div>{props.children * 2}</div>;
}
