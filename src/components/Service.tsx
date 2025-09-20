/* eslint-disable */

import React from 'react';
import styled from 'styled-components';
import { FlexedWrapper } from './Elements/flexedwrap';
import { CustomText } from './Elements/text';


const Wrapper = styled.div`
width: 100%;
`

const Service = () => {

    const serviceMenu = [{
        indicator: "#0C4651",
        head: "Join an ajo group!",
        body: `Discover trusted groups or create your own to begin your savings journey with people you know and trust.`
    },
    {
        indicator: "#AED038",
        head: "Set goals!",
        body: `Choose your savings target — personal or group-based — and define how much and how often you want to contribute..`
    },
    {
        indicator: "#0089A3",
        head: "Start saving!",
        body: `Make secure contributions, track progress, and enjoy stress-free group savings with full transparency.`
    }]

    return (
        <>
            <Wrapper>
                <FlexedWrapper
                    justify='center'
                    align={'center'}
                    width='100%'
                    direction='column'
                >
                    <CustomText
                        color='#1B1B1B'
                        fontSize='2rem'
                        fontWeight='600'
                        ssize='2rem'
                    >
                        How does it work?
                    </CustomText>

                    <CustomText
                        fontWeight='200'
                        fontSize='1rem'
                        width='40%'
                        padding={'10px 0px 20px 0px'}
                        swidth='80%'
                    >
                        With lots of unique blocks, you
                        can easily build a page easily
                        without any coding.
                    </CustomText>

                    <FlexedWrapper
                        direction='row'
                        justify={'space-between'}
                        align={'center'}
                        width={'70%'}
                        margin='5vh 0px 5vh 0px'
                        invert='column'
                        swidth='100%'
                    >
                        {serviceMenu.map((data, ind) =>
                            <StepsMenu
                                indicator={data.indicator}
                                head={data.head}
                                body={data.body}
                                index={ind} />
                        )}
                    </FlexedWrapper>
                </FlexedWrapper>
            </Wrapper>
        </>
    )
}

interface StepsMenuProps {
    indicator: string,
    head: string,
    body: string,
    index: number
}


const StepsMenu = ({ indicator, head, body, index }: StepsMenuProps) => {
    return (
        <>
            <FlexedWrapper
                width={'30%'}
                direction='column'
                justify={'space-between'}
                align={'center'}
                swidth='100%'
            >
                <CountWrapper background={indicator}>
                    {index + 1}
                </CountWrapper>

                <CustomText
                    fontWeight='700'
                    fontSize='1.2rem'
                    padding={'20px 0px 0px 0px'}
                >
                    {head}
                </CustomText>

                <CustomText
                    fontWeight='200'
                    fontSize='0.8rem'
                    padding='20px 0px 10px 0px'
                    width='80%'
                >
                    {body}
                </CustomText>
            </FlexedWrapper>
        </>
    )
}


const CountWrapper = styled.div<{ background: string }>`
width: 50px;
height: 50px;
border-radius: 50px;
background-color: ${(props) => props.background ? props.background : ""};
color: #ffffff;
font-size: 1.2rem;
font-weight: 600;
text-align: center;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
`;

export default Service;