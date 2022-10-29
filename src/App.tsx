import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer/Footer";
import FormLogin from "./pages/Login";
import { Produtos } from "./pages/Produtos";
import { Header } from "./components/Header";
import { Navbar } from "./components/NavBar";
import { Cliente } from "./pages/Cliente";
import AuthService from "./services/auth.service";

export default function App() {
  const authService = new AuthService();
  let isAuthenticated = authService.getUser() !== null ? true : false;

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/login" element={<FormLogin />}></Route>
          <Route
            path="/produtos"
            element={isAuthenticated ? <Produtos /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/cliente"
            element={isAuthenticated ? <Cliente /> : <Navigate to="/login" />}
          ></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}