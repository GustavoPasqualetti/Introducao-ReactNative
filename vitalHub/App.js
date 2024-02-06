import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from './src/screens/Navigation/Navigation';
import { login, loginNav } from './src/screens/Login/Login';

const Stack = createNativeStackNavigator();

import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium } from "@expo-google-fonts/montserrat-alternates";

export default function App() {

  const[fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold, MontserratAlternates_500Medium,
  })

  if (!fontsLoaded && !fontsError) {
    return null
  }

  return (
 
    <NavigationContainer>

      <Stack.Navigator>

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
      </Stack.Navigator>

    </NavigationContainer>
  );
}

