import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { Header } from "../components/Header";
import { Navbar } from "../components/NavBar";
import { Usuario } from "../pages/Usuario";
import FormLogin from "../pages/Login";
import { PaginaInicial } from "../pages/PaginaInicial";
import PrivateRoutes from "./PrivateRoutes";
import { Produtos } from "../pages/Produtos";

const RouterConfig = () => {
  return (
    <div className="App">
      {
        window.location.pathname == '/login' || window.location.pathname == '/usuario' ?
        <>
          <Header type="generic" />
        </> : 
        <>
        <Header type="global" />
        <Navbar/>
      </>
      }
      <Routes>
        <Route path="/login" element={<FormLogin />}></Route>
        <Route path="/usuario" element={<Usuario />} />

        {/* Private Routes */}
        
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/produtos" element={<Produtos/>}/>
        
        
      </Routes>

      {
        window.location.pathname != '/' &&
        <>
          <Footer />
        </>
      }

    </div>
  );
}

export default RouterConfig;
