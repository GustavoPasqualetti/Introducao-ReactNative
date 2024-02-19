import { StatusBar } from "expo-status-bar"
import { Container } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header"
import { CalendarHome } from "../../components/CalendarHome/CalendarHome"
import { useState } from "react"
import { ButtonTabs } from "../../components/ButtonTabs/ButtonTabs"
import { ContainerAppointment } from "./Style"

const Consultas = [
    {id: 1, nome: "gustavo", situacao: "pendente"},
    {id: 2, nome: "gabriel", situacao: "realizado"},
    {id: 3, nome: "eduardo", situacao: "cancelado"},
    {id: 4, nome: "joao", situacao: "realizado"}
]

export const Home = () => {

    const[statusList, setStatusList] = useState("pendente")

    return(
        <Container>
            <StatusBar/>

            <Header/>

            <CalendarHome/>

            <ContainerAppointment>

                <ButtonTabs
                 textButton={'Pendente'}
                 clickButton={statusList === 'pendente'}
                 onPress={() => setStatusList('pendente')}
                />
                    
                <ButtonTabs
                textButton={'Realizadas'}
                clickButton={statusList === 'realizado'}
                onPress={() => setStatusList('realizado')}
                />

                <ButtonTabs
                 textButton={'Canceladas'}
                 clickButton={statusList === 'cancelado'}
                 onPress={() => setStatusList('cancelado')}
                />

            </ContainerAppointment>
        </Container>
    )
}