import "bootstrap/dist/css/bootstrap.min.css";
import "./TerceiraAula.css";
import Soma from "../../components/operacoes/Soma";
import { ParticlesContainer } from "../../components/ParticlesContainer";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

export default function TerceiraAula() {
  return (
    <div>
      <header className="cabecalho">Header</header>
      <aside>Aside</aside>
      <main>Main</main>
      <footer>Footer</footer>
      <Soma a={5} b={7} />
      <Button variant="primary">Primary</Button>
      <Spinner animation="border" />
    </div>
  );
}
