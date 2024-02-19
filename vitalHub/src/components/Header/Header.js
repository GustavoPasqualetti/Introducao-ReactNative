import { ContainerHeader } from "../Container/Style"
import { NotiIcon } from "../Logo/Style"
import { BoxUser, DataUser, ImageUser, NameUser, TextDefaulte} from "./style"

export const Header = () => {
    return(

        <ContainerHeader>
            <BoxUser>
                <ImageUser source={require('../../assets/medico.png')}/>
                <DataUser>
                    <TextDefaulte>Bem vindo</TextDefaulte>
                    <NameUser>Dr Claudio</NameUser>
                </DataUser>
            </BoxUser>

            <NotiIcon source={require('../../assets/noti.png')}/>
        </ContainerHeader>
    )
}