import React from "react";
import api from "../services/api";

export async function newProduct(nomeProduto: string, descricao: string, precoBase: number, um: string){
    const response = await api.post("/produtos", {
        nomeProduto: nomeProduto,
        descricao: descricao,
        precoBase: precoBase,
    });
    return response;

}

export async function newService(nomeServico: string, descricao: string, precoBase: number){
    const response = await api.post("/servicos", {
        nomeServico: nomeServico,
        descricao: descricao,
        precoBase: precoBase,
    });
    return response;

}