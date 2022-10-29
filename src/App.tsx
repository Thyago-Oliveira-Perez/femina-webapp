import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer/Footer";
import FormLogin from "./pages/Login";
import { Produtos } from "./pages/Produtos";
import {Header} from './components/Header';
import { Navbar } from "./components/NavBar";
import { Cliente } from "./pages/Cliente";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<FormLogin />}></Route>
          <Route path="/produtos" element={<Produtos/>}></Route>
          <Route path="/cliente" element={<Cliente/>}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
