import React from 'react';
import { Button, ButtonText, Input, InputWrapper, Text, Wrapper } from './styledNewsletter';

export const Newsletter = () => {
    return (
        <Wrapper>
            <Text>SUBSCRIBE TO THE NEWSLETTER AND RECEIVE MONEY</Text>
            <InputWrapper>
                <Input placeholder='Input E-Mail' />
                <Button><ButtonText>Subscribe</ButtonText></Button>
            </InputWrapper>
        </Wrapper>
    );
};

