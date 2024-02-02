import { HeaderContainer, HeaderContent, TextHeader } from "./styles";

export function Header() {
    return(

        // HeaderContainer - View
        // HeaderContent - SafeAreaView
        // HeaderText - text

        <HeaderContainer>
            <HeaderContent>
                <TextHeader>Consumo da API ViaCep</TextHeader>
            </HeaderContent>
        </HeaderContainer>
    )
}