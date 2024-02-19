import { CardText } from "../TextAdd/Style"
import { ImageCard } from "../UserPicture/Style"
import { ContainerCard } from "./Style"

export const QueryCard = () => {
return(
    <ContainerCard>
        <ImageCard source={require('../../assets/niccole.png')}/>
        {/* <BoxCard>

        </BoxCard> */}
        <CardText>
            Cancelar
        </CardText>
    </ContainerCard>
)
}