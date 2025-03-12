import { TextInputProps } from "react-native";
import styled from "styled-components/native";
import MaskInput, { MaskInputProps } from "react-native-mask-input";
import { MaskedTextInput } from 'react-native-mask-text';

interface InputProps extends TextInputProps{
    xSize: number;
    ySize: number;
}

interface MaskProps extends MaskInputProps{
    xSize: number;
    ySize: number;
    onChangeText: (text: string) => void;
    value: string;
    secureTextEntry?: boolean;
}

export const PublicInput = styled(MaskInput)<MaskProps>`
    width: ${(props: InputProps) => props.xSize}%;
    height: ${(props: InputProps) => props.ySize}px;
    padding-left: 10px;
    color: #5e5e61;
`;

export const MoneyInput = styled(MaskedTextInput)<InputProps>`
    width: ${(props: InputProps) => props.xSize}%;
    height: ${(props: InputProps) => props.ySize}px;
    padding-left: 10px;
    color: #5e5e61;
`;