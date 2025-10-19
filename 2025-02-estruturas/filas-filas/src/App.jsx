import { useReducer } from "react";
import { Queue } from "./queue";

const queue = new Queue();

function useReRender() {
  const [, reRender] = useReducer((x) => x + 1, 0);
  return reRender;
}

export default function App() {
  const reRender = useReRender();

  let node = queue.start;
  let fila = [];

  while (node !== null) {
    fila.push(<li>{node.value.name}</li>);
    node = node.next;
  }

  return (
    <div>
      <button
        onClick={async () => {
          const arquivo = queue.dequeue();
          const form = new FormData();
          form.append("arquivo", arquivo);
          const resposta = await fetch("http://localhost:8080/upload", {
            method: "POST",
            body: form,
          });
          alert(`O arquivo "${arquivo.name}" foi enviado com sucesso!`);
          reRender();
        }}
      >
        Enviar
      </button>
      <input
        type="file"
        onChange={(event) => {
          const [arquivo] = event.target.files;
          queue.enqueue(arquivo);
          reRender();
        }}
      />
      <ul>{fila}</ul>
    </div>
  );
}
