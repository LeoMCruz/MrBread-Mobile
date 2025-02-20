import { View, Text, Platform } from "react-native";
import { AvoidView, SafeAreaView, ScrollView } from "../../components/global/styles";
import Background from "../../components/contents/publicbackground";
import MrLogo from "../../components/contents/logo";
import SignInContent from "../../components/contents/signInContent";

export default function SignIn(){
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
                            <MrLogo />
                        }
                    />
                    <SignInContent/>
                </AvoidView>
            </ScrollView>
        </SafeAreaView>
    );
}