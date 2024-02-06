import { Text, View } from "react-native"
import { Container } from "../../components/Container/Style"
import { Logo } from "../../components/Logo/Style"
import { Title } from "../../components/Title/Style"
import { Input } from "../../components/Input/Styled"
import { LinkMedium } from "../../components/Links/Style"

export const login = () => {
    return(
        <Container>
            <Logo source={require('../../assets/logo.png')}/>

             <Title>Entrar ou criar conta</Title>

            <Input placeholder="Usuário ou E-mail"/>
            
            <Input placeholder="Senha" 
            secureTextEntry='true'
            />

            <LinkMedium>Esqueceu sua senha?</LinkMedium>

            {/* <Button>
                <ButtonTitle></ButtonTitle>
            </Button>

            <ButtonGoogle>
                <ButtonTitleGoogle></ButtonTitleGoogle>
            </ButtonGoogle>

            <ContainerAccount>
                <TextAccount></TextAccount>
            </ContainerAccount>   */}

        </Container>
    )
}