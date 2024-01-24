import { useAuth } from "../../providers/AuthProvider.tsx";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const auth = useAuth();

  if (!auth.value) {
    return <Navigate to="/login" replace/>;
  }

  return children;
}
