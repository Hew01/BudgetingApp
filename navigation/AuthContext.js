import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const login = () => {
    // Perform the login logic and set isLogin to true if successful
    setIsLogin(true);
  };

  const logout = () => {
    // Perform the logout logic and set isLogin to false
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
