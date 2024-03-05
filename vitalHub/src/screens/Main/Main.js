import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeUser } from "../HomeUser/HomeUser"
import { Profile } from "../Profile/Profile"
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator()

export const Main = () => {
    return(
        <BottomTab.Navigator 
        initialRouteName="HomeUser"
        
        screenOptions={ ({route}) => ({
            tabBarStyle: {backgroundColor: "#FFFFFF", height: 80, paddingTop: 10},
            tabBarActiveBackgroundColor: 'transparent',
            tabBarShowLabel: false,
            headerShown: false,

            tabBarIcon: ({focused}) => {
                if( route.name === "HomeUser")
                {
                    return(
                        <>
                        </>
                    )
                }
            }
          })}>


            <BottomTab.Screen
            name="Home"
            component={HomeUser}
            />

            <BottomTab.Screen
            name="Profile"
            component={Profile}
            />
        </BottomTab.Navigator>
    )
}