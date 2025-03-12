import React from "react";
import api from "../services/api";

export async function getProducts(page: number, searchText: string){
   const response = await api.get("/produtos",{
      params:{
         page: page,
         search: searchText
      }
   });
   return response.data;
}

export async function getServices(page: number, searchText: string){
   const response = await api.get("/servicos",{
      params:{
         page: page,
         search: searchText
      }
   });
   return response.data;
}