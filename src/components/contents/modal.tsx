import React, { useState } from "react";
import Modal from "react-native-modal";
import { CreateForm, FakeCenterView, ModalContainer, ModalContent, ModalMainView, ModalRowText, SearchView } from "../views/styles";
import { ButtonText, InvalidText, ModalText, PublicText, StandardText, SuccessText, ValidText } from "../texts/styles";
import { FontAwesome } from "@expo/vector-icons";
import { CloseModal, PublicButton } from "../buttons/styles";
import { MoneyInput, PublicInput } from "../inputs/styles";
import { ActivityIndicator } from "react-native";
import { newProduct, newService } from "../../utils/postMethods";
import { getProducts, getServices } from "../../utils/getMethods";
import { currencyMask } from "../../utils/moneyMask";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export function MainModal({ isVisible, closeModal, children }: { isVisible: boolean, closeModal: () => void, children: React.ReactNode }){
    return(
        <Modal
            animationIn="fadeIn"
            animationOut="fadeOut"
            backdropOpacity={0.5}
            isVisible={isVisible}
            onBackdropPress={closeModal}
            avoidKeyboard
        >
            {children}

        </Modal>
    );
}

export function InvalidInputs({email, password, name, org, cnpj}:{email: boolean, password: boolean, name: boolean, org: boolean, cnpj: boolean}){
    return (
        <ModalContainer>
            <ModalContent>
                    {org? (
                        <ModalRowText>
                            <FontAwesome name="check" size={20} color="#059b37" />
                            <ValidText>Organização deve ter pelo menos 2 caracteres</ValidText>
                        </ModalRowText>
                    ):(
                        <ModalRowText>
                               <FontAwesome name="close" size={20} color="#aa1f0c" />
                               <InvalidText>Organização deve ter pelo menos 2 caracteres</InvalidText>
                        </ModalRowText>
                    )}
                    {cnpj? (
                        <ModalRowText>
                            <FontAwesome name="check" size={20} color="#059b37" />
                            <ValidText>O CNPJ deve ter 14 digitos</ValidText>
                        </ModalRowText>
                    ):(
                        <ModalRowText>
                            <FontAwesome name="close" size={20} color="#aa1f0c" />
                            <InvalidText>O CNPJ deve ter 14 digitos</InvalidText>
                        </ModalRowText>
                        
                    )}
                    {email? (
                        <ModalRowText>
                            <FontAwesome name="check" size={20} color="#059b37" />
                            <ValidText>Email deve seguir o formato "teste@teste.com(.br)"</ValidText>
                        </ModalRowText>
                    ):(
                        <ModalRowText>
                            <FontAwesome name="close" size={20} color="#aa1f0c" />
                            <InvalidText>Email deve seguir o formato "teste@teste.com(.br)"</InvalidText>
                        </ModalRowText>
                    )}
                    {name? (
                        <ModalRowText>
                            <FontAwesome name="check" size={20} color="#059b37" />
                            <ValidText>Nome deve conter pelo menos 2 palavras</ValidText>
                        </ModalRowText>
                    ):(
                        <ModalRowText>
                            <FontAwesome name="close" size={20} color="#aa1f0c" />
                            <InvalidText>Nome deve conter pelo menos 2 palavras</InvalidText>
                        </ModalRowText>
                    )}
                    {password? (
                        <ModalRowText>
                            <FontAwesome name="check" size={20} color="#059b37" />
                            <ValidText>A Senha deve conter pelo menos 8 caracteres</ValidText>
                        </ModalRowText>
                    ):(
                        <ModalRowText>
                            <FontAwesome name="close" size={20} color="#aa1f0c" />
                            <InvalidText>A Senha deve conter pelo menos 8 caracteres</InvalidText>
                        </ModalRowText>
                    )}
            </ModalContent>
        </ModalContainer>
    );
}

export function SuccessCreateAccount({message, closeModal}:{message: string, closeModal: () => void}){
    return(
        <ModalContainer>
            <ModalContent>
                <FakeCenterView>
                    <SuccessText>{message}</SuccessText>
                </FakeCenterView>
                    {message === "Usuário criada com sucesso!"? (
                        <CloseModal onPress={closeModal}><ModalText>Fazer Login</ModalText></CloseModal>
                    ):(
                        <></>
                    )}
            </ModalContent>
        </ModalContainer>
    );
}

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

export function CreateProduct({setProducts, closeModal, setPage}
    :{setProducts: React.Dispatch<React.SetStateAction<Produtos[]>>, closeModal?: () => void, setPage: (page: number) => void}){
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [um, setUm] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleNewProduct(){
        setLoading(true);
        try {
            const formatPrice = parseFloat(productPrice)/100;
            const res = await newProduct(productName, productDescription, formatPrice, um);
            if(res.status === 201){
                // const updateList = await getProducts(0);
                setPage(0)
                // setProducts(updateList);
                setLoading(false);
                if (closeModal) {
                    closeModal();
                }
            }
        } catch (error) {
            
        }
    }

    return(
        <ModalMainView>    
        <CreateForm ySize={60}>
            <PublicText>Nome do Produto</PublicText>
            <SearchView marginTop={5} marginBot={20}>
                <PublicInput
                    xSize={100}
                    ySize={40}
                    placeholder="Nome do produto"
                    value={productName}
                    onChangeText={(text: string) => {
                        setProductName(text);
                    }}
                />
            </SearchView>
            <PublicText>Descrição</PublicText>
            <SearchView marginTop={5} marginBot={20}>
                <PublicInput
                    xSize={90}
                    ySize={40}
                    placeholder="Descrição"
                    value={productDescription}
                    onChangeText={(text: string) => {
                        setProductDescription(text);
                    }}
                />
            </SearchView>
            <PublicText>Preço Base</PublicText>
            <SearchView marginTop={5} marginBot={20}>
                <MoneyInput
                    xSize={90}
                    ySize={40}
                    placeholder="R$ 0,00"
                    keyboardType="numeric"
                    type="currency"
                    options={{
                        prefix: 'R$ ',
                        decimalSeparator: ',',
                        groupSeparator: '.',
                        precision: 2,
                    }}
                    value={productPrice}
                    onChangeText={(masked: string, unmasked: string) => {setProductPrice(unmasked)}}
                />
            </SearchView>
            <PublicText>Unidade de Medida</PublicText>
            <SearchView marginTop={5} marginBot={20}>
                <PublicInput
                    xSize={90}
                    ySize={40}
                    placeholder="UM"
                    value={um}
                    onChangeText={(text: string) => {
                        setUm(text);
                    }}
                />
            </SearchView>
           {productName && productDescription && productPrice && um? (
                <PublicButton 
                    xSize={90} 
                    ySize={50}
                    onPress={() => handleNewProduct()}
                >
                {loading ? (
                    <ActivityIndicator size="large" color="#ecf0f1" />
                    ) : (
                        <ButtonText>Criar</ButtonText>
                    )}
                </PublicButton>
                    ): (
                        <PublicButton
                            xSize={90}
                            ySize={50}
                            color={"#85a3d5"}
                            disable={true}
                        >
                            <ButtonText>Criar</ButtonText>
                        </PublicButton>
                    )}
        </CreateForm>   
        </ModalMainView>
    );
}

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

export function CreateService({setServices, closeModal, setPage}
    :{setServices: React.Dispatch<React.SetStateAction<Servicos[]>>, closeModal?: () => void, setPage: (page: number) => void}){
    const [serviceName, setServiceName] = useState("");
    const [serviceDescription, setServiceDescription] = useState("");
    const [servicePrice, setServicePrice] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleNewService(){
        setLoading(true);
        try {
            const formatPrice = parseFloat(servicePrice)/100;
            const res = await newService(serviceName, serviceDescription, formatPrice);
            if(res.status === 201){
                setPage(0);
                setLoading(false);
                if (closeModal) {
                    closeModal();
                }
            }
        } catch (error) {
            
        }
    }

    return(
        <ModalMainView>    
        <CreateForm ySize={50}>
            <PublicText>Nome do Serviço</PublicText>
            <SearchView marginTop={5} marginBot={20}>
                <PublicInput
                    xSize={100}
                    ySize={40}
                    placeholder="Nome do Serviço"
                    value={serviceName}
                    onChangeText={(text: string) => {
                        setServiceName(text);
                    }}
                />
            </SearchView>
            <PublicText>Descrição</PublicText>
            <SearchView marginTop={5} marginBot={20}>
                <PublicInput
                    xSize={90}
                    ySize={40}
                    placeholder="Descrição"
                    value={serviceDescription}
                    onChangeText={(text: string) => {
                        setServiceDescription(text);
                    }}
                />
            </SearchView>
            <PublicText>Preço Base</PublicText>
            <SearchView marginTop={5} marginBot={20}>
                <MoneyInput
                    xSize={90}
                    ySize={40}
                    placeholder="R$ 0,00"
                    keyboardType="numeric"
                    type="currency"
                    options={{
                        prefix: 'R$ ',
                        decimalSeparator: ',',
                        groupSeparator: '.',
                        precision: 2,
                    }}
                    value={servicePrice}
                    onChangeText={(masked: string, unmasked: string) => {setServicePrice(unmasked)}}
                />
            </SearchView>
           {serviceName && serviceDescription && servicePrice? (
                <PublicButton 
                    xSize={90} 
                    ySize={50}
                    onPress={() => handleNewService()}
                >
                {loading ? (
                    <ActivityIndicator size="large" color="#ecf0f1" />
                    ) : (
                        <ButtonText>Criar</ButtonText>
                    )}
                </PublicButton>
                    ): (
                        <PublicButton
                            xSize={90}
                            ySize={50}
                            color={"#85a3d5"}
                            disable={true}
                        >
                            <ButtonText>Criar</ButtonText>
                        </PublicButton>
                    )}
        </CreateForm>   
        </ModalMainView>
    );
}
