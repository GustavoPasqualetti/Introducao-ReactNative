import { Modal } from "react-native"
import { Button, ButtonSecondary } from "../Button/Style"
import { ButtonTitle } from "../ButtonTitle/Style"
import { ContentModal, ViewModal } from "./style"
import { Title } from "../Title/Style"
import { TextAdd, TextModal } from "../TextAdd/Style"
import {  LinkModal } from "../Links/Style"



export const CancelModal = ({ visible, setShowModalCancel, ...rest }) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ViewModal>
                <ContentModal>
                    <Title>Cancelar consulta</Title>
                    <TextModal>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</TextModal>
                    
                    <Button>
                        <ButtonTitle>CONFIRMAR</ButtonTitle>
                    </Button>

                    <LinkModal onPress={() => setShowModalCancel(false)}>
                    Cancelar
                    </LinkModal>


                </ContentModal>
            </ViewModal>
        </Modal>
    )
}