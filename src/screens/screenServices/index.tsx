import React, { useEffect, useState } from 'react';
import { StandardText } from '../../components/texts/styles';
import BasicListScreen from '../../components/contents/basicListScreen';
import ServiceList from '../../components/contents/serviceList';
import { getServices } from '../../utils/getMethods';
import { CreateService } from '../../components/contents/modal';

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

export default function Services(){
    const[services, setServices] = useState<Servicos[]>([]);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(0);
        
    async function listService(){
        const response = await getServices(page, searchText);
        if(response === null) {
            return;
        }else{
            if(page === 0 || searchText !== ""){
                setServices(response);
            }else{
                setServices(prevServices => [...prevServices, ...response]);
            }
        }
    }
    
    // const filteredServices = services.filter(service => {
    //     return service.nomeServico.toLowerCase().includes(searchText.toLowerCase());
    // });
        
    useEffect(() => {
        async function LoadData(){
            listService();
        }
        LoadData();
    }, [page, searchText]);

    return(
        <BasicListScreen
            setSearchText={setSearchText}
            setPage={setPage}
            children={
                <ServiceList
                    services={services}
                    setPage={setPage}
                    page={page}
                />
            }
            modal={<CreateService 
                setServices={setServices}
                setPage={setPage}
            />}
            add={true}
        />
    );
}