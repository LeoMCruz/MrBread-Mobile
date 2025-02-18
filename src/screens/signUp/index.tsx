import { View, Text, Platform } from "react-native";
import { AvoidView, SafeAreaView, ScrollView } from "../../components/global/styles";
import Background from "../../components/views/publicbackground";
import React from "react";
import SignUpContent from "../../components/views/signupContent";
import { CreateAccount } from "../../components/texts/styles";
import { Title } from "../../components/views/styles";

export default function SignUp(){
    return(
        <SafeAreaView>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'flex-start'
                }}
            >
                <AvoidView>
                    <Background
                        children={
                            <Title>
                                <CreateAccount>Criar Conta</CreateAccount>
                            </Title>
                        }
                        />
                    <SignUpContent/>
                </AvoidView>
            </ScrollView>
        </SafeAreaView>
    );
}