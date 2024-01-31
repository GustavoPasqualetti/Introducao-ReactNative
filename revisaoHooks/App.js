import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const[count, setCount] = useState(0)

  const incrementar = () => {
    setCount(count + 1)
  }

  const decrementar = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`)
  }, [count])
  
  return (
    <View style={styles.container}>
      
      <Text style = {styles.contador}>Contador: {count}</Text>
      <StatusBar style="auto" />

      <TouchableOpacity style={styles.botaoI} onPress={incrementar}>
        <Text style={styles.txt}>Incrementar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoD} onPress={decrementar}>
        <Text style={styles.txt}>Decrementar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C200EF',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  contador: {
    marginBottom: 50,
    borderWidth: 2,
    borderColor: 'color',
    backgroundColor: 'white',
    height: 50,
    width: 100,
    paddingLeft: 10,
    paddingTop: 15
  },
  botaoI: {
    height: 40,
    width: 130,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0EEA00',
  },
  botaoD: {
    height: 40,
    width: 130,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EF1400',
  },
  txt: {
   color: 'black',
   fontSize: 20,
   fontWeight: '600'
  }
});
