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
import { AppointmentModal } from "../../components/AppointmentModal/AppointmentModal"

const Consultas = [
    { id: 1, nome: "gustavo", age: 18, hour:'14:00', reason:'Rotina', situacao: "pendente" },
    { id: 2, nome: "gabriel", age: 20, hour:'15:00', reason:'Rotina', situacao: "realizada" },
    { id: 3, nome: "eduardo", age: 18, hour:'16:00', reason:'Rotina', situacao: "cancelada" },
    { id: 4, nome: "joao", age: 19, hour:'17:00', reason:'Rotina', situacao: "realizada" },
    { id: 5, nome: "marcelo", age: 22, hour:'18:00', reason:'Rotina', situacao: "pendente" },
    { id: 6, nome: "rubens", age: 21, hour:'13:00', reason:'Rotina', situacao: "realizada" }
]

export const Home = () => {

    const [statusList, setStatusList] = useState("pendente")

    const [showModalCancel, setShowModalCancel] = useState(false)

    const [showModalAppointment, setShowModalAppointment] = useState(false)

    return (
        <Container>
            <StatusBar />

            <Header 
            name={"Dr Eduardo"} 
            ProfileImage={{uri: ('https://github.com/EduardoPasqualetti.png')}}
            
            />

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
                            onPressAppointment={() => setShowModalAppointment(true)}
                            onPressCancel={() => setShowModalCancel(true)}
                            name={item.nome}
                            age={item.age}
                            reason={item.reason}
                            hour={item.hour}
                        />
                    )
                }
            />

            <CancelModal
            visible={showModalCancel}
            setShowModalCancel={setShowModalCancel}
            />
            <AppointmentModal
            visible={showModalAppointment}
            setShowModalAppointment={setShowModalAppointment}
            />
        </Container>
    )
}