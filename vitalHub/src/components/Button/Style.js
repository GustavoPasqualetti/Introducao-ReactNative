import styled from "styled-components";

export const Button = styled.TouchableOpacity`
width: 90%;
height: 53px;
padding: 16px;

border-radius: 5px;
background-color: #496BBA;
border: 2px solid #496BBA;
align-items: center;
margin-top: 50;
`

export const ButtonGoogle = styled(Button)`
border-radius: 5px;
background-color: #FAFAFA;

gap: 30;
justify-content: center ;
align-items: center;
flex-direction: row;

margin-top: 15px;
`
