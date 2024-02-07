import { Text } from "react-native"
import { Logo } from "../../components/Logo/Style"
import { Title } from "../../components/Title/Style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Styled"
import { Button } from "../../components/Button/Style"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { ContentAccount } from "../../components/ContentAccount/Style"
import { LinKCancel } from "../../components/Links/Style"
import { TextCreate } from "../../components/TextAdd/Style"

export const Account = ({navigation}) => {
    return (
        <Container>
            <Logo source={require('../../assets/logo.png')}/>

            <Title>Criar conta</Title>

            <TextCreate>Insira seu endereço de e-mail e senha para realizar seu cadastro.</TextCreate>

            <Input placeholder="Usuário ou E-mail"/>

            <Input placeholder="Senha"/>

            <Input placeholder="Confirmar senha"/>

            <Button>
                <ButtonTitle>CADASTRAR</ButtonTitle>
            </Button>

            <ContentAccount>
                <LinKCancel 
            onPress={() => navigation.navigate("Login")} title="login">Cancelar</LinKCancel>
            </ContentAccount>

        </Container>
    )
}