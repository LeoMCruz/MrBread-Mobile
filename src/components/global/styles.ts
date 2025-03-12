import styled from "styled-components/native";
import { Dimensions, ViewProps} from "react-native";

interface ContentProps extends ViewProps{
    ySize: number;
}

const screenHeight = Dimensions.get("window").height;

export const AvoidView = styled.KeyboardAvoidingView`
    flex: 1;
    height: ${screenHeight}px;
`;

export const SafeAreaView = styled.SafeAreaView`
    flex: 1;
    background-color: #f3f5fb;
`;

export const ScrollView = styled.ScrollView`
    flex: 1;
    /* background-color: #f3f5fb; */
`;

export const Container = styled.View`
    flex: 1;
    width: 100%;
    height: ${screenHeight}px;
    align-items: center;
    justify-content: center;   
    background-color: #FFF;
`;