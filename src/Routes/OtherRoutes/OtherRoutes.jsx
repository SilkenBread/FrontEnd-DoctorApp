import { Navigate, Outlet } from "react-router-dom"; // Importamos los componentes necesarios de react-router-dom
import Cookies from 'js-cookie'; // Importamos el módulo Cookies

// Definimos el componente OtherProtectedRoutes
function OtherProtectedRoutes() {
  // Verificamos si la cookie '102365' existe
  const isAuthenticated = !Cookies.get('102365');

  // Devolvemos un componente Navigate que redirige a '/Dashboardred' si no estamos autenticados, 
  // de lo contrario, devolvemos un componente Outlet para representar el contenido protegido
  return isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />;
}
export default OtherProtectedRoutes;
