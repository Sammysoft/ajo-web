import styled from "styled-components";

export const CustomText = styled.div<{
    fontWeight?: string,
    fontSize?: string,
    color?: string,
    width?: string,
    padding?: string,
    ssize?: string,
    swidth?: string,
    spadding?: string
}>`
width: ${(props) => props.width ? props.width : "fit-content"};
font-weight: ${(props) => props.fontWeight ? props.fontWeight : ""};
font-size: ${(props) => props.fontSize ? props.fontSize : ""};
color: ${(props) => props.color ? props.color : ""};
padding: ${(props) => props.padding ? props.padding : ""};

@media (max-width: 1040px){
font-size: ${(props) => props.ssize ? props.ssize :""};
width: ${(props)=> props.swidth? props.swidth :""};
padding: ${(props) => props.spadding ? props.spadding: ""};
}
`;