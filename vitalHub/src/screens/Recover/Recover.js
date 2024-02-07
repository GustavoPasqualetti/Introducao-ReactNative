import { Button } from "../../components/Button/Style"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Styled"
import { Logo } from "../../components/Logo/Style"

import { Title } from "../../components/Title/Style"

export const Recover = ({navigation}) => {
    return(
        <Container>
            <Logo source={require('../../assets/logo.png')}/>

            <Title>Recuperar senha</Title>

            <TextAdd>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</TextAdd>

            <Input placeholder="Usuário ou E-mail"/>

            <Button>
                <ButtonTitle >CONTINUAR</ButtonTitle>
            </Button>
        </Container>
    )
}