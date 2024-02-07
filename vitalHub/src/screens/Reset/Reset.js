import { Button } from "../../components/Button/Style"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Styled"
import { Logo } from "../../components/Logo/Style"
import { TextAdd } from "../../components/TextAdd/Style"
import { Title } from "../../components/Title/Style"

export const Reset = ({navigation}) => {
    return (
        <Container>
            <Logo source={require('../../assets/logo.png')} />

            <Title>Redefinir senha</Title>

            <TextAdd>Insira e confirme a sua nova senha</TextAdd>

            <Input placeholder="Nova senha" />

            <Input placeholder="Confirmar nova senha" />

            <Button onPress={() => navigation.navigate("Login")}>
                <ButtonTitle>
                    Confirmar nova senha
                </ButtonTitle>
            </Button>

        </Container>
    )
}
