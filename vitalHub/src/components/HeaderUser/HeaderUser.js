import { ContainerHeader } from '../Container/Style'
import { BoxUser, DataUser, ImageUser, NameUser, TextDefaulte } from '../Header/style'
import { NotiIcon } from '../Logo/Style'

export const HeaderUser = () => {
    return(

        <ContainerHeader>
            <BoxUser>
                <ImageUser source={require('../../assets/paciente.png')}/>
                <DataUser>
                    <TextDefaulte>Bem vindo</TextDefaulte>
                    <NameUser>Richard Kosta</NameUser>
                </DataUser>
            </BoxUser>

            <NotiIcon source={require('../../assets/noti.png')}/>
        </ContainerHeader>
    )
}