import { Button, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

interface ButtonProps extends TouchableOpacityProps{
    xSize: number;
    ySize: number;
    color?: string;
}

export const FakeButton = styled.TouchableOpacity``;

export const PublicButton = styled.TouchableOpacity<ButtonProps>`
    flex-direction: row;
    width: ${(props: ButtonProps) => props.xSize}%;
    height: ${(props: ButtonProps) => props.ySize}px;
    background-color: ${(props: ButtonProps) => props.color || "#4657a1"};
    border-radius: 16px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;

export const Icon = styled.TouchableOpacity`
  width: 10%;
  justify-content: center;
  align-items: center;
`;

export const CloseModal = styled.TouchableOpacity`
  position: absolute;
  bottom: 15px;
  right: 20px;
`;

export const TopButton = styled.TouchableOpacity`
    position: absolute;
    top: 60px;
    right: 8%;
`;

export const CreateButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-right: 5%;
`;