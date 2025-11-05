import { useEffect } from "react";

export default function App() {
  function quandoInicia() {
    fetch("https://pacaro-tarefas.netlify.app/api/duda/tasks");
  }

  useEffect(quandoInicia, []);

  return <div className="bg-blue-800">hello</div>;
}
