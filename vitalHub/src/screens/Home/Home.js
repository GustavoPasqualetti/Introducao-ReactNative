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
import { MenuBottom } from "../../components/MenuBottom/MenuBottom"

const Consultas = [
    { id: 1, nome: "gustavo", age: 18, hour:'14:00', reason:'Rotina', situacao: "pendente", imagem: {uri: ('https://github.com/GustavoPasqualetti.png')}, email:"gustavopasqualetti@gmail.com"},
    { id: 2, nome: "Joao Vitor", age: 20, hour:'15:00', reason:'Rotina', situacao: "realizada", imagem: {uri: ("https://github.com/zAlves31.png")}, email:"joaovitoralves@gmail.com" },
    { id: 3, nome: "eduardo", age: 18, hour:'16:00', reason:'Rotina', situacao: "realizada", imagem: {uri: ('https://github.com/EduardoPasqualetti.png')}, email:"eduardopasqualetti@gmail.com" },
   ]

export const Home = ({navigation}) => {

    const [statusList, setStatusList] = useState("pendente")

    const [showModalCancel, setShowModalCancel] = useState(false)

    const [showModalAppointment, setShowModalAppointment] = useState(false)

    const [selectedAppointment, setSelectedAppointment] = useState(null);

    return (
        <Container>
            <StatusBar />

            <Header 
            name={"Dr Claudio"} 
            ProfileImage={require("../../assets/medico1.jpg")}
            
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
                            onPressAppointment={() => {
                                setSelectedAppointment(item); 
                                setShowModalAppointment(true);
                            }}
                            onPressCancel={() => setShowModalCancel(true)}
                            name={item.nome}
                            age={item.age}
                            reason={item.reason}
                            hour={item.hour}
                            imagem={item.imagem}
                        />
                    )
                }
            />

            <MenuBottom/>

            <CancelModal
            visible={showModalCancel}
            setShowModalCancel={setShowModalCancel}
            />
            <AppointmentModal
            visible={showModalAppointment}
            setShowModalAppointment={setShowModalAppointment}
            appointmentData={selectedAppointment}
            navigation={navigation}
            />
        </Container>
    )
}