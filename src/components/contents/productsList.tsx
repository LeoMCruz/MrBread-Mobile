import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { FlatListItems, FlatListContent } from "../views/styles";
import { CardText, StandardText } from "../texts/styles";
import { FakeButton } from "../buttons/styles";

interface Produtos{
    id: string;
    nomeProduto: string;
    descricao: string;
    precoBase: number;
    dataAlteracao: string;
    dataCriacao: string;
    status: string;
    organizacaoId: string;
}

export default function ProductsList({produtos, setPage, page}: {produtos: Produtos[], setPage: (page: number) => void, page: number}){
    const handleLoadMore = () => {
        setPage(page + 1);
      };

    const RenderFlatList = ({ item }:{ item: Produtos}) => (
        <FakeButton>
            <FlatListItems>
                <FlatListContent>
                    <StandardText>{item.nomeProduto}</StandardText>
                    <CardText>{item.descricao}</CardText>
                </FlatListContent>
                <StandardText>R$ {item.precoBase}</StandardText>
            </FlatListItems>
        </FakeButton>
    );
    return(
        <FlatList
        data={produtos}
        keyExtractor={(item: Produtos ) => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.2}
        renderItem={RenderFlatList}
        // ListEmptyComponent={<Empty />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ width: "100%"}}
      />
    );
}