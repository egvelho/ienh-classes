export default function Retangulo(props) {
  const estilo = {
    width: props.width,
    height: props.height,
    backgroundColor: props.corDeFundo,
  };

  return <div style={estilo} />;
}
