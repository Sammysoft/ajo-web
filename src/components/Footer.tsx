import React from 'react';
import styled from 'styled-components';
import { FlexedWrapper } from './Elements/flexedwrap';
import { CustomText } from './Elements/text';
import { StyledImg } from './Elements/image';

import Playstore from '../assets/images/playstore.svg';
import Appstore from '../assets/images/appstore.svg';
import Line from '../assets/images/line.svg';


import Facebook from '../assets/icons/logo-facebook.svg';
import LinkedIn from '../assets/icons/logo-linkedin.svg';
import Instagram from '../assets/icons/logo-instagram.svg';
import Twitter from '../assets/icons/logo-twitter.svg';

const Wrapper = styled.div`
width: auto;
padding: 10vh 15vw 10vh 15vw;

@media (max-width: 1040px){
padding: 20px;
width: auto;
}
`

const Footer = () => {
    return (
        <>
            <Wrapper>
                <FlexedWrapper
                    width={'100%'}
                    direction='row'
                    align={'flex-start'}
                    justify='space-between'
                    margin='0px 0px 5vh 0px'
                    invert='column'
                >
                    <FlexedWrapper
                        direction='column'
                        width='50%'
                        justify='space-between'
                        align='center'
                        swidth='100%'
                    >
                        <FlexedWrapper
                            width={'60%'}
                            direction='row'
                            align={'center'}
                            justify='space-between'
                            margin='0px 0px 20px 0px'
                        >
                            <CustomText
                                color='#0C4651'
                                fontWeight='200'
                            >
                                Company
                            </CustomText>
                            <CustomText
                                color='#0C4651'
                                fontWeight='200'
                            >
                                Product
                            </CustomText>
                        </FlexedWrapper>

                        <FlexedWrapper
                            width={'60%'}
                            direction='row'
                            align={'center'}
                            justify='space-between'
                        >

                            <CustomText
                                color='#0C4651'
                                fontWeight='200'
                            >
                                Contact Us
                            </CustomText>
                            <CustomText
                                color='#0C4651'
                                fontWeight='200'
                            >
                                Support
                            </CustomText>
                        </FlexedWrapper>
                    </FlexedWrapper>

                    <FlexedWrapper
                        direction='column'
                        justify='space-between'
                        align='center'
                        width='50%'
                        swidth='auto'
                    >
                        <CustomText
                            fontSize='1rem'
                            color='#0C4651'
                            width='55%'
                            style={{ textAlign: 'left' }}
                            swidth='50%'
                            ssize='0.8rem'
                        >
                            Download Our App Today!
                        </CustomText>

                        <FlexedWrapper
                            direction='row'
                            justify='space-between'
                            align={'center'}
                            width={'55%'}
                            style={{ cursor: 'pointer' }}
                        >
                            <StyledImg img={Playstore} />
                            <StyledImg img={Appstore}  />
                        </FlexedWrapper>
                    </FlexedWrapper>
                </FlexedWrapper>
                <StyledImg img={Line} />

                <FlexedWrapper
                    width={'80%'}
                    direction='row'
                    align='center'
                    justify='space-between'
                    margin='20px auto 0px auto'
                    invert='column'
                >
                    <CustomText
                        fontWeight='200'
                        fontSize='0.8rem'
                    >
                        © 2025 Alajopro. All rights reserved. Proudly built by the Alajopro Team.
                    </CustomText>

                    <FlexedWrapper
                        width={'25%'}
                        direction='row'
                        align='center'
                        justify='space-between'
                        swidth='80%'
                    >
                        {[Twitter, Facebook, Instagram, LinkedIn].map((data, ind) => <StyledImg key={ind.toString()} img={data} size={'20px'} />
                        )}
                    </FlexedWrapper>
                </FlexedWrapper>
            </Wrapper>
        </>
    )
}

export default Footer;