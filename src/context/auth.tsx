import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosResponse } from "axios";

interface UserData {
  id: number;
  username: string;
  nome: string;
  status: string;
  perfilAcesso: string;
  nomeOrganizacao: string;
  organizacaoId: string;
  cnpj: string;
}

interface AuthContextData {
    isAuthenticated: boolean;
    CreateAccount(org: string, cnpj: string, name: string, email: string, password: string): Promise<AxiosResponse<any>>;
    Login(email: string, password: string): Promise<AxiosResponse<any>>;
    user: UserData | null;
    logout(): void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: {children: React.ReactNode}) {
    const [isAuthenticated, setIsAuthinticated] = useState(false);
    const [user, setUser] = useState<UserData | null>(null);

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

    useEffect(() =>{
      async function loadData(){
        await loadUser();
      }
      loadData();
    },[])
  
    async function loadUser(){
      try {
        const storedToken = await AsyncStorage.getItem("@bearerToken");
        if(storedToken){
          api.defaults.headers.common['Authorization'] = storedToken;
          await getUserData();
          // await AsyncStorage.clear();  
        }
      } catch (error) {
        setIsAuthinticated(false);
      }
    }

    async function Login(email: string, password: string) {
      try {
        const response: AxiosResponse<any> = await api.post("/login", {
            username: email,
            password: password
        });
        if (response.status === 200) {
          const token = response.data.accessToken;
          const bearerToken = `Bearer ${token}`;
          api.defaults.headers.common['Authorization'] = bearerToken;
          await AsyncStorage.setItem("@bearerToken", bearerToken);
          await getUserData();
        }
        return response;
        
      } catch (error: Error | any) {
        return error.response;
        
      }
    }

    async function getUserData(){
      try {
        const response = await api.get("/user");
            if (response.status === 200) {
              setUser(response.data);
              await AsyncStorage.setItem("@user", JSON.stringify(response.data));
              setIsAuthinticated(true);
            }
            return response;
      } catch (error: Error | any) {
        return error.response;
      }
    }

    async function logout() {
      await AsyncStorage.removeItem("@bearerToken");
      await AsyncStorage.removeItem("@user");
      setIsAuthinticated(false);
      setUser(null);
    }

    return (
        <AuthContext.Provider
          value={{
            isAuthenticated,
            CreateAccount,
            Login,
            user,
            logout
          }}>
            {children}
        </AuthContext.Provider>  
    );
}

export default AuthProvider;