import React, { createContext, useEffect, useState } from "react";
import { contextType, userInterface } from "../../types";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext<contextType | undefined>(undefined);

export interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<userInterface>();
  const setUserData = () => {
    const encodedToken = localStorage.getItem("userTkn");

    if (encodedToken) {
      const decodedToken = jwtDecode<userInterface>(encodedToken);
      setUser(decodedToken);
      console.log(decodedToken);
    }
  };
  useEffect(() => {
    setUserData();
  }, []);
  return <AuthContext.Provider value={{ setUserData, user }}>{children}</AuthContext.Provider>;
};
