import React from 'react';
import styled from 'styled-components';
import { StyledImg } from './Elements/image';

import Logo from '../assets/images/nav-logo.svg'
import { FlexedWrapper } from './Elements/flexedwrap';
import { CustomText } from './Elements/text';
import { CustomButton } from './Elements/button';


const Wrapper = styled.div`
width: 100%;
height: 8vh;
background: transparent;
cursor: pointer;
`;


const Navbar = () => {
    return (
        <>
            <Wrapper>
                <FlexedWrapper
                    width='100%'
                    align={'center'}
                    justify='space-between'
                    direction='row'
                    invert='column'
                >
                    <StyledImg size='80px' img={Logo} />
                    <FlexedWrapper
                        width={'30%'}
                        swidth={'60%'}
                        align={'center'}
                        justify='space-between'
                        direction='row'
                        invert='column'
                    >
                        <CustomText
                            color='#ffffff'
                            fontWeight='600'
                            fontSize='0.8rem'
                        >
                            Support
                        </CustomText>

                        <CustomText
                            color='#ffffff'
                            fontWeight='600'
                            fontSize='0.8rem'
                        >
                            Contact
                        </CustomText>

                        <CustomButton>
                            Join our waitlist
                        </CustomButton>
                    </FlexedWrapper>
                </FlexedWrapper>
            </Wrapper>
        </>
    )
}

export default Navbar;