import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    //Navegacao

    //Container
    //StackNavigation
    //StackScreen

    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen/>
        name='Navegacao'

        component={Navegacao}

        options={{title: 'Navegacao'}}
      </Stack.Navigator>

    </NavigationContainer>
  );
}

