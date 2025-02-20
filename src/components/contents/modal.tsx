import React from "react";
import Modal from "react-native-modal";
import { FakeCenterView, ModalContainer, ModalContent, ModalRowText } from "../views/styles";
import { InvalidText, ModalText, StandardText, SuccessText, ValidText } from "../texts/styles";
import { FontAwesome } from "@expo/vector-icons";
import { CloseModal } from "../buttons/styles";

export function MainModal({ isVisible, closeModal, children }: { isVisible: boolean, closeModal: () => void, children: React.ReactNode }){
    return(
        <Modal
            animationIn="fadeIn"
            animationOut="fadeOut"
            backdropOpacity={0.5}
            isVisible={isVisible}
            onBackdropPress={closeModal}
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