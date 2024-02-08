import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from './src/screens/Navigation/Navigation';
import { login, loginNav } from './src/screens/Login/Login';

const Stack = createNativeStackNavigator();

import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from "@expo-google-fonts/montserrat-alternates";
import { Quicksand_500Medium } from '@expo-google-fonts/quicksand';
import { Account } from './src/screens/Account/Account';
import { Recover } from './src/screens/Recover/Recover';
import { EmailCode } from './src/screens/EmailCode/EmailCode';
import { Reset } from './src/screens/Reset/Reset';
import { Profile } from './src/screens/Profile/Profile';



export default function App() {

  const[fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold, Quicksand_500Medium
  })

  if (!fontsLoaded && !fontsError) {
    return null
  }

  return (
 
    <NavigationContainer>

      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>

        <Stack.Screen 
        name='Navegacao'
        component={Navigation}
        options={{ title: 'Navegacao' }}
        />

        <Stack.Screen 
        name='Login'
        component={login}
        options={{ title: 'Login' }}        
        />

        <Stack.Screen 
        name='Account'
        component={Account}
        options={{ title: 'Account' }}        
        />

        <Stack.Screen 
        name='Recover'
        component={Recover}
        options={{ title: 'Recover' }}        
        /> 
        
        <Stack.Screen 
        name='EmailCode'
        component={EmailCode}
        options={{ title: 'EmailCode' }}        
        />   

        <Stack.Screen 
        name='Reset'
        component={Reset}
        options={{ title: 'Reset' }}        
        />  

        {/* <Stack.Screen 
        name='QueryDoctor'
        component={QueryDoctor}
        options={{ title: 'QueryDoctor' }}        
        />   */}

         <Stack.Screen 
        name='Profile'
        component={Profile}
        options={{ title: 'Profile' }}        
        />   
      </Stack.Navigator>

    </NavigationContainer>
  );
}

