import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosResponse } from "axios";

interface AuthContextData {
    isAuthenticated: boolean;
    CreateAccount(org: string, cnpj: string, name: string, email: string, password: string): Promise<AxiosResponse<any>>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: {children: React.ReactNode}) {
    const [isAuthenticated, setIsAuthinticated] = useState(false);

    async function CreateAccount(org: string, cnpj: string, name: string, email: string, password: string) {
      const response: AxiosResponse<any> = await api.post("/user", {
        nomeOrganizacao: org,
        cnpj: cnpj,
        nome: name,
        username: email,
        password: password,
      }); 
      return response;
    }

    return (
        <AuthContext.Provider
          value={{
            isAuthenticated,
            CreateAccount
          }}>
            {children}
        </AuthContext.Provider>  
    );
}

export default AuthProvider;