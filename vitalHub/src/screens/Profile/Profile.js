
import { ContainerProfile, ContainerScroll } from "../../components/Container/Style"
import { TextAdd } from "../../components/TextAdd/Style"
import { Title } from "../../components/Title/Style"
import { UserPicture } from "../../components/UserPicture/Style"

export const Profile = () => {
    return (
        <ContainerScroll>
            <UserPicture source={require('../../assets/paciente.png')} />
            <ContainerProfile>
                <Title>Richard Kosta</Title>
                <TextAdd>22 anos      richard.kosta@gmail.com</TextAdd>

                {/* <BoxInput></BoxInput> */}
                
            </ContainerProfile>
        </ContainerScroll>
    )
}