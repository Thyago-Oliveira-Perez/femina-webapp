import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import FormLogin from "./pages/Login";
import { Produtos } from "./pages/Produtos";
import {Header} from './components/Header';
import { Navbar } from "./components/NavBar";
import { DetalhaProdutos } from "./pages/DetalhaProdutos";
import { ProdutosFiltrados } from "./pages/ProdutosFiltrados";


export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Navbar/>
        <Routes>
          <Route path="/login" element={<FormLogin />}></Route>
          <Route path="/produtos" element={<Produtos/>}></Route>
          <Route path="/detalhaProdutos" element={<DetalhaProdutos/>}></Route>
          <Route path="/produtosFiltrados" element={<ProdutosFiltrados/>}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
