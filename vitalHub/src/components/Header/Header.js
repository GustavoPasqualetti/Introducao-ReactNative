import { ContainerHeader } from "../Container/Style"
import { NotiIcon } from "../Logo/Style"
import { BoxUser, DataUser, ImageUser, NameUser, TextDefaulte} from "./style"

export const Header = ({name,ProfileImage }) => {
    return(

        <ContainerHeader>
            <BoxUser>
                
                <ImageUser source={ProfileImage}/>
                <DataUser>
                    <TextDefaulte>Bem vindo</TextDefaulte>
                    <NameUser>{name}</NameUser>
                </DataUser>
            </BoxUser>

            <NotiIcon source={require('../../assets/noti.png')}/>
        </ContainerHeader>
    )
}