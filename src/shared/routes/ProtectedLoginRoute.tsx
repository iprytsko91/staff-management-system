import { useAuth } from "../../providers/AuthProvider.tsx";
import { Navigate } from "react-router-dom";

export const ProtectedLoginRoute = ({ children }) => {
  const auth = useAuth();

  return auth.value ? <Navigate to="/" replace/> : children;
}
