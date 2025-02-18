import React, { useState } from 'react';
import { BasicRow, Form, InputContainer, PublicContent } from './styles';
import { PublicInput } from '../inputs/styles';
import { ButtonText, ClickText, PublicText, StandardText } from '../texts/styles';
import { FakeButton, Icon, PublicButton } from '../buttons/styles';
import { useNavigation } from '@react-navigation/native';
import { PublicNavigationProp } from '../../routes/publicStack';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignInContent(){
    const navigation = useNavigation<PublicNavigationProp>();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hidePassword, setHidePassword] = useState(true);

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
            <PublicButton 
                xSize={90} 
                ySize={50}
            >
                <ButtonText>Entrar</ButtonText>
            </PublicButton>
            <BasicRow>
                <StandardText>Ainda não possui uma conta? </StandardText>
                <FakeButton onPress={() => navigation.navigate("SignUp")} >
                    <ClickText>Registrar</ClickText>
                </FakeButton>
            </BasicRow>
            </Form>
        </PublicContent>
    );
}