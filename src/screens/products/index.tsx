import React, { useEffect, useState } from 'react';
import { StandardText } from '../../components/texts/styles';
import { SafeAreaView } from '../../components/global/styles';
import SearchArea from '../../components/contents/searchArea';
import BasicListScreen from '../../components/contents/basicListScreen';
import { CreateButton } from '../../components/buttons/styles';
import { Ionicons } from '@expo/vector-icons';
import ProductsList from '../../components/contents/productsList';
import { getProducts } from '../../utils/getMethods';
import { CreateProduct } from '../../components/contents/modal';

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

export default function Products(){
    const[products, setProducts] = useState<Produtos[]>([]);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(0);
    
    async function ProductList(){
        const response = await getProducts(page, searchText);
        if(response === null) {
            return;
        }
        else{
            if(page === 0 || searchText !== ""){
                setProducts(response);
            }else{
                setProducts(prevProducts => [...prevProducts, ...response]);
            }
        }
    }

//     const filteredProducts = Array.isArray(products)
//   ? products.filter(product => product.nomeProduto.toLowerCase().includes(searchText.toLowerCase()))
//   : [];
    
    useEffect(() => {
        async function LoadData(){
            ProductList();
        }
        LoadData();
    }, [page, searchText]);
    return(
        <BasicListScreen
            setSearchText={setSearchText}
            setPage={setPage}
            children={
                <ProductsList
                    produtos={products}
                    setPage={setPage}
                    page={page}
                />
            }
            modal={<CreateProduct 
                setPage={setPage}
                setProducts={setProducts}
            />}
            add={true}
        />
    );
}