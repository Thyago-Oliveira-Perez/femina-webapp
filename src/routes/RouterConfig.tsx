import { Route, Routes, useLocation, useNavigate, useNavigation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { Header } from "../components/Header";
import { Navbar } from "../components/NavBar";
import { Usuario } from "../pages/Usuario";
import FormLogin from "../pages/Login";
import { PaginaInicial } from "../pages/PaginaInicial";
import PrivateRoutes from "./PrivateRoutes";
import { Produtos } from "../pages/Produtos";
import { DetalhaProdutos } from "../pages/DetalhaProdutos";
import { useParams } from "react-router-dom";
import { Favoritos } from "../pages/Favoritos";
import { Sobre } from "../pages/Sobre";

const RouterConfig = () => {

  const location = useLocation();

  return (
    <div className="App">
      {
        location.pathname == '/login' || location.pathname == '/usuario' ?
          <>
            <Header type="generic" />
          </> :
          <>
            <Header type="global" />
            <Navbar />
          </>
      }
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/login" element={<FormLogin />}></Route>
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/produtos/:categoria" element={<Produtos />} />
        <Route path="/produto/:id" element={<DetalhaProdutos />} />

        {/* Private Routes */}
        <Route element={<PrivateRoutes />}>
          <Route path="/favoritos" element={<Favoritos />} />
        </Route>        
       
      </Routes>

      {
        location.pathname != '/' &&
        <>
          <Footer />
        </>
      }

    </div>
  );
}

export default RouterConfig;
