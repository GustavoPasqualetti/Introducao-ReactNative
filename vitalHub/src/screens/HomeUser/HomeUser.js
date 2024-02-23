import { CalendarHome } from "../../components/CalendarHome/CalendarHome"
import { Container } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header"
import { HeaderUser } from "../../components/HeaderUser/HeaderUser"

const Consultas = [
    { id: 1, nome: "DrClaudio", situacao: "pendente" },
    { id: 2, nome: "DrCesar", situacao: "realizada" },
    { id: 3, nome: "DrMarcio", situacao: "cancelada" },
    { id: 4, nome: "DrClaudio", situacao: "realizada" },
    { id: 5, nome: "DrCesar", situacao: "pendente" },
    { id: 6, nome: "DrMarcio", situacao: "realizada" }
]

export const HomeUser = () => {

    const [statusList, setStatusList] = useState("pendente")

    const [showModalCancel, setShowModalCancel] = useState(false)

    const [showModalAppointment, setShowModalAppointment] = useState(false)

    return(
        <Container>
            <HeaderUser/>

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
        </Container>
    )
}