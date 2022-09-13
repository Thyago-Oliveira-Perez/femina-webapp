import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import FormLogin from "./pages/Login";
import { Produtos } from "./pages/Produtos";
import {Header} from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/login" element={<FormLogin />}></Route>
          <Route path="/produtos" element={<Produtos/>}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
