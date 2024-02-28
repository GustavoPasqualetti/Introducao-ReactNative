import { ScrollView } from "react-native"
import { Button } from "../../components/Button/Style"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { CardDoctor } from "../../components/CardDoctor/CardDoctor"
import { Container } from "../../components/Container/Style"
import { TitleB } from "../../components/Title/Style"
import { CancelAppointment } from "../../components/Links/Style"

const Medicos = [
    { id: 1, nome: "Gustavo", especialidade: "Odontologista", foto: {uri: ('https://github.com/GustavoPasqualetti.png')} },
    { id: 2, nome: "Eduardo", especialidade: "Cardiologista", foto: {uri: ('https://github.com/EduardoPasqualetti.png')} },
    { id: 3, nome: "Ana", especialidade: "Pediatra", foto: require("../../assets/ana.jpg") }
]

export const SelectDoctor = ({ navigation }) => {
    return (
        <Container>
            <TitleB>Selecionar médico</TitleB>

            <ScrollView>
                {Medicos.map(medico => (
                    <CardDoctor
                        nome={medico.nome}
                        especialidade={medico.especialidade}
                        foto={medico.foto}
                    />
                ))}
            </ScrollView>


            <Button onPress={() => navigation.navigate("SelectDate")}>
                <ButtonTitle>
                    CONTINUAR
                </ButtonTitle>
            </Button>

            <CancelAppointment onPress={() => navigation.navigate("HomeUser")}>Cancelar</CancelAppointment>

        </Container>
    )
}