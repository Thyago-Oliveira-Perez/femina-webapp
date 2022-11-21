import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import FormLogin from "./pages/Login";
import { Produtos } from "./pages/Produtos";
import {Header} from './components/Header';
import { Navbar } from "./components/NavBar";
import { Sobre } from "./pages/Sobre";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Navbar/>
        <Routes>
          <Route path="/login" element={<FormLogin />}></Route>
          <Route path="/produtos" element={<Produtos/>}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

