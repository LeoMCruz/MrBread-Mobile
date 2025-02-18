import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextData {
    isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: {children: React.ReactNode}) {
    const [isAuthenticated, setIsAuthinticated] = useState(true);

    return (
        <AuthContext.Provider
          value={{
            isAuthenticated,
          }}>
            {children}
        </AuthContext.Provider>  
    );
}

export default AuthProvider;