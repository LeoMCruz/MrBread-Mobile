import React, { useContext, useState } from 'react';
import { BasicRow, Form, InputContainer, PublicContent } from '../views/styles';
import { PublicInput } from '../inputs/styles';
import { ButtonText, ClickText, InvalidText, PublicText, StandardText } from '../texts/styles';
import { FakeButton, Icon, PublicButton } from '../buttons/styles';
import { useNavigation } from '@react-navigation/native';
import { PublicNavigationProp } from '../../routes/publicStack';
import Ionicons from '@expo/vector-icons/Ionicons';
import {InvalidInputs, MainModal, SuccessCreateAccount } from './modal';
import { checkCNPJ, checkEmail, checkName, checkOrg, checkPassword } from '../../utils/formValidation';
import { AuthContext } from '../../context/auth';
import { ActivityIndicator } from 'react-native';

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
    const [accountCreated, setAccountCreated] = useState(false);
    const [apiResponse, setApiResponse] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);
    const {CreateAccount} = useContext(AuthContext);
    const [loading, setLoading] = useState(false);


    function filledInputs(){
        if(email && password && confirmPassword && org && cnpj && passwordMatch)
            return true;
        return false;
    }

    function comparePasswords(text: string) {
        setPasswordMatch(password === text);
    }

    const cnpjMask = [
        /\d/, /\d/, '.', 
        /\d/, /\d/, /\d/, '.', 
        /\d/, /\d/, /\d/, '/', 
        /\d/, /\d/, /\d/, /\d/, '-', 
        /\d/, /\d/
      ];

    async function handleCreateAccount(){
        setLoading(true);
        if(!checkCNPJ(cnpj) || !checkEmail(email) || !checkName(name) || !checkOrg(org) || !checkPassword(password)){
            setIsVisible((prev: boolean)=> !prev)
            setLoading(false);
        }
        else {
            setLoading(true);
            try {
                const response = await CreateAccount(org, cnpj, name, email, password);
                if(response.status === 200){
                    setApiResponse("Usuário criada com sucesso!");
                    setAccountCreated((prev: boolean)=> !prev);
                    setLoading(false);
                }
            } catch (error: Error | any) {
                const {title} = error.response.data;
                setApiResponse(title);
                setAccountCreated((prev: boolean)=> !prev); 
                setLoading(false);                
            }
            
        }
           
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
                        onChangeText={(text: string) => {setConfirmPassword(text); comparePasswords(text)}}
                    />
                    <Icon onPress={() => setHideConfirmPassword(!hideConfirmPassword)}>
                        {hideConfirmPassword ? (
                        <Ionicons name="eye" size={24} color="#4657a1" />
                        ) : (
                        <Ionicons name="eye-off" size={24} color="#4657a1" />
                        )}
                    </Icon>
                </InputContainer>
                {!passwordMatch ?
                    (<InvalidText>As senhas não coincidem</InvalidText>) : (<></>)}
            {filledInputs()? (
                <PublicButton 
                    xSize={90} 
                    ySize={50}
                    onPress={handleCreateAccount}
                >
                    {loading ? (
                        <ActivityIndicator size="small" color="#ecf0f1" />
                    ) : (
                        <ButtonText>Criar Conta</ButtonText>
                    )}
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
                    <InvalidInputs
                        email = {checkEmail(email)}
                        password = {checkPassword(password)}
                        name = {checkName(name)}
                        org = {checkOrg(org)}
                        cnpj = {checkCNPJ(cnpj)}
                    />
                }
            />
             <MainModal
                isVisible = {accountCreated}
                closeModal={() => {setAccountCreated((prev: boolean) => !prev);}}
                children={
                    <SuccessCreateAccount
                        message = {apiResponse}
                        closeModal={() => {setAccountCreated((prev: boolean) => !prev); navigation.navigate("SignIn")}}
                    />
                }
            />
        </PublicContent>
    );
}