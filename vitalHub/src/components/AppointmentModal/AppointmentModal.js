import { Modal } from "react-native"
import { ContentModal, ViewModal } from "../CancelModal/style"
import { Title } from "../Title/Style"
import {  TextModal } from "../TextAdd/Style"
import { Button } from "../Button/Style"
import { ButtonTitle } from "../ButtonTitle/Style"
import { LinkModal } from "../Links/Style"
import { ModalImage } from "../UserPicture/Style"

export const AppointmentModal = ({name, age, visible, setShowModalAppointment, ...rest }) => {
    return(
        <Modal  {...rest} visible={visible} transparent={true} animationType="fade">
            <ViewModal>
                <ContentModal>

                    <ModalImage
                    source={require('../../assets/Splash2.png')}
                    />

                    <Title>{name}</Title>

                    <TextModal>{age}    {name}@gmail.com</TextModal>
                    

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