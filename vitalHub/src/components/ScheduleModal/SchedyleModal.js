import { Modal } from "react-native"
import { Button } from "../Button/Style"
import { ButtonTitle } from "../ButtonTitle/Style"
import { ContentModal, ViewModal } from "../CancelModal/style"
import { LinkModal } from "../Links/Style"

export const ScheduleModal = ({ visible, setShowModalSchedule, ...rest }) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ViewModal>
                <ContentModal>
                    <Button>
                        <ButtonTitle >
                            CONTINUAR
                        </ButtonTitle>
                    </Button>

                    <LinkModal onPress={() => setShowModalSchedule(false)}>
                        Cancelar
                    </LinkModal>
                </ContentModal>
            </ViewModal>
        </Modal>
    )
}