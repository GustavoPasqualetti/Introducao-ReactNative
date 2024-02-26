import styled, { css } from "styled-components";

export const ContainerCardClinic = styled.View`
width: 90%;
height: 90px;
background-color: #fff;
border: 2px solid #496BBA;
align-items: center;
justify-content: center;
gap: 5px;
margin: 0 auto;

margin-bottom: 20px;

${props => props.clickButton ? css`
    background-color: #496BBA;
  `: css`
    background-color: transparent;
    border: 2px solid #607ec5;
  `}
`

export const ClinicOpen = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;

`

export const TitleSchedule = styled.Text`
font-size: 14px;
color: #49B3BA;
font-family: Quicksand_600SemiBold;
`

export const Assessment = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;
`

export const TitleAssessment = styled.Text`
color: #F9A620;
font-size: 16px;
font-family: Quicksand_600SemiBold;
`

export const Part1 = styled.View`

flex-direction: row;
align-items: center;
justify-content: space-around;
width: 100%;

`

export const Part2 = styled.View`

justify-content: space-around;
align-items: center;
flex-direction: row;
width: 100%;

margin-bottom: 10px;
margin-right: 10px;
`