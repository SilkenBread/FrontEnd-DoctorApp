import { Navigate, Outlet } from "react-router-dom"; // Importamos los componentes necesarios de react-router-dom
import Cookies from 'js-cookie'; // Importamos el módulo Cookies


// Definimos el componente PrivateRoutes
 function PrivateRoutes() {
  // Verificamos si la cookie '102365' existe
  const isAuthenticated = Cookies.get('102365') ? true : false;

  // Devolvemos un componente Navigate que redirige a '/' si no estamos autenticados, 
  // de lo contrario, devolvemos un componente Outlet para representar el contenido protegido
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
export default PrivateRoutes;
