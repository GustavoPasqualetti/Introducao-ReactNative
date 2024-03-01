import { BoxInput } from "../../components/BoxInput"
import { Container } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header"
import { SubTitle, Title } from "../../components/Title/Style"
import { ContainerAddress, ContainerLocal, LocalImage } from "./Style"

export const LocalAppointment = () => {
    return (
        <Container>
            <LocalImage source={require("../../assets/local.png")} />
            <ContainerLocal>
                <Title>Clínica Natureh</Title>
                <SubTitle>São Paulo, SP</SubTitle>
            </ContainerLocal>

            <BoxInput
                fieldWidht={80}
                textLabel='Endereco'
                placeholder='Rua Vicenso Silva, 987'
            />
            <ContainerAddress>
                <BoxInput
                    fieldWidht={35}
                    textLabel='Número'
                    placeholder='578'
                />

                <BoxInput
                    fieldWidht={35}
                    textLabel='Bairro'
                    placeholder='Moema-SP'
                />

            </ContainerAddress>

        </Container>
    )
}