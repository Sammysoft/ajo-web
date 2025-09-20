import styled from "styled-components";

export const CustomButton = styled.div<{ width?: string, bgcolor?: string, color?: string }>`
width: ${(props) => props.width ? props.width : "fit-content"};
border-radius: 10px;
background-color: ${(props) => props.bgcolor ? props.bgcolor : "#ffffff"};
text-align: center;
padding: 10px;
font-size: 0.8rem;
color: ${(props) => props.color ? props.color : ""};
cursor: pointer;

@media (max-width: 1040px){
width: fit-content;
}
`;