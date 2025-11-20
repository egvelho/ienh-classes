import { useEffect, useState } from "react";

type ListTasksProps = {
  tarefaCriadaFlag: boolean;
  toggleTarefaCriadaFlag: Function;
};

export function ListTasks(props: ListTasksProps) {
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
    if (props.tarefaCriadaFlag === true) {
      carregaTarefas();
      props.toggleTarefaCriadaFlag();
    }
  }, [props.tarefaCriadaFlag]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const listaTasks = tasks.map((task) => {
    return <li>{task.description}</li>;
  });

  return <ul className="list-disc">{listaTasks}</ul>;
}
