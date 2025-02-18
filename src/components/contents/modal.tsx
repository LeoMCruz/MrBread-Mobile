import React from "react";
import Modal from "react-native-modal";
import { ModalContainer, ModalContent, ModalRowText } from "../views/styles";
import { InvalidText, ValidText } from "../texts/styles";
import { FontAwesome } from "@expo/vector-icons";

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

export function CreateAccountError({email, password, name, org, cnpj}:{email: boolean, password: boolean, name: boolean, org: boolean, cnpj: boolean}){
    return (
        <ModalContainer>
            <ModalContent>
                <ModalRowText>
                    {org? (
                        <>
                            <FontAwesome name="check" size={20} color="#059b37" />
                            <ValidText>Organização deve ter pelo menos 2 caracteres</ValidText>
                        </>
                    ):(
                        <>
                            <FontAwesome name="close" size={20} color="#aa1f0c" />
                            <InvalidText>Organização deve ter pelo menos 2 caracteres</InvalidText>
                        </>
                    )}
                </ModalRowText>
                <ModalRowText>
                    {cnpj? (
                        <>
                            <FontAwesome name="check" size={20} color="#059b37" />
                            <ValidText>O CNPJ deve ter 14 digitos</ValidText>
                        </>
                    ):(
                        <>
                            <FontAwesome name="close" size={20} color="#aa1f0c" />
                            <InvalidText>O CNPJ deve ter 14 digitos</InvalidText>
                        </>
                    )}
                </ModalRowText>
                <ModalRowText>
                    {email? (
                        <>
                            <FontAwesome name="check" size={20} color="#059b37" />
                            <ValidText>Email deve seguir o formato "teste@teste.com(.br)"</ValidText>
                        </>
                    ):(
                        <>
                            <FontAwesome name="close" size={20} color="#aa1f0c" />
                            <InvalidText>Email deve seguir o formato "teste@teste.com(.br)"</InvalidText>
                        </>
                    )}
                </ModalRowText>
                <ModalRowText>
                    {name? (
                        <>
                            <FontAwesome name="check" size={20} color="#059b37" />
                            <ValidText>Nome deve conter pelo menos 2 palavras</ValidText>
                        </>
                    ):(
                        <>
                            <FontAwesome name="close" size={20} color="#aa1f0c" />
                            <InvalidText>Nome deve conter pelo menos 2 palavras</InvalidText>
                        </>
                    )}
                </ModalRowText>
                <ModalRowText>
                    {password? (
                        <>
                            <FontAwesome name="check" size={20} color="#059b37" />
                            <ValidText>A Senha deve conter pelo menos 8 caracteres</ValidText>
                        </>
                    ):(
                        <>
                            <FontAwesome name="close" size={20} color="#aa1f0c" />
                            <InvalidText>A Senha deve conter pelo menos 8 caracteres</InvalidText>
                        </>
                    )}
                </ModalRowText>
            </ModalContent>
        </ModalContainer>
    );
}