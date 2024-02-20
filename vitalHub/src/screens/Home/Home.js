import { StatusBar } from "expo-status-bar"
import { Container } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header"
import { CalendarHome } from "../../components/CalendarHome/CalendarHome"
import { useState } from "react"
import { ButtonTabs } from "../../components/ButtonTabs/ButtonTabs"
import { ContainerAppointment } from "./Style"
import { QueryCard } from "../../components/QueryCard/QueryCard"
import { ListComponent } from "../../components/List/List"

const Consultas = [
    { id: 1, nome: "gustavo", situacao: "pendente" },
    { id: 2, nome: "gabriel", situacao: "realizada" },
    { id: 3, nome: "eduardo", situacao: "cancelada" },
    { id: 4, nome: "joao", situacao: "realizada" }
]

export const Home = () => {

    const [statusList, setStatusList] = useState("pendente")

    return (
        <Container>
            <StatusBar />

            <Header />

            <CalendarHome />

            <ContainerAppointment>

                <ButtonTabs
                    textButton={'pendente'}
                    clickButton={statusList === 'pendente'}
                    onPress={() => setStatusList('pendente')}
                />

                <ButtonTabs
                    textButton={'realizada'}
                    clickButton={statusList === 'realizada'}
                    onPress={() => setStatusList('realizada')}
                />

                <ButtonTabs
                    textButton={'cancelada'}
                    clickButton={statusList === 'cancelada'}
                    onPress={() => setStatusList('cancelada')}
                />

            </ContainerAppointment>

            <ListComponent
                data={Consultas}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) =>
                    statusList == item.situacao && (
                        <QueryCard 
                        situacao={item.situacao}
                        />
                    )
                }
            />

          


        </Container>
    )
}