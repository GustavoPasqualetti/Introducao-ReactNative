import styled from "styled-components";

//componente que contem a label e input
export const FieldContent = styled.View`

width: ${props => `${props.fieldWidht}%`};

gap: 10px;
`
//define o valor de largura como valor da props.fieldWidht