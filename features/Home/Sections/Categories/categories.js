import React from 'react';
import { Pics, Tile, TileCaption, TileImage, TilesWrapper, Title, Wrapper } from './styledCategories';
import { tilesData } from './tilesData';

export const Categories = () => {
    return (
        <Wrapper>
            <Title>Categories</Title>
            <TilesWrapper>
                {tilesData.map((tile, index) => (
                    <Tile key={index}>
                        <Pics>
                            <TileImage source={tile.src} />
                        </Pics>
                        <TileCaption>{tile.text}</TileCaption>
                    </Tile>
                ))}
            </TilesWrapper>
        </Wrapper>
    );
};

