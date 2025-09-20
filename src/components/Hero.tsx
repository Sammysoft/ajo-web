import React from 'react';
import styled from 'styled-components';

import HeroBG from '../assets/images/hero-bg.svg';
import HeroWave from '../assets/images/hero-wave.svg';
import HeroDemo from '../assets/images/hero-demo.svg';
import Playstore from '../assets/images/playstore.svg';
import Appstore from '../assets/images/appstore.svg';

import Navbar from './Navbar';
import { StyledImg } from './Elements/image';
import { FlexedWrapper } from './Elements/flexedwrap';
import { CustomText } from './Elements/text';
import { CustomButton } from './Elements/button';

const Wrapper = styled.div`
width: auto;
height: 85vh;
padding: 30px 15vw 0px 15vw;
background-image: url('${HeroBG}');
background-repeat: no-repeat;
background-size: cover;
background-position: center;
position: relative;

@media (max-width: 1040px){
height: fit-content;
}
`;

const BottomWrapper = styled.div`
width: 100%;
position: absolute;
bottom: -10px;
right: 0px;
`;


const Hero = () => {
    return (
        <>
            <Wrapper>
                <Navbar />
                <FlexedWrapper
                    width='100%'
                    direction='row'
                    align={'flex-start'}
                    justify={'space-between'}
                    margin={'8vh 0px 0px 0px'}
                    invert='column'
                >
                    <FlexedWrapper
                        margin={'0px 0px 0px 0px'}
                        width='50%'
                        direction='column'
                        align={'flex-start'}
                        justify={'space-between'}
                        swidth={'100%'}
                    >
                        <CustomText
                            width={'100%'}
                            fontWeight='600'
                            fontSize='3.5rem'
                            ssize='2rem'
                            color='#ffffff'
                        >
                            Your Ajo No fit Scatter Again
                        </CustomText>

                        <CustomText
                            width={'80%'}
                            fontWeight='100'
                            fontSize='1.2rem'
                            color='#ffffff'
                            padding={'20px 0px 20px 0px'}
                            ssize='1rem'
                            swidth='100%'
                            style={{ fontStyle: "italic" }}
                        >
                            Save, Withdraw, Lend and Grow with Trusted Circles
                        </CustomText>

                        <CustomButton width='30%'>
                            Join our waitlist
                        </CustomButton>

                        <CustomText
                            fontWeight='900'
                            fontSize='0.7rem'
                            color={'#ffffff'}
                            padding={'20vh 0px 0px 0px'}
                            spadding={'20px 0px 0px 0px'}
                            style={{ letterSpacing: '3px' }}
                            ssize='0.5rem'
                        >
                            DOWNLOAD OUR APP TODAY!
                        </CustomText>
                        <FlexedWrapper
                            direction='row'
                            width='25%'
                            justify='space-between'
                            swidth='40%'
                            align={'center'}
                            style={{padding:"0px 0px 10vh 0px"}}
                        >
                            <StyledImg img={Appstore} />
                            <StyledImg img={Playstore} />
                        </FlexedWrapper>
                    </FlexedWrapper>
                    <StyledImg
                        img={HeroDemo}
                        size='500px'
                        zindex={999}
                        ssize='280px'
                    />
                </FlexedWrapper>
                <BottomWrapper>
                    <StyledImg img={HeroWave} />
                </BottomWrapper>
            </Wrapper>
        </>
    )
}

export default Hero;