import { ClinicBox, ContainerMenu, MenuBottomWrapper, MenuContent, ScheduleBox, TitleBoxSchedule, TitleBoxUser, UserBox } from "./Style"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export const MenuBottom = () => {
    return (

        <ContainerMenu>

            <ScheduleBox>
                <MaterialCommunityIcons name="calendar-check" size={24} color="#607EC5" />
                <TitleBoxSchedule>Agenda</TitleBoxSchedule>
            </ScheduleBox>

            <ClinicBox>
                <FontAwesome5 name="hospital" size={22} color="#4E4B59" />
                <TitleBoxUser>Clinicas</TitleBoxUser>
            </ClinicBox>

            <UserBox>
                <FontAwesome5 name="user-circle" size={22} color="#4E4B59" />
                <TitleBoxUser>Perfil</TitleBoxUser>
            </UserBox>

        </ContainerMenu >
    )
}