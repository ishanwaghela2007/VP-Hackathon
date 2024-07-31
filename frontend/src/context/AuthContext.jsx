// Change this File accroding by your backned if not needed remove this file 

import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const loginAsAdmin = () => setIsAdmin(true);
  const loginAsUser = () => setIsAdmin(false);

  return (
    <AuthContext.Provider value={{ isAdmin, loginAsAdmin, loginAsUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
