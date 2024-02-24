import { ContainerCard } from "../AppointmentCard/Style"
import { SubTitle, Title } from "../Title/Style"
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Assessment, ClinicOpen, ContainerCardClinic, Part1, Part2, TitleAssessment, TitleSchedule } from "./Style";

export const CardClinic = ({
    nome,
    endereco,
    avaliacao,
    funcionamento
}) => {
    return (
        <ContainerCardClinic>

            <Part1>
                <Title>{nome}</Title>
                <Assessment>
                    <AntDesign name="star" size={22} color="#F9A620" />
                    <TitleAssessment> {avaliacao}</TitleAssessment>
                </Assessment>
            </Part1>

            <Part2>
                <SubTitle>{endereco}</SubTitle>

                <ClinicOpen>
                    <Entypo name="calendar" size={16} color="#49B3BA" />
                    <TitleSchedule> {funcionamento}</TitleSchedule>
                </ClinicOpen>
            </Part2>

        </ContainerCardClinic>
    )
}