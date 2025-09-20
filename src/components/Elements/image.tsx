import React from "react";
import styled from "styled-components";

interface StyledImgProps {
  size?: string;
  img: string;
  zindex?: any;
  ssize?: string
}

const ImageWrapper = styled.img<{ $size?: string, zindex: any, ssize: string }>`
  object-fit: center;
  width: ${(props) => (props.$size ? props.$size : "100%")};
  z-index: ${(props)=> props.zindex ? props.zindex: ""};

  @media (max-width: 1040px){
  width: ${(props) => props.ssize ? props.ssize :""};
  }
`;

export const StyledImg: React.FC<StyledImgProps> = ({ size, img, zindex, ssize }) => {
  return <ImageWrapper $size={size} src={img} zindex={zindex} ssize={ssize as string} />;
};
