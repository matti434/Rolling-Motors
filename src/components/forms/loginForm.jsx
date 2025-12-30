import Forms from "./formBase";

/* importar validacion de formulario login */
export const loginForm = ({ onSuccess }) => {
  return (
    <>
      <div>
        <Forms>
          <label htmlFor="nombreDeUsuario">Nombre de usuario</label>
          <input type="text" id="nombreDeUsuario" name="nombreDeUsuario" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" />
          <label htmlFor="contrasena">Password</label>
          <input
            type="password"
            id="contrasena"
            name="contrasena"
            placeholder="Contraseña"
          />
          <button type="submit">Iniciar sesión</button>
        </Forms>
      </div>
    </>
  );
};
