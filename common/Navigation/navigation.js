import React from 'react';
import {  Logo, LogoSpan, MenuIcon, Wrapper } from './styledNavigation';
import hamburger from '../Images/hamburger.png';

export const Navigation = () => {
    return (
        <Wrapper>
            <MenuIcon source={hamburger} />
            <Logo>TREK<LogoSpan>Shop</LogoSpan></Logo>
        </Wrapper>
    );
};

