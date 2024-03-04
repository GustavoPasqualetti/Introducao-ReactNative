import { BoxImage } from "../../components/BoxImage/BoxImage"
import { BoxInput } from "../../components/BoxInput"
import { InputText } from "../../components/BoxInput/style"
import { Button } from "../../components/Button/Style"
import { Container, ContainerScroll } from "../../components/Container/Style"
import { CancelAppointment } from "../../components/Links/Style"
import { SubTitle, TitleC } from "../../components/Title/Style"
import { UserPicture } from "../../components/UserPicture/Style"
import { ContainerPrescription, ContainerSubTitle, Line } from "./Style"

export const ViewPrescription = ({ navigation }) => {
    return (
        <ContainerScroll>
            <Container>
                <UserPicture source={require("../../assets/medico1.jpg")} />
                <TitleC>Dr Claudio</TitleC>

                <ContainerSubTitle>
                    <SubTitle>Cliníco geral</SubTitle>
                    <SubTitle>CRM-15286</SubTitle>
                </ContainerSubTitle>

                <BoxInput
                    fieldWidht={80}
                    textLabel={'Descrição da consulta'}
                    placeholder='O paciente possuí uma infecção no
                ouvido. Necessário repouse de 2 dias
                e acompanhamento médico constante'
                    multiline={true}
                    fieldHeight={120}

                />
                <BoxInput
                    fieldWidht={80}
                    textLabel={'Diagnóstico do paciente'}
                    placeholder={'Infecção no ouvido'}
                    multiline={true}
                />
                <BoxInput
                    fieldWidht={80}
                    textLabel={'Prescrição médica'}
                    placeholder='Medicamento: Advil
                Dosagem: 50 mg
                Frequência: 3 vezes ao dia
                Duração: 3 dias'
                    multiline={true}
                    fieldHeight={120}
                />

                <BoxImage />

                <Line />

                <InputText
                    fieldWidht={80}
                    fieldHeight={80}
                    placeholder='Resultado do exame de sangue : tudo normal'
                    multiline={true}
                />

                <CancelAppointment onPress={() => navigation.navigate("HomeUser")}>
                    Voltar
                </CancelAppointment>

            </Container>
        </ContainerScroll>
    )
}