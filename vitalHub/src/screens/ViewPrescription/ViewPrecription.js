import { Container } from "../../components/Container/Style"
import { SubTitle, Title } from "../../components/Title/Style"
import { UserPicture } from "../../components/UserPicture/Style"
import { ContainerSubTitle } from "./Style"

export const ViewPrescription = ({navigation}) => {
    return(
        <Container>
            <UserPicture source={require("../../assets/medico1.jpg")}/>
            <Title>Dr Claudio</Title>

            <ContainerSubTitle>
                <SubTitle>Cliníco geral</SubTitle>
            <SubTitle>CRM-15286</SubTitle>
            </ContainerSubTitle>
            
        </Container>
    )
}