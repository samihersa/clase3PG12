import React from "react";

const CrearCuenta = () => {
  return (
    <div>
      <h1> Crear Cuenta</h1>
      <h2>Ingrese los datos de usuario</h2>
      <input placeholder="Nombre" />
      <input placeholder="Email" />
      <input placeholder="Password" />
      <input placeholder="Confirmar" />

      <button>Crear cuenta</button>
      <Link to={"/"}> Regresar</Link>
    </div>
  );
};

export default CrearCuenta;
