import React from 'react';
import styled from 'styled-components';
import { CustomText } from './Elements/text';
import { FlexedWrapper } from './Elements/flexedwrap';

import Feature1 from '../assets/images/feature-1.svg'
import Feature2 from '../assets/images/feature-2.svg'
import { StyledImg } from './Elements/image';

const Wrapper = styled.div`
width: auto;
padding: 5px 15vw 0px 15vw;
height: fit-content;
background: linear-gradient(
    to bottom,
    #d9e2e6 0%,
    #d9e2e6 10%,
    #ffffff 40%,
    #ffffff 100%
  );

  @media (max-width: 1040px){
padding: 0px 20px 0px 20px;
  }
`


const Features = () => {
    return (
        <>
            <Wrapper>
                <FlexedWrapper
                    direction='row'
                    justify='space-between'
                    align={'flex-start'}
                    width='100%'
                    margin={"20vh 0px 4vh 0px"}
                    invert='column'
                >
                    <StyledImg
                    img={Feature1}
                    ssize='350px'
                    size='550px' />
                    <FlexedWrapper
                        direction={'column'}
                        justify='space-between'
                        align={'flex-start'}
                        width={'50%'}
                        swidth='100%'
                    >
                        <CustomText
                            color='#161C2D'
                            fontSize='1.8rem'
                            fontWeight='600'
                        >
                            Save Together!
                        </CustomText>
                        <CustomText
                            color='#161C2D'
                            fontSize='1.8rem'
                            fontWeight='600'
                        >
                            Grow Together!
                        </CustomText>

                        <CustomText
                            fontSize='0.8rem'
                            color='#161C2D'
                            fontWeight='300'
                            width='80%'
                            padding='20px 0px 20px 0px'
                            swidth='100%'
                        >
                            We connect you with trusted friends, family,
                            and communities to build consistent savings
                            habits and reach your financial goals faster.
                        </CustomText>

                        <CustomText
                            color='#161C2D'
                            fontSize='0.8rem'
                            fontWeight='600'
                            padding='20px 0px 0px 0px'
                        >
                            Group contributions
                        </CustomText>

                        <CustomText
                            fontSize='0.8rem'
                            color='#161C2D'
                            fontWeight='300'
                            width='80%'
                            padding='10px 0px 20px 0px'
                            swidth='100%'
                        >
                            Create or join savings groups where
                            everyone contributes based on agreed cycles.
                            No stress, no chasing.
                        </CustomText>

                        <CustomText
                            color='#161C2D'
                            fontSize='0.8rem'
                            fontWeight='600'
                            padding='20px 0px 0px 0px'
                        >
                            Real-Time Updates
                        </CustomText>

                        <CustomText
                            fontSize='0.8rem'
                            color='#161C2D'
                            fontWeight='300'
                            width='80%'
                            padding='10px 0px 20px 0px'
                            swidth='100%'
                        >
                            Get notified when contributions are made,
                            when it’s your turn to withdraw, or when
                            someone applies for a group loan.
                        </CustomText>
                    </FlexedWrapper>
                </FlexedWrapper>


                <FlexedWrapper
                    direction='row'
                    justify='space-between'
                    align={'flex-start'}
                    width='100%'
                    margin={"10vh 0px 4vh 0px"}
                    invert='column'
                >

                    <FlexedWrapper
                        direction={'column'}
                        justify='space-between'
                        align={'flex-start'}
                        width={'50%'}
                        swidth='100%'
                    >
                        <CustomText
                            color='#161C2D'
                            fontSize='1.8rem'
                            fontWeight='600'
                            width='80%'
                        >
                            Stay Connected & In Control.
                        </CustomText>

                        <CustomText
                            fontSize='0.8rem'
                            color='#161C2D'
                            fontWeight='300'
                            width='80%'
                            padding='20px 0px 20px 0px'
                            swidth='100%'
                        >
                            Alajopro makes it easy to manage your savings
                            with real-time updates, in-app chat, and clear group
                            coordination — anytime, anywhere..
                        </CustomText>

                        <CustomText
                            color='#161C2D'
                            fontSize='0.8rem'
                            fontWeight='600'
                            padding='20px 0px 0px 0px'
                        >
                            Chat With Family Members Easily
                        </CustomText>

                        <CustomText
                            fontSize='0.8rem'
                            color='#161C2D'
                            fontWeight='300'
                            width='80%'
                            padding='10px 0px 20px 0px'
                            swidth='100%'
                        >
                            Communicate instantly with your group — send
                            reminders, updates, or encouragement all in
                            one place.
                        </CustomText>

                        <CustomText
                            color='#161C2D'
                            fontSize='0.8rem'
                            fontWeight='600'
                            padding='20px 0px 0px 0px'
                        >
                            Manage Contributions Seamlessly
                        </CustomText>

                        <CustomText
                            fontSize='0.8rem'
                            color='#161C2D'
                            fontWeight='300'
                            width='80%'
                            padding='10px 0px 20px 0px'
                            swidth='100%'
                        >
                            Monitor who has paid, what’s pending, and when
                            next to contribute — all from one screen..
                        </CustomText>
                    </FlexedWrapper>
                    <StyledImg
                    img={Feature2}
                    size='600px'
                    ssize='400px'
                    />

                </FlexedWrapper>
            </Wrapper>
        </>
    )
}

export default Features;