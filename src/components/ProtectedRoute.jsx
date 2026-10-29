import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

// Só deixa entrar nas páginas internas se o usuário estiver logado
export default function ProtectedRoute() {
  const { logado } = useAuth();

  if (!logado) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
