import React from 'react';
import { ButtonText, Wrapper } from './styledHome';
import { Categories } from './Sections/Categories/categories';
import { Newsletter } from './Sections/NewsLatter/newsletter';

export const Home = () => {
    return (
        <Wrapper>
            <Categories />
            <Newsletter />
        </Wrapper>
    );
};

