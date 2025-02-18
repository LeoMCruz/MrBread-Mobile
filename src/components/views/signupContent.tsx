import React, { useState } from 'react';
import { BasicRow, Form, InputContainer, PublicContent } from './styles';
import { PublicInput } from '../inputs/styles';
import { ButtonText, ClickText, PublicText, StandardText } from '../texts/styles';
import { FakeButton, Icon, PublicButton } from '../buttons/styles';
import { useNavigation } from '@react-navigation/native';
import { PublicNavigationProp } from '../../routes/publicStack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CreateAccountError, MainModal } from '../contents/modal';
import { checkCNPJ, checkEmail, checkName, checkOrg, checkPassword } from '../../utils/formValidation';

export default function SignUpContent(){
    const navigation = useNavigation<PublicNavigationProp>();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [org, setOrg] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [name, setName] = useState("")
    const [hidePassword, setHidePassword] = useState(true);
    const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    function filledInputs(){
        if(email && password && confirmPassword && org && cnpj)
            return true;
        return false;
    }

    const cnpjMask = [
        /\d/, /\d/, '.', 
        /\d/, /\d/, /\d/, '.', 
        /\d/, /\d/, /\d/, '/', 
        /\d/, /\d/, /\d/, /\d/, '-', 
        /\d/, /\d/
      ];

    function handleCreateAccount(){
        if(!checkCNPJ(cnpj) || !checkEmail(email) || !checkName(name) || !checkOrg(org) || !checkPassword(password)){
            setIsVisible((prev: boolean)=> !prev)
        }
        else 
            alert("FUNCIONOU")
    }

    return(
        <PublicContent ySize={80}>
            <Form ySize={100}>
                <PublicText>Organização</PublicText>
                <InputContainer>
                    <PublicInput 
                        xSize={85} 
                        ySize={50} 
                        placeholder="Nome Fantasia ou Razão Social" 
                        value={org}
                        onChangeText={(text: string) => setOrg(text)}
                    />
                </InputContainer>
                <PublicText>CNPJ</PublicText>
                <InputContainer>
                    <PublicInput 
                        xSize={85} 
                        ySize={50} 
                        placeholder="00.000.000/0000.00" 
                        value={cnpj}
                        onChangeText={(masked: string, unmasked: string) => setCnpj(unmasked)}
                        mask={cnpjMask}
                    />
                </InputContainer>
                <PublicText>Email</PublicText>
                <InputContainer
                >
                    <PublicInput 
                        xSize={85} 
                        ySize={50} 
                        placeholder="seu@email.com" 
                        value={email}
                        onChangeText={(text: string) => setEmail(text)}
                    />
                </InputContainer>
                <PublicText>Nome</PublicText>
                <InputContainer>
                    <PublicInput 
                        xSize={85} 
                        ySize={50} 
                        placeholder="Seu nome completo" 
                        value={name}
                        onChangeText={(text: string) => setName(text)}
                    />
                </InputContainer>
                <PublicText>Senha</PublicText>
                <InputContainer>
                    <PublicInput 
                        xSize={85} 
                        ySize={50} 
                        placeholder="**********" 
                        value={password}
                        secureTextEntry={hidePassword}
                        onChangeText={(text: string) => setPassword(text)}
                    />
                    <Icon onPress={() => setHidePassword(!hidePassword)}>
                        {hidePassword ? (
                        <Ionicons name="eye" size={24} color="#4657a1" />
                        ) : (
                        <Ionicons name="eye-off" size={24} color="#4657a1" />
                        )}
                    </Icon>
                </InputContainer>
                <PublicText>Confirmar Senha</PublicText>
                <InputContainer>
                    <PublicInput 
                        xSize={85} 
                        ySize={50} 
                        placeholder="**********" 
                        value={confirmPassword}
                        secureTextEntry={hideConfirmPassword}
                        onChangeText={(text: string) => setConfirmPassword(text)}
                    />
                    <Icon onPress={() => setHideConfirmPassword(!hideConfirmPassword)}>
                        {hideConfirmPassword ? (
                        <Ionicons name="eye" size={24} color="#4657a1" />
                        ) : (
                        <Ionicons name="eye-off" size={24} color="#4657a1" />
                        )}
                    </Icon>
                </InputContainer>
            {filledInputs()? (
                <PublicButton 
                    xSize={90} 
                    ySize={50}
                    onPress={handleCreateAccount}
                >
                    <ButtonText>Criar Conta</ButtonText>
                </PublicButton>

            ): (
                <PublicButton 
                    xSize={90} 
                    ySize={50}
                    color={"#85a3d5"}
                    disable={true}
                >
                    <ButtonText>Criar Conta</ButtonText>
                </PublicButton>
            )}
            <BasicRow>
                <StandardText>Já possui uma conta? </StandardText>
                <FakeButton onPress={() => navigation.navigate("SignIn")} >
                    <ClickText>Entrar</ClickText>
                </FakeButton>
            </BasicRow>
            </Form>
            <MainModal
                isVisible = {isVisible}
                closeModal={() => setIsVisible((prev: boolean) => !prev)}
                children={
                    <CreateAccountError
                        email = {checkEmail(email)}
                        password = {checkPassword(password)}
                        name = {checkName(name)}
                        org = {checkOrg(org)}
                        cnpj = {checkCNPJ(cnpj)}
                    />
                }
            />
        </PublicContent>
    );
}