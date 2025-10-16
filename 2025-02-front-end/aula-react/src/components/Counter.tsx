import { useState } from "react";

export default function Counter() {
  const [contador, setContador] = useState(0);

  function onClickMenos() {
    setContador(contador - 1);
    console.log("menos", contador);
  }

  function onClickMais() {
    setContador(contador + 1);
    console.log("mais", contador);
  }

  return (
    <div>
      <button onClick={onClickMenos}>-</button>
      <input type="text" value={contador} />
      <button onClick={onClickMais}>+</button>
    </div>
  );
}
