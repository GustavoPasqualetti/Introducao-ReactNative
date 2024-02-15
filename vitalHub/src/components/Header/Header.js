import { ImageUser, Textdefault } from "./style"

export const Header = () => {
    return(

        <ContainerHeader>
            <BoxUser>
                <ImageUser/>
                <DataUser>
                    <Textdefault>Bem vindo!</Textdefault>
                    <NameUser>Dr Claudio</NameUser>
                </DataUser>
            </BoxUser>
        </ContainerHeader>
    )
}