import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState({});
  const navigate = useNavigate();

  const login = async () => {
    const token = '11111';

    setToken(token);
    navigate('/');
  };

  const logout = () => {
    setToken(null);
    navigate('/');
  };

  const value = {
    value: token,
    onLogin: login,
    onLogout: logout,
  };

  return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
  )
};
