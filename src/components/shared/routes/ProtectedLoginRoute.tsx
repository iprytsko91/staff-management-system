import { Navigate } from "react-router-dom";

import { useAuth } from "../../../providers";

export const ProtectedLoginRoute = ({ children }) => {
  const auth = useAuth();

  return auth.isAuthenticated ? <Navigate to="/" replace/> : children;
}
