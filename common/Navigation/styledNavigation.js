import Icon from "react-native-ico-shopping";
import { styled } from "styled-components/native";

export const Wrapper = styled.View`
    min-height: 64px;
    background: #475228;
    border-radius: 0 0 30px 30px;
    padding: 20px 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ImagesWrapper = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
`;

export const CartIcon = styled(Icon)`
    fill: white;
`;

export const AccountImage = styled.Image`
    width: 32px;
    height: 32px;
`;

export const MenuIcon = styled.Image`
    width: 24px;
    height: 24px;
`;

export const Logo = styled.Text`
    font-size: 28px;
    color: white;
    letter-spacing: 8.37px;
`;

export const LogoSpan = styled.Text`
    color: #7a7a7a;
`;  