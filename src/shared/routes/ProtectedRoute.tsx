import { Navigate } from "react-router-dom";

import { useAuth } from "../../providers/AuthProvider.tsx";

export const ProtectedRoute = ({ children }) => {
  const auth = useAuth();

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" replace/>;
  }

  return children;
}
