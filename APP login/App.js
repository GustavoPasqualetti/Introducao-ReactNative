import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
      source={require('./src/assets/teste.jpg')}
      style={styles.imagem}
      />
      
      <Text style={styles.titulo}>LOGIN</Text>

      <Text style={styles.labelemail}>Email:</Text>
      <TextInput
      style={styles.email}
      placeholder='Digite seu email'
      placeholderTextColor="white"
      />

      <Text style={styles.labelsenha}>Senha:</Text>
      <TextInput
      style={styles.senha}
      placeholder='Digite sua senha'
      placeholderTextColor="white"
      />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textobtn}>ENTRAR</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87ceeb',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
  imagem: {
    width: '65%',
    height: 200,
    marginBottom: 25
  },
  titulo: {
    fontSize: 30,
    height: 40,
    fontWeight: '700',
    marginBottom: 40,
  },
  email: {
    width: '80%',
    height: 45,
    borderWidth: 2,
    borderColor: 'black',
    paddingLeft: 20,
    backgroundColor: '#d3d3d3'
  },
  senha: {
    width: '80%',
    height: 45,
    borderWidth: 2,
    borderColor: 'black',
    paddingLeft: 20,
    backgroundColor: '#d3d3d3'
  },
  botao: {
    width: '60%',
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: '30',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 45,
    backgroundColor: '#e61919',
    marginBottom: 30
  },
  textobtn: {
    fontWeight: '700',
    color: 'black'
  },
  labelemail: {
    paddingRight:250,
    fontSize: 15,
    fontWeight: '600'
  },
  labelsenha: {
    paddingRight:250,
    fontSize: 15,
    fontWeight: '600'
  },
});
