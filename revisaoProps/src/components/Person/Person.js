import { StyleSheet, Text, View } from "react-native";
import { useFonts, CuteFont_400Regular } from '@expo-google-fonts/cute-font';

const Person = ({name, age}) => {
    let [fontsLoaded, fontError] = useFonts({
        CuteFont_400Regular,
      });
    
      if (!fontsLoaded && !fontError) {
        return null;
      }

    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Nome : {name}</Text>
            <Text style={styles.txt}>Idade: {age}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "yellow",
      paddind: 10,
      margin: 20,
      borderRadius: 5,
      borderColor: 'black',
      borderWidth: 3
    },
    txt: {
        color: 'black',
        marginLeft: 10,
        fontFamily: 'CuteFont_400Regular'
    }

  })

export default Person;
