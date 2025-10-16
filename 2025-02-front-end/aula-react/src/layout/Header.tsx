import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/primeira-aula">Primeira aula</Link>
      <Link to="/segunda-aula">Segunda aula</Link>
      <Link to="/terceira-aula">Terceira aula</Link>
    </header>
  );
}
