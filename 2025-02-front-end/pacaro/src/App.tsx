import { useEffect, useState } from "react";

const nums = [1, 2, 3, 4, 5];

export default function App() {
  useEffect(() => {
    fetch("https://pacaro-tarefas.netlify.app/api/duda/tasks");
  }, []);

  const listaNums = nums.map((num) => <ItemNumero numero={num} />);

  return <div>{listaNums}</div>;
}

type ItemNumeroProps = {
  numero: number;
};

function ItemNumero({ numero }: ItemNumeroProps) {
  return <li className="py-2">{numero}</li>;
}

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`O contador foi iniciado com o valor ${counter}`);
  }, []);

  useEffect(() => {
    if (counter % 2 > 0) {
      alert("É ímpar");
    }
  }, [counter]);

  function incrementaContador() {
    setCounter(counter + 1);
  }

  function decrementaContador() {
    setCounter(counter - 1);
  }

  return (
    <div className="p-4">
      <button
        onClick={decrementaContador}
        className="bg-orange-600 p-2 text-white border border-gray-700"
      >
        -
      </button>
      <input
        type="text"
        value={counter}
        className="border border-gray-700 p-2"
      />
      <button
        onClick={incrementaContador}
        className="bg-orange-600 p-2 text-white border border-gray-700"
      >
        +
      </button>
    </div>
  );
}
