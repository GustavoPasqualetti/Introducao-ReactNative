import styled from "styled-components"

export const FieldContent = styled.View`

width: ${props => `${props.fieldWidht}%`};


gap: 10px;
`


export const InputText = styled.TextInput`
width: ${props => `${props.fieldWidht}%`};
height: ${props => `${props.fieldHeight}px`};
background-color: #F5F3F3;
font-size: 14px;
font-family: MontserratAlternates_500Medium;
border-radius: 10px;
padding: 20px;

`
