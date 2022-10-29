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
import { Cliente } from "./pages/Cliente";
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

          {
            window.location.pathname != '/' &&
            <>
              <Header />
              <Navbar />
            </>
          }

          <Routes>
            <Route path="/" element={<FormLogin />}></Route>
            <Route
              path="/produtos"
              element={isAuthenticated ? <Produtos /> : <Navigate to="/" />}
            ></Route>
            <Route
              path="/cliente"
              element={<Cliente />}
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