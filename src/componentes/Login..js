import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>G12</h1>
      <h1> Iniciar Sesion</h1>
      <h2>Bienvenido, Ingrese sus Credenciales.</h2>
      <input placeholder="Email" />
      <input placeholder="Password" />
      <button>Ingresar</button>
      <button>Crear cuenta</button>
      <Link to={"/crear-cuenta"}> Crear Cuenta</Link>
    </div>
  );
};

export default Login;
