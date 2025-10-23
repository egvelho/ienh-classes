import { useState, useEffect } from "react";

export default function QuartaAula() {
  return (
    <div>
      <Contador />
      <SimNao />
      <AzulVermelho />
      <OnOff />
      <ListUsuarios />
    </div>
  );
}

function ListUsuarios() {
  const [meusUsuarios, setMeusUsuarios] = useState([]);

  async function carregaUsuarios() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await resposta.json();
    setMeusUsuarios(usuarios);
  }

  function quandoCarrega() {
    carregaUsuarios();
  }

  useEffect(quandoCarrega, []);

  return (
    <div>
      {meusUsuarios.map((usuario) => (
        <div>{usuario.name}</div>
      ))}
    </div>
  );
}

function AzulVermelho() {
  const [cor, setCor] = useState("blue");
  const estilo = {
    width: "100px",
    height: "80px",
    backgroundColor: cor,
  };

  function trocaCor() {
    if (cor === "blue") {
      setCor("red");
    } else {
      setCor("blue");
    }
  }

  return <div onClick={trocaCor} style={estilo}></div>;
}

function SimNao() {
  const [ehSim, setEhSim] = useState(true);

  function trocaSim() {
    setEhSim(!ehSim);
  }

  return <div onClick={trocaSim}>{ehSim === true ? "Sim" : "Não"}</div>;
}

function Contador() {
  const [contador, setContador] = useState(0);

  function quandoClicaMenos() {
    console.log("menos", contador);
    const proximoContador = contador - 2;
    if (proximoContador >= 0) {
      setContador(proximoContador);
    }
  }

  function quandoClicaMais() {
    const proximoContador = contador + 2;
    if (proximoContador <= 20) {
      setContador(proximoContador);
    }
  }

  return (
    <div>
      <button onClick={quandoClicaMenos}>-</button>
      <input type="text" value={contador} />
      <button onClick={quandoClicaMais}>+</button>
    </div>
  );
}

function OnOff() {
  const [tahLigado, setTahLigado] = useState(true);
  const estilo = {
    backgroundColor: tahLigado ? "blue" : "red",
    padding: "8px",
    display: "inline-block",
    color: "white",
    textTransform: "uppercase",
  };

  function inverteTahLigado() {
    setTahLigado(!tahLigado);
  }

  return (
    <div onClick={inverteTahLigado} style={estilo}>
      {tahLigado ? "On" : "Off"}
    </div>
  );
}
