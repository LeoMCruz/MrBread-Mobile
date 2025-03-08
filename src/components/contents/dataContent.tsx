import React from 'react';
import { ImageContainer, Image, FakeView, HeaderText } from '../views/styles';
import { FakeButton } from '../buttons/styles';
import { DataText } from '../texts/styles';

export default function DataContent(){
    return(
        <FakeView>
            <ImageContainer>
                <FakeButton>
                    <Image source={require("../../assets/avatar.png")}/>
                </FakeButton>
            </ImageContainer>
            <HeaderText>
                <DataText>NOME DA EMPRESA</DataText>
                <DataText>NOME DO USUARIO</DataText>
            </HeaderText>
        </FakeView>
    );
}