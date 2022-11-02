import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { Header } from "../components/Header";
import { Navbar } from "../components/NavBar";
import { Usuario } from "../pages/Usuario";
import FormLogin from "../pages/Login";
import { Produtos } from "../pages/Produtos";
import PrivateRoutes from "./PrivateRoutes";

const RouterConfig = () => {
  return (
    <div className="App">
      {
        window.location.pathname == '/' || window.location.pathname == '/usuario' ?
        <>
          <Header type="generic" />
        </> : 
        <>
        <Header type="global" />
        <Navbar/>
      </>
      }
      <Routes>
        <Route path="/" element={<FormLogin />}></Route>
        <Route path="/usuario" element={<Usuario />} />

        {/* Private Routes */}
        <Route element={<PrivateRoutes />}>
          <Route path="/produtos" element={<Produtos />} />
        </Route>
        
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
