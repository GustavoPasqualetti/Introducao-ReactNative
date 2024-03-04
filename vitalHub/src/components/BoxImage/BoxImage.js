import { BoxInput } from "../BoxInput"
import { Container } from "../Container/Style"
import { BoxPrescription, ButtonCancel, ButtonUpload, ContentUpload, TextBox, TextBox2, TextCancel, TitleBox } from "./Style"
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const BoxImage = () => {
    return (
        <Container>
            <TitleBox>Exames médicos</TitleBox>

            <BoxPrescription>
                <AntDesign name="upload" size={20} color="#4E4B59" />
                <TextBox>Nenhuma foto informada</TextBox>
            </BoxPrescription>

            <ContentUpload>
                <ButtonUpload>
                    <MaterialCommunityIcons name="camera-plus-outline" size={22} color="white" />
                    <TextBox2>Enviar</TextBox2>
                </ButtonUpload>
                <ButtonCancel>
                    <TextCancel>Cancelar</TextCancel>
                </ButtonCancel>
            </ContentUpload>

        </Container>
    )
}