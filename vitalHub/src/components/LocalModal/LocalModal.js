import { Modal } from "react-native"
import { ContentModal, ViewModal } from "../CancelModal/style"
import {  TextModal } from "../TextAdd/Style"
import { Button } from "../Button/Style"
import { ButtonTitle } from "../ButtonTitle/Style"
import { LinkModal } from "../Links/Style"
import { ModalImage } from "../UserPicture/Style"
import { Title } from "../Title/Style"

export const LocalModal = ({ navigation, appointmentData, visible, setShowModalLocal, ...rest }) => {

    // const { nome, age, imagem, email } = appointmentData || {};

    onPressHandler = () => {
        navigation.navigate("HomeUser")
        setShowModalLocal(false)
    }

    return(
        <Modal  {...rest} visible={visible} transparent={true} animationType="fade">
            <ViewModal>
                <ContentModal>

                    <ModalImage
                    source={require("../../assets/medico1.jpg")}
                    />

                    <Title>Clínica Natureh</Title>

                    <TextModal>Cliníco geral   CRM-15286</TextModal>

                    <Button >
                        <ButtonTitle>Ver local da consulta</ButtonTitle>
                    </Button>

                    <LinkModal onPress={() => {onPressHandler()}}>
                    Cancelar
                    </LinkModal>


                </ContentModal>
            </ViewModal>
        </Modal>
    )
}