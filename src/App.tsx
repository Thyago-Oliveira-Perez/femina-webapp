import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";
import RouterConfig from "./routes/RouterConfig";

export default function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </AuthContextProvider>

  );
}