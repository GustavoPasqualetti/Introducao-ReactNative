import { ButtonCard, ButtonText, ClockCard, ContainerCard, ContentCard, DateProfileCard, ImageCard, ProfileData, ProfileName, TextAge, TextBold, ViewRow } from "./Style"
import { AntDesign } from '@expo/vector-icons';

export const QueryCard = ({
    situacao = "pendente",
    onPressAppointment,
    onPressCancel
}) => {
    return (
        <ContainerCard>
            <ImageCard source={require('../../assets/niccole.png')} />

            <ContentCard>

                <DateProfileCard>

                    <ProfileName>Niccole</ProfileName>

                    <ProfileData>
                        <TextAge>45</TextAge>
                        <TextBold>Rotina</TextBold>
                    </ProfileData>

                </DateProfileCard>

                <ViewRow>
                    <ClockCard>
                        <AntDesign
                            name="clockcircle"
                            size={14}
                            color={situacao == "pendente" ? "498b3ba" : "8ca97"}
                        />
                        <TextBold
                            situacao={situacao} color={"#8c8a97"}
                        >
                            14:00</TextBold>
                    </ClockCard>
                    {
                        situacao == "cancelada" ? (
                            <>
                            </>
                        ) : situacao == "pendente" ? (
                            <ButtonCard onPress={onPressCancel}>
                                <ButtonText>Cancelar</ButtonText>
                            </ButtonCard>
                        ) : (
                            <ButtonCard onPress={onPressAppointment}>
                                <ButtonText>Ver Prontuario</ButtonText>
                            </ButtonCard>
                        )

                    }

                </ViewRow>

            </ContentCard>

        </ContainerCard>
    )
}