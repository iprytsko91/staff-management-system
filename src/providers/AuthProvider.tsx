import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reset } from "../store/sms";
import { useLocalStorage } from "../hooks";

const credentials = {
  username: 'admin',
  password: 'admin'
}

const generateToken = () => {
  return Math.random().toString(16).substring(2);
}

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage('token', '');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = () => {
    const token = generateToken();
    setToken(token);
    navigate('/');
  };

  const logout = () => {
    setToken('');
    dispatch(reset())
    navigate('/');
  };

  const value = {
    token: token,
    onLogin: login,
    onLogout: logout,
    isAuthenticated: token
  };

  return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
  )
};
