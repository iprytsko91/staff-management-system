import { createContext, useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reset } from "../store/sms";
import { useLocalStorage } from "../hooks";
import md5 from 'md5';

const credentials = {
  username: 'admin',
  password: '21232f297a57a5a743894a0e4a801fc3' // MD5 Admin
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
  const [loginFailed, setLoginFailed] = useState(false);

  const login = (userName: string, password: string) => {
    if (userName === credentials.username && md5(password) == credentials.password) {
      const token = generateToken();
      setToken(token);
      setLoginFailed(false);
      navigate('/');
    } else {
      setLoginFailed(true);
    }
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
    isAuthenticated: token,
    isLoginFailed: loginFailed
  };

  return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
  )
};
