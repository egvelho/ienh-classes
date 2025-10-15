import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/primeira-aula">Primeira aula</Link>
      <Link to="/segunda-aula">Segunda aula</Link>
      <Link to="/terceira-aula">Terceira aula</Link>
    </div>
  );
}
