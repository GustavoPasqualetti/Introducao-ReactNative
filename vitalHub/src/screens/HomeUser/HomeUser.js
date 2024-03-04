import { useState } from "react"
import { CalendarHome } from "../../components/CalendarHome/CalendarHome"
import { Container } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header"
import { ContainerAppointment } from "../Home/Style"
import { ButtonTabs } from "../../components/ButtonTabs/ButtonTabs"
import { ListComponent } from "../../components/List/List"
import { AppointmentCard } from "../../components/AppointmentCard/QueryCard"
import { CancelModal } from "../../components/CancelModal/CancelModal"
import { AppointmentModal } from "../../components/AppointmentModal/AppointmentModal"
import { MakeAppointment } from "../../components/Button/Style"
import { ScheduleModal } from "../../components/ScheduleModal/SchedyleModal"
import { MenuBottom } from "../../components/MenuBottom/MenuBottom"
import { FontAwesome } from '@expo/vector-icons';
import { LocalModal } from "../../components/LocalModal/LocalModal"


const Consultas = [
    { id: 1, nome: "DrClaudio", crm: "13456", especialidade: "Clinico Geral", age: 52, hour: '10:00', reason: 'Rotina', situacao: "pendente", imagem: require("../../assets/medico1.jpg") },
    { id: 2, nome: "DrCesar", crm: "12690", especialidade: "Ortopedista", age: 35, hour: '14:00', reason: 'Rotina', situacao: "realizada", imagem: require("../../assets/medico2.jpg") },
    { id: 3, nome: "DrMarcio", crm: "26647", especialidade: "Cardiologista", age: 43, hour: '17:00', reason: 'Rotina', situacao: "cancelada", imagem: require("../../assets/medico3.webp") },
    { id: 4, nome: "DrAndre", crm: "21589", especialidade: "Clinico Geral", age: 52, hour: '10:00', reason: 'Rotina', situacao: "pendente", imagem: require("../../assets/medico4.jpg") }
]

export const HomeUser = ({ navigation }) => {

    const [statusList, setStatusList] = useState("pendente")

    const [showModalCancel, setShowModalCancel] = useState(false)

    const [showModalAppointment, setShowModalAppointment] = useState(false)

    const [showModalSchedule, setShowModalSchedule] = useState(false)

    const [showModalLocal, setShowModalLocal] = useState(false)

    const [selectedAppointment, setSelectedAppointment] = useState(null);

    return (
        <Container>
            <Header name={"Gustavo"}
                ProfileImage={{ uri: ('https://github.com/GustavoPasqualetti.png') }}
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
                            onPressLocal={() => {
                                setShowModalLocal(true)
                                setSelectedAppointment(item); 
                            } }
                            name={item.nome}
                            especialidade={item.especialidade}
                            imagem={item.imagem}
                            crm={item.crm}
                            age={item.age}
                            reason={item.reason}
                            hour={item.hour}
                        />
                    )
                }
            />

            <MakeAppointment
                onPress={() => setShowModalSchedule(true)}
            >
                <FontAwesome name="stethoscope" size={38} color="white" />
            </MakeAppointment>

            <MenuBottom 
            navigation={navigation}
            />

            <CancelModal
                visible={showModalCancel}
                setShowModalCancel={setShowModalCancel}
            />
            <AppointmentModal
                visible={showModalAppointment}
                setShowModalAppointment={setShowModalAppointment}
            />
            <ScheduleModal
                visible={showModalSchedule}
                navigation={navigation}
                setShowModalSchedule={setShowModalSchedule}
            />
            <LocalModal
                visible={showModalLocal}
                navigation={navigation}
                setShowModalLocal={setShowModalLocal}
                appointmentData={selectedAppointment}
            />

        </Container>
    )
}