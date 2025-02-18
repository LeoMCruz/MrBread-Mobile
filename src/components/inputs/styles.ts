import { TextInputProps } from "react-native";
import styled from "styled-components/native";
import MaskInput, { MaskInputProps } from "react-native-mask-input";

interface InputProps extends TextInputProps{
    xSize: number;
    ySize: number;
}

interface MaskProps extends MaskInputProps{
    xSize: number;
    ySize: number;
}

export const PublicInput = styled(MaskInput)<MaskProps>`
    width: ${(props: InputProps) => props.xSize}%;
    height: ${(props: InputProps) => props.ySize}px;
    padding-left: 10px;
    color: #5e5e61;
`;