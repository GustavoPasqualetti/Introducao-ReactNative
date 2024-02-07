import styled from "styled-components";

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#34899f'
})`
width: 90%;
height: 53px;
padding: 16px;
margin-top: 15px;

border: 2px solid #49b3ba;
border-radius: 5px;
font-size: 14px;
font-family: 'MontserratAlternates_600SemiBold';
`

export const InputVerify = styled.TextInput`
width: 65px;
height: 62;
border: 2px solid #49b3ba;
border-radius: 5px;
font-size: 14px;
`