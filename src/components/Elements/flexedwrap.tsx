import styled from "styled-components";


export const FlexedWrapper = styled.div<{ width: string, swidth?: string, direction: string, invert?: string, justify: string, align: string, margin?: string }>`
width: ${(props) => (props.width ? props.width : "100%")};
display:  flex;
flex-direction: ${(props) => props.direction ? props.direction : "row"};
justify-content: ${(props) => props.justify ? props.justify : "center"};
align-items: ${(props) => props.align ? props.align : "center"};
margin: ${(props) => props.margin ? props.margin : ""};

@media (max-width: 1040px){
flex-direction: ${(props)=> props.invert ? props.invert : props.direction};
width: ${(props)=> props.swidth ? props.swidth : ""};
}
`;