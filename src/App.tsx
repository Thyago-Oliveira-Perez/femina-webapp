import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import FormLogin from "./pages/Login";
import { Produtos } from "./pages/Produtos";
import { Header } from "./components/Header";
import { Navbar } from "./components/NavBar";
import { Usuario } from "./pages/Usuario";
import AuthService from "./services/auth.service";
import { AuthContextProvider } from "./context/AuthContext";

export default function App() {
  const authService = new AuthService();
  let isAuthenticated = authService.getUser() !== null ? true : false;

  console.log(isAuthenticated)

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <div className="App">


          <Header type={window.location.pathname != '/' && window.location.pathname != '/usuario' ? "global" : "generic"} />

          {window.location.pathname != '/' && window.location.pathname != '/usuario' && (
            <Navbar />
          )

          }



          <Routes>
            <Route path="/" element={<FormLogin />}></Route>
            <Route
              path="/produtos"
              element={isAuthenticated ? <Produtos /> : <Navigate to="/" />}
            ></Route>
            <Route
              path="/usuario"
              element={<Usuario />}
            ></Route>
          </Routes>

          {
            window.location.pathname != '/' &&
            <>
              <Footer />
            </>
          }

        </div>
      </BrowserRouter>
    </AuthContextProvider>

  );
}