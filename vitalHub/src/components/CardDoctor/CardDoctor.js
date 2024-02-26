import { SubTitle, Title } from "../Title/Style"
import { ContainerCardDoctor, ContentDoctor, DoctorInfo, ImageCardDoctor } from "./Style"

export const CardDoctor = ({
    imagem,
    nome,
    especialidade,
    foto
}) => {
    return (
        <ContainerCardDoctor>
            <ContentDoctor>

                <ImageCardDoctor source={foto} />

                <DoctorInfo>
                    <Title>{nome}</Title>
                    <SubTitle>{especialidade}</SubTitle>
                </DoctorInfo>


            </ContentDoctor>
        </ContainerCardDoctor>
    )
}