import React, { useContext, useState } from 'react';
import { BasicRow, Form, InputContainer, PublicContent } from '../views/styles';
import { PublicInput } from '../inputs/styles';
import { ButtonText, ClickText, PublicText, StandardText } from '../texts/styles';
import { FakeButton, Icon, PublicButton } from '../buttons/styles';
import { useNavigation } from '@react-navigation/native';
import { PublicNavigationProp } from '../../routes/publicStack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ActivityIndicator } from 'react-native';
import { AuthContext } from '../../context/auth';
import { MainModal, SuccessCreateAccount } from './modal';

export default function SignInContent(){
    const navigation = useNavigation<PublicNavigationProp>();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hidePassword, setHidePassword] = useState(true);
    const [loading, setLoading] = useState(false);
    const {Login} = useContext(AuthContext);
    const [isVisible, setIsVisible] = useState(false);
    const [apiResponse, setApiResponse] = useState("");

    async function handleSignIn(){
        setLoading(true);
        try {
            const response = await Login(email, password);
            if(response.status !== 200){
                setApiResponse(response.data.title);
                setIsVisible(true);
                setLoading(false);
            }
            setLoading(false);
        } catch (error: any) {
            return error;
        }
    }

    return(
        <PublicContent ySize={60}>
            <Form ySize={100}>
                <PublicText>Email</PublicText>
                <InputContainer>
                    <PublicInput 
                        xSize={85} 
                        ySize={50} 
                        placeholder="seu@email.com" 
                        value={email}
                        onChangeText={(text: string) => setEmail(text)}
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
                {password.length > 7 ?(
                    <PublicButton 
                        xSize={90} 
                        ySize={50}
                        onPress={() => handleSignIn()}
                    >
                        {loading ? (
                            <ActivityIndicator size="large" color="#ecf0f1" />
                        ) : (
                            <ButtonText>Entrar</ButtonText>
                        )}
                    </PublicButton>

                ): (
                    <PublicButton
                        xSize={90}
                        ySize={50}
                        color={"#85a3d5"}
                        disable={true}
                    >
                        <ButtonText>Entrar</ButtonText>
                    </PublicButton>
                )}
            <BasicRow>
                <StandardText>Ainda não possui uma conta? </StandardText>
                <FakeButton onPress={() => navigation.navigate("SignUp")} >
                    <ClickText>Registrar</ClickText>
                </FakeButton>
            </BasicRow>
            </Form>
            <MainModal
                isVisible = {isVisible}
                closeModal={() => {setIsVisible((prev: boolean) => !prev);}}
                children={
                    <SuccessCreateAccount
                    message = {apiResponse}
                    closeModal={() => {setIsVisible((prev: boolean) => !prev)}}
                    />
                }
            />
        </PublicContent>
    );
}