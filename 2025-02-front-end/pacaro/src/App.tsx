import { useEffect, useState } from "react";

const nums = [1, 2, 3, 4, 5];

export default function App() {
  const [tasks, setTasks] = useState([]);

  async function carregaTarefas() {
    const resposta = await fetch(
      "https://pacaro-tarefas.netlify.app/api/duda/tasks"
    );
    const tarefas = await resposta.json();
    setTasks(tarefas);
  }

  useEffect(() => {
    carregaTarefas();
  }, []);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const listaTasks = tasks.map((task) => {
    return <li>{task.description}</li>;
  });

  return <ul className="list-disc">{listaTasks}</ul>;
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
