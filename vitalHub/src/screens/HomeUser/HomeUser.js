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
import {  MakeAppointment } from "../../components/Button/Style"
import { ScheduleModal } from "../../components/ScheduleModal/SchedyleModal"
import { MenuBottom } from "../../components/MenuBottom/MenuBottom"
import { FontAwesome } from '@expo/vector-icons';


const Consultas = [
    { id: 1, nome: "DrClaudio", age: 31, hour:'10:00', reason:'Rotina', situacao: "pendente", imagem: require("../../assets/medico1.jpg") },
    { id: 2, nome: "DrCesar", age: 38, hour:'14:00', reason:'Rotina', situacao: "realizada", imagem: require("../../assets/medico2.jpg") },
    { id: 3, nome: "DrMarcio", age: 43, hour:'17:00', reason:'Rotina', situacao: "cancelada", imagem: require("../../assets/medico3.webp") },
    
]

export const HomeUser = ({navigation}) => {

    const [statusList, setStatusList] = useState("pendente")

    const [showModalCancel, setShowModalCancel] = useState(false)

    const [showModalAppointment, setShowModalAppointment] = useState(false)

    const [showModalSchedule, setShowModalSchedule] = useState(false)

    return(
        <Container>
            <Header name={"Gustavo"}
            ProfileImage={{uri: ('https://github.com/GustavoPasqualetti.png')}}
            />

            <CalendarHome/>

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
                            imagem={item.imagem}
                        />
                    )
                }
            />

            <MakeAppointment
            onPress={() => setShowModalSchedule(true)}
            >
                 <FontAwesome name="stethoscope" size={38} color="white" />
            </MakeAppointment>
           
            <MenuBottom/>

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
            
        </Container>
    )
}