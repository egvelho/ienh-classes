export default function NomeCompleto(props) {
  console.log(props);
  return (
    <div>
      {props.nome} {props.sobrenome}
    </div>
  );
}
