import React from 'react';
import styled from 'styled-components';

import ReviewBG from '../assets/images/review-bg.svg';
import Thumbnail from '../assets/images/thumbnail.svg';
import Play from '../assets/images/play.svg';
import Dots from '../assets/images/dots.svg';
import { StyledImg } from './Elements/image';
import { CustomText } from './Elements/text';
import { FlexedWrapper } from './Elements/flexedwrap';

import Share from '../assets/icons/share.svg';
import User from '../assets/icons/user.svg';
import Roadmap from '../assets/icons/roadmap.svg';
import Favourite from '../assets/icons/favourite.svg';
import Video from '../assets/icons/video.svg';
import Opening from '../assets/icons/opening.svg';

import Oval1 from '../assets/images/oval-1.svg';
import Oval2 from '../assets/images/oval-2.svg';
import Oval3 from '../assets/images/oval-3.svg';

import TailRight from '../assets/icons/tail-right.svg';


const Wrapper = styled.div`
width: auto;
height: fit-content;
padding: 30px 15vw 0px 15vw;
background-image: url('${ReviewBG}');
background-repeat: no-repeat;
background-size: cover;
background-position: top;
margin: 5vh 0px 0px 0px;
position: relative;
overflow: hidden;
`;


const ThumbnailWrapper = styled.div`
position: absolute;
top: -1vh;
width: 100%;
z-index: 9999;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
left: 0px;


`;

const PlayButton = styled.div`
position: absolute;
top: 25%;
width: 100%;
height: 50%;
left: 45%;

@media (max-width: 1040px){
left: 40%;
}
`;

const DotsWrapper = styled.div`
position: absolute;
bottom: 20%;
left: 25%;
z-index: -10;

@media (max-width: 1040px){
left: 5%;
}
`;


const FeatureListWrapper = styled.div`
width: 100%;
display: grid;
grid-template-columns: 30% 30% 30%;
column-gap: 2%;
row-gap: 10%;
margin: 10vh 0px 0px 0px;

@media (max-width: 1040px){
grid-template-columns: 100%;
margin: 10vh 0px 30vh 0px;
}
`;

const ReviewCardWrapper = styled.div`
background-color: #ffffff;
border-radius: 20px;
padding: 30px;
width: 60%;
height: 15vh;
margin: 0px auto 3vh auto;
box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
position: relative;

  &.overlay::after {
    content: "";
    position: absolute;
    border-radius: 20px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    pointer-events: none;
  }

  &.overlay2::after {
    content: "";
    position: absolute;
    border-radius: 20px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    pointer-events: none;
  }


  @media (max-width: 1040px){
    height: fit-content;
    width: auto;
  }
`

const Review = () => {

    const menuList = [{
        icon: Roadmap,
        head: 'Group Savings',
        content: `Create or join trusted savings
        groups with ease. Contribute regularly,
        track progress, and reach your goals
        together.`
    }, {
        icon: User,
        head: 'Secure Withdrawals',
        content: `Enjoy peace of mind with secure,
        transparent withdrawals. Funds are protected
         and processes are well-documented.`
    },
    {
        icon: Share,
        head: 'Goal-based Savings',
        content: `Set personal or group savings
     targets and watch your progress grow.
     Perfect for birthdays, rent, travel, or
     big dreams.`
    }, {
        icon: Video,
        head: 'Loan Application & Approval',
        content: `Need cash before payout? Apply
        for short-term loans within your group —
        fast decisions, fair terms.`
    }, {
        icon: Opening,
        head: 'Scheduled Contribution',
        content: `Automate your contributions so you
        never miss a deadline. Stay consistent and
        committed without the stress.`
    }, {
        icon: Favourite,
        head: 'Wallet & Transaction History',
        content: `View all deposits, withdrawals, and
        transfers in one place. Full transparency to
        keep your money story clear.`
    }];


    const reviewList = [{
        icon: Oval3,
        content: `“Since my group moved to Alajopro, no more carrying book or chasing anyone for contribution. Everything dey transparent — na real digital ajo be this!”`,
        details: `— Blessing, Treasurer – Akure Ladies Ajo Group`
    }, {
        icon: Oval1,
        content: `“I love how I can track my savings and even set personal goals. Alajopro made me more disciplined with money. E choke!”`,
        details: `— Femi Alade, Student & Side Hustler`
    }, {
        icon: Oval2,
        content: `“We dey run two ajo groups at once, and Alajopro helps us manage both without stress. This app na game changer for group savings in Naija.”`,
        details: `— Mrs. Agbaje, Market Leader, Ibadan`
    }]

    return (
        <>
            <Wrapper>
                <ThumbnailWrapper>
                    <StyledImg img={Thumbnail} ssize='100%' size='50%' />
                    <PlayButton>
                        <StyledImg img={Play} ssize={'20%'} size='10%' />
                    </PlayButton>
                    <DotsWrapper>
                        <StyledImg img={Dots} size='40%' />
                    </DotsWrapper>
                </ThumbnailWrapper>

                <CustomText
                    fontWeight='600'
                    fontSize='2rem'
                    color={'#ffffff'}
                    padding={'50vh 0px 10px 0px'}
                    style={{ textAlign: 'center' }}
                    width='100%'
                    spadding='30vh 0px 10px 0px'
                    ssize='1.5rem'
                >
                    Reinventing Ajo for the Modern Age.
                </CustomText>
                <CustomText
                    padding={'10px 0px 10px 0px'}
                    color='#ffffff'
                    fontWeight='100'
                    style={{ textAlign: 'center', fontStyle: "italic" }}
                    width='100%'
                    ssize='0.8rem'
                >
                    Say goodbye to manual contributions and confusion. <span style={{ textDecoration: "underline", textDecorationColor: "#E1EF1E", textDecorationThickness: '2px', textUnderlineOffset: '4px', fontStyle: 'normal' }}>
                        Say hello to Alajopro!
                    </span>
                </CustomText>

                <FeatureListWrapper>
                    {menuList.map((data, ind) =>
                        <FlexedWrapper
                            direction={'row'}
                            align={'flex-start'}
                            justify='space-between'
                            width='100%'
                        >
                            <StyledImg
                                img={data.icon}
                                size={'30px'}
                            />
                            <FlexedWrapper
                                direction='column'
                                align={'flex-start'}
                                justify='space-between'
                                width={'80%'}
                                swidth='85%'
                            >
                                <CustomText
                                    fontWeight='700'
                                    fontSize='1rem'
                                    color={'#ffffff'}
                                    padding={'0px 0px 10px 0px'}
                                >
                                    {data.head}
                                </CustomText>
                                <CustomText
                                    color={'#ffffff'}
                                    fontSize='0.8rem'
                                    fontWeight={'200'}
                                    style={{ opacity: 0.6 }}
                                >
                                    {data.content}
                                </CustomText>
                            </FlexedWrapper>
                        </FlexedWrapper>
                    )}
                </FeatureListWrapper>


                <CustomText
                    color={'#ffffff'}
                    fontWeight='400'
                    fontSize='1.5rem'
                    style={{ textAlign: 'center' }}
                    width='100%'
                    padding={'20vh 0px 10vh 0px'}
                    ssize='1.2rem'
                >
                    1,123 remote teams have shared their experience with our app!.
                </CustomText>


                {reviewList.map((data, ind) =>
                    <ReviewCardWrapper
                        key={ind.toString()}
                        className={ind === 1 ? "overlay" : ind === 2 ? "overlay2" : ""}
                    >
                        <FlexedWrapper
                            width={'100%'}
                            direction='row'
                            align={'center'}
                            justify='space-between'
                            invert='column'
                        >
                            <StyledImg
                                img={data.icon}
                                size='20%'
                            />
                            <FlexedWrapper
                                direction='column'
                                width={'75%'}
                                justify='space-between'
                                align={'flex-start'}
                                swidth='100%'
                            >
                                <CustomText
                                    color={'#161C2D'}
                                    fontSize='1rem'
                                    fontWeight='200'
                                    style={{ textAlign: "left" }}
                                    padding='0px 0px 20px 0px'

                                >
                                    {data.content}
                                </CustomText>

                                <CustomText
                                    color={'#161C2D'}
                                    fontSize='0.8rem'
                                    fontWeight='200'
                                    style={{ opacity: 0.6, fontStyle: 'italic' }}
                                >
                                    {data.details}
                                </CustomText>
                            </FlexedWrapper>
                        </FlexedWrapper>
                    </ReviewCardWrapper>
                )}

                <FlexedWrapper
                    width={'100%'}
                    direction='row'
                    align={'center'}
                    justify='center'
                    style={{ cursor: 'pointer' }}
                    margin='0px 0px 10vh 0px'
                >

                    <CustomText
                        color='#E1EF1E'
                        fontSize='0.8rem'
                        fontWeight='200'
                        padding={'0px 5px 0px 0px'}
                    >
                        Read more reviews
                    </CustomText>

                    <StyledImg
                        img={TailRight}
                        size='25px'
                    />
                </FlexedWrapper>
            </Wrapper>
        </>
    )
}

export default Review;