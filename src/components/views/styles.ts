import { Dimensions, Platform, ViewProps} from "react-native";
import styled from "styled-components/native";

interface ContentProps extends ViewProps{
    ySize?: number;
    $isValid?: boolean;
    color?: string;
    elevation?: number;
}

const screenHeight = Dimensions.get("window").height;

export const LoginBackground = styled.View`
    flex: 1;
    background-color: #4657a1;
    align-items: center;
`;

export const PublicContent = styled.View<ContentProps>`
    height: ${(props: ContentProps) => props.ySize}%;
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #f3f5fb;
    border-top-left-radius: 120px;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.View`
    position: absolute;
    top: 0;
    width: 100%;
    height: 40%;
    align-items: center;
    padding-left: 9%;
    justify-content: center;
`;

export const Form = styled.View<ContentProps>`
    width: 90%;
    height: ${(props: ContentProps) => props.ySize}%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border: 1px; */
`;

export const InputContainer = styled.View<ContentProps>`
    width: 90%;
    gap: 10px;
    height: 50px;
    flex-direction: row;
    border: 1px;
    border-color: #4657a1;
    /* border-color: ${(props: ContentProps) => props.$isValid ? "#4657a1" : 'red'}; */
    border-radius: 16px;
    margin-bottom: 10px;
    /* background-color: #ebebf0; */
`;

export const BasicRow = styled.View`
    position: absolute; 
    bottom: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.View`
    position: absolute;
    top: 0;
    height: 22%;
    align-items: center;
    justify-content: center;
`;

export const ModalContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
  width: 100%;
`;

export const ModalContent = styled.View<ContentProps>`
  width: 100%;
  max-height: ${screenHeight * 0.315}px;
  min-height: ${screenHeight * 0.15}px;
  background-color: ${(props: ContentProps) => props.color || " #f3f5fb"};
  border-width: 1px;
  border-color: #85a3d5;
  justify-content: center;
  border-radius: 16px;
  padding: 15px;
  gap: 10px;
`;

export const ModalRowText = styled.View`
    flex-direction: row;
    gap: 2px;
    align-items: center;
    justify-content: left;
    /* border: 1px; */
`;

export const FakeCenterView = styled.View`
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.View`
    width: 90%;
    gap: 15px;
    height: 73%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const Box = styled.View<ContentProps>`
    width: 105px;
    height: 105px;
    border-radius: 16px;
    background-color: #FFFFFF;
    align-items: center;
    justify-content: center;
    gap: 10px;
       /* Sombreamento para iOS */
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.1;
    shadow-radius: 3px;
    ${Platform.OS === 'android' ? 'elevation: 4' : ''};
`;

export const ImageContainer = styled.View`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    border: 1px;
    border-color: #f3f5fb;
    /* position: absolute;
    top: 51px;
    left: 8%; */
    overflow: hidden;
`;

export const Image = styled.Image`
    width: 100%;
    height: 100%; 
`;

export const HeaderText = styled.View`
    flex-direction: column;
    
`;

export const FakeView = styled.View`
    position: absolute;
    flex-direction: row;
    align-items: center;
    width: 70%;
    gap: 20px;
    top: 60px;
    left: 8%;
`;