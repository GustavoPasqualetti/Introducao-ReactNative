import { StatusBar } from "expo-status-bar"
import { Container } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header"
import { CalendarHome } from "../../components/CalendarHome/CalendarHome"
import { useState } from "react"
import { ButtonTabs } from "../../components/ButtonTabs/ButtonTabs"
import { ContainerAppointment } from "./Style"
import { AppointmentCard, QueryCard } from "../../components/AppointmentCard/QueryCard"
import { ListComponent } from "../../components/List/List"
import { CancelModal } from "../../components/CancelModal/CancelModal"

const Consultas = [
    { id: 1, nome: "gustavo", situacao: "pendente" },
    { id: 2, nome: "gabriel", situacao: "realizada" },
    { id: 3, nome: "eduardo", situacao: "cancelada" },
    { id: 4, nome: "joao", situacao: "realizada" },
    { id: 5, nome: "marcelo", situacao: "pendente" },
    { id: 6, nome: "rubens", situacao: "realizada" }
]

export const Home = () => {

    const [statusList, setStatusList] = useState("pendente")

    const [showModalCancel, setShowModalCancel] = useState(false)

    const [showModalAppointment, setShowModalAppoointment] = useState(false)

    return (
        <Container>
            <StatusBar />

            <Header />

            <CalendarHome />

            <ContainerAppointment>

                <ButtonTabs
                    textButton={'Pendentes'}
                    clickButton={statusList === 'pendente'}
                    onPress={() => setStatusList('pendente')}
                />

                <ButtonTabs
                    textButton={'Realizadas'}
                    clickButton={statusList === 'realizada'}
                    onPress={() => setStatusList('realizada')}
                />

                <ButtonTabs
                    textButton={'Canceladas'}
                    clickButton={statusList === 'cancelada'}
                    onPress={() => setStatusList('cancelada')}
                />

            </ContainerAppointment>

            <ListComponent
                data={Consultas}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) =>
                    statusList == item.situacao && (
                        <AppointmentCard
                            situacao={item.situacao}
                            onPressAppointment={() => setShowModalAppoointment(true)}
                            onPressCancel={() => setShowModalCancel(true)}
                        />
                    )
                }
            />

            <CancelModal
            visible={showModalCancel}
            />
        </Container>
    )
}