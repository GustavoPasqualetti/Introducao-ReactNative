import { Modal } from "react-native"
import { ContentModal, ViewModal } from "../CancelModal/style"
import { SubTitle, Title } from "../Title/Style"
import { LabelSchedule } from "../ScheduleModal/Style"
import { BoxSchedule, CancelSchedule, SubTitleSchedule } from "./Style"
import { Button } from "../Button/Style"
import { ButtonTitle } from "../ButtonTitle/Style"
import { CancelAppointment } from "../Links/Style"

export const SummaryScheduleModal = ({
    visible, setShowModalSummary, ...rest
}) => {



    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ViewModal>
                <ContentModal>
                    <Title>Agendar Consulta</Title>
                    <SubTitleSchedule>Consulte os dados selecionados para a sua consulta</SubTitleSchedule>

                    <BoxSchedule>
                        <LabelSchedule>Data da consulta</LabelSchedule>
                        <SubTitle>1 de Novembro de 2023</SubTitle>
                    </BoxSchedule>
                    <BoxSchedule>
                        <LabelSchedule>Médico(a) da consulta</LabelSchedule>
                        <SubTitle>Dra Alessandra</SubTitle>
                        <SubTitle>Demartologa, Esteticista</SubTitle>
                    </BoxSchedule>
                    <BoxSchedule>
                        <LabelSchedule>Local da consulta</LabelSchedule>
                        <SubTitle>São Paulo, SP</SubTitle>
                    </BoxSchedule>
                    <BoxSchedule>
                        <LabelSchedule>Tipo da consulta</LabelSchedule>
                        <SubTitle>Rotina</SubTitle>
                    </BoxSchedule>

                    <Button>
                        <ButtonTitle>
                            CONFIRMAR
                        </ButtonTitle>
                    </Button>

                    <CancelSchedule>Cancelar</CancelSchedule>


                </ContentModal>
            </ViewModal>
        </Modal>
    )
}