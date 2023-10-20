import { Dimensions } from "react-native";
import { styled } from "styled-components/native";

const screenWidth = Dimensions.get('window').width;


export const Wrapper = styled.View`
    margin-top: 40px;
`;

export const Title = styled.Text`
    font-size: 28px;
    text-align: center;
    margin: 20px 0;
`;

export const TilesWrapper = styled.View`
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
`;

export const Tile = styled.View`
    position: relative;
    border: 2px solid #475228;
    width: ${screenWidth * 0.9};
    aspect-ratio: 1;
`;

export const Pics = styled.View`
    overflow: hidden;
`;

export const TileImage = styled.Image`
    margin: 0 auto;
    max-width: ${screenWidth * 0.9};
    height: 320px;
    aspect-ratio: 1;
`;

export const TileCaption = styled.Text`
    position: absolute;
    bottom: 0; 
    background-color: rgba(0, 0, 0, 0.5); 
    color: #fff; 
    padding: 8px; 
    width: 100%; 
    text-align: center; 
    font-size: 20px;
`;