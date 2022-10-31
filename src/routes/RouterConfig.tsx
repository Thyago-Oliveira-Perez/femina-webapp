import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { Header } from "../components/Header";
import { Navbar } from "../components/NavBar";
import { Cliente } from "../pages/Cliente";
import FormLogin from "../pages/Login";
import { Produtos } from "../pages/Produtos";
import PrivateRoutes from "./PrivateRoutes";

const RouterConfig = () => {
  return (
    <div className="App">
      {
        window.location.pathname != '/' &&
        <>
          <Header />
          <Navbar />
        </>
      }
      <Routes>
        <Route path="/" element={<FormLogin />}></Route>

        {/* Private Routes */}
        <Route element={<PrivateRoutes />}>
          <Route path="/produtos" element={<Produtos />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/cliente" element={<Cliente />} />
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
