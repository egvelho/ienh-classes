import PrimeiraAula from "./pages/PrimeiraAula";
import SegundaAula from "./pages/SegundaAula";
import TerceiraAula from "./pages/TerceiraAula/TerceiraAula";
import QuartaAula from "./pages/QuartaAula";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/primeira-aula" element={<PrimeiraAula />} />
        <Route path="/segunda-aula" element={<SegundaAula />} />
        <Route path="/terceira-aula" element={<TerceiraAula />} />
        <Route path="/quarta-aula" element={<QuartaAula />} />
      </Routes>
      <Footer />
    </div>
  );
}
