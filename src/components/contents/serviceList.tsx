import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { FlatListItems, FlatListContent } from "../views/styles";
import { CardText, StandardText } from "../texts/styles";
import { FakeButton } from "../buttons/styles";

interface Servicos{
    id: string;
    nomeServico: string;
    descricao: string;
    precoBase: number;
    dataAlteracao: string;
    dataCriacao: string;
    status: string;
    organizacaoId: string;
}

export default function ServiceList({services, setPage, page}: {services: Servicos[], setPage: (page: number) => void, page: number}){
    const handleLoadMore = () => {
        setPage(page + 1);
      };
      
    const RenderFlatList = ({ item }:{ item: Servicos}) => (
        <FakeButton>
            <FlatListItems>
                <FlatListContent>
                    <StandardText>{item.nomeServico}</StandardText>
                    <CardText>{item.descricao}</CardText>
                </FlatListContent>
                <StandardText>R$ {item.precoBase}</StandardText>
            </FlatListItems>
        </FakeButton>
    );
    return(
        <FlatList
        data={services}
        keyExtractor={(item: Servicos ) => item.id.toString()}
        renderItem={RenderFlatList}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.2}
        // ListEmptyComponent={<Empty />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ width: "100%"}}
      />
    );
}