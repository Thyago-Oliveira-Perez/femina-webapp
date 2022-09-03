import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import FormLogin from "./components/FormLogin/FormLogin";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>icone</header>
        <Routes>
          <Route path="/login" element={<FormLogin />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
