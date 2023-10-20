import { Dimensions } from "react-native";
import { styled } from "styled-components/native";
const screenWidth = Dimensions.get('window').width;

export const Wrapper = styled.View`
    background: rgb(71, 82, 40) ;
    margin-top: 40px;
    display: flex;
    align-items: center;
    padding: 40px 20px;
    gap: 20px;
`;

export const Text = styled.Text`
    text-align: center;
    color: white;
    font-size: 20px;

`;

export const InputWrapper = styled.View`
    display: flex;
    flex-direction: row;
`;

export const Input = styled.TextInput`
    color: rgb(71, 82, 40);
    width: ${screenWidth * 0.6};
    font-size: 16px;
    padding: 8px 10px;
    background: white;
`;

export const Button = styled.TouchableOpacity`
    background: rgba(255,255,255,0.5);
    padding: 10px;
`;

export const ButtonText = styled.Text`
    font-size: 16px;
    color: white;
`;