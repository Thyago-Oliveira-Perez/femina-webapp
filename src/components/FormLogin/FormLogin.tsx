import { TextField } from "@mui/material";
import { useState } from "react";

export default function FormLogin() {
  
  const loginApi = "";

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleForm = () => {

  };

  return (
    <>
      <TextField
        label="Email"
        value={login.email}
        onChange={(e) => setLogin({
          ...login,
          email: e.target.value,
          password: ""
      })} />
      <TextField label="Senha" value={login.password} onChange={handleForm} />
    </>
  );
}
