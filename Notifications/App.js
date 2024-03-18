import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Notifications from "expo-notifications"
import { Asset } from 'expo-asset';

Notifications.requestPermissionsAsync(
Notifications.setNotificationHandler({
  handleNotification : async () => ({
    shouldShowAlert: true,
    
    shouldPlaySound: true,

    shouldSetBadge: true
  })
})
)

export default function App() {
  const handleCallNotification = async () => {
    const {status} = await Notifications.getPermissionsAsync()

    if(status !== "granted") {
      alert("Voce nao deixou as notificacoes ativas")
      return
    }
    
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "HelloWorld",
        body: "Criando uma POC para implementar expo notifications",
        sound: 'default',
      },
      trigger: null
    })

  }

  return (
    <View style={styles.container}>
     <TouchableOpacity style={styles.btnNotification} onPress={handleCallNotification}>
      <Text style={styles.btnText}>Enviar notificacao</Text>
     </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  btnNotification: {
    width: 200,
    height: 120,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 18
  }
});
