import React, { createContext, useState } from 'react';
import { auth, login as firebaseLogin, logout as firebaseLogout, updateProfile } from '../firebase';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const login = async (email, password) => {
    setIsLogin(true);
    const user = await firebaseLogin(email, password);
    setCurrentUser(user);
  };

  const logout = async() => {
    await firebaseLogout();
    // Perform the logout logic and set isLogin to false
    setIsLogin(false);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLogin, login, logout, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;