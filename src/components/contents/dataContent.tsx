import React, { useContext } from 'react';
import { ImageContainer, Image, FakeView, HeaderText } from '../views/styles';
import { FakeButton } from '../buttons/styles';
import { DataText } from '../texts/styles';
import { AuthContext } from '../../context/auth';

export default function DataContent(){
    const {user} = useContext(AuthContext);

    return(
        <FakeView>
            <ImageContainer>
                <FakeButton>
                    <Image source={require("../../assets/avatar.png")}/>
                </FakeButton>
            </ImageContainer>
            <HeaderText>
                <DataText>{user?.nomeOrganizacao}</DataText>
                <DataText>{user?.nome}</DataText>
            </HeaderText>
        </FakeView>
    );
}