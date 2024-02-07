import { Button } from "../../components/Button/Style"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { Container, ContentVerify } from "../../components/Container/Style"
import { InputVerify } from "../../components/InputVerify/Style"
import { LinkResend } from "../../components/Links/Style"
import { Logo } from "../../components/Logo/Style"
import { TextAdd, TextUser, TextUserBlue } from "../../components/TextAdd/Style"
import { Title } from "../../components/Title/Style"

export const EmailCode = ({navigation}) => {
    return (
        <Container>
            <Logo source={require('../../assets/logo.png')} />

            <Title>Verifique seu e-mail</Title>


            <TextUser>Digite o código de 4 dígitos enviado para </TextUser>
            <TextUserBlue>username@email.com</TextUserBlue>

            <ContentVerify>

                <InputVerify />
                <InputVerify />
                <InputVerify />
                <InputVerify />

            </ContentVerify>
            
            <Button onPress={() => navigation.navigate("Reset")}>
                <ButtonTitle>ENTRAR</ButtonTitle>
            </Button>

            <LinkResend>Reenviar código</LinkResend>


        </Container>
    )
}