import { Modal } from "react-native"
import { ContentModal, ViewModal } from "../CancelModal/style"
import { Title } from "../Title/Style"
import { TextAdd, TextModal } from "../TextAdd/Style"
import { Button } from "../Button/Style"
import { ButtonTitle } from "../ButtonTitle/Style"
import { LinkModal } from "../Links/Style"
import { ModalImage } from "../UserPicture/Style"

export const AppointmentModal = ({ visible, setShowModalAppointment, ...rest }) => {
    return(
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ViewModal>
                <ContentModal>

                    <ModalImage
                    source={require('../../assets/niccole.png')}
                    />

                    <Title>Niccole Sarga</Title>

                    <TextModal>22 anos    niccole.sarga@gmail.com</TextModal>
                    

                    <Button>
                        <ButtonTitle>INSERIR PRONTUÁRIO</ButtonTitle>
                    </Button>

                    <LinkModal onPress={() => setShowModalAppointment(false)}>
                    Cancelar
                    </LinkModal>


                </ContentModal>
            </ViewModal>
        </Modal>
    )
}