export default function Titulo(props) {
  const estilo = {
    backgroundColor: props.corDeFundo,
    padding: "8px",
    color: props.corDoTexto,
  };

  return <h1 style={estilo}>{props.children}</h1>;
}
