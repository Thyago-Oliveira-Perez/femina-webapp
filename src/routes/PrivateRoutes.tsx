import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoutes = () => {
    
    const signed = localStorage.getItem("user");

    return (
        signed ? <Outlet /> : <Navigate to="/" />
    );
}

export default PrivateRoutes;
