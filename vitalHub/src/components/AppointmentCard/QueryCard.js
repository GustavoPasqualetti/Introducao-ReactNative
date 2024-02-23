import { Elipse } from "../UserPicture/Style";
import { ButtonCard, ButtonText, ClockCard, ContainerCard, ContentCard, DateProfileCard, ImageCard, ProfileData, ProfileName, TextAge, TextBold, ViewRow } from "./Style"
import { AntDesign } from '@expo/vector-icons';

export const AppointmentCard = ({
    situacao = "pendente",
    onPressAppointment,
    onPressCancel, 
    name,
    age,
    reason,
    hour
}) => {
    return (
        <ContainerCard>
            <ImageCard source={require('../../assets/Splash2.png')} />

            <ContentCard>

                <DateProfileCard>

                    <ProfileName>{name}</ProfileName>

                    <ProfileData>
                        <TextAge>{age}</TextAge>
                        <Elipse source={require('../../assets/elipse.png')}/>
                        <TextBold>{reason}</TextBold>
                    </ProfileData>

                </DateProfileCard>

                <ViewRow>
                    <ClockCard situacao={situacao}>
                        <AntDesign
                            name="clockcircle"
                            size={14}
                            color={situacao == "pendente" ? '#49B3BA' : '4E4B59'}
                        />
                        <TextBold
                            situacao={situacao} 
                        >
                            {hour}</TextBold>
                    </ClockCard>
                    {
                        situacao == "cancelada" ? (
                            <>
                            </>
                        ) : situacao == "pendente" ? (
                            <ButtonCard onPress={onPressCancel}>
                                <ButtonText situacao={situacao}>Cancelar</ButtonText>
                            </ButtonCard>
                        ) : (
                            <ButtonCard onPress={onPressAppointment}>
                                <ButtonText situacao={situacao} >Ver Prontuario</ButtonText>
                            </ButtonCard>
                        )
                    }

                </ViewRow>

            </ContentCard>

        </ContainerCard>
    )
}