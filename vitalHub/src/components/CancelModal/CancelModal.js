import { Modal } from "react-native"
import { Button, ButtonSecondary } from "../Button/Style"
import { ButtonTitle } from "../ButtonTitle/Style"
import { ContentModal, ViewModal } from "./style"
import { Title } from "../Title/Style"
import { TextAdd } from "../TextAdd/Style"
import { LinKCancel } from "../Links/Style"



export const CancelModal = ({ visible, setShowModalCancel, ...rest }) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ViewModal>
                <ContentModal>
                    <Title>Cancelar consulta</Title>
                    <TextAdd>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</TextAdd>

                    <Button>
                        <ButtonTitle>CONFIRMAR</ButtonTitle>
                    </Button>

                    <LinKCancel onPress={() => setShowModalCancel(false)}>
                        Cancelar
                    </LinKCancel>


                </ContentModal>
            </ViewModal>
        </Modal>
    )
}