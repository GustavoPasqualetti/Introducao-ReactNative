import { Camera, CameraType } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export default function App() {

  const [tipoCamera, setTipoCamera] = useState(Camera.Constants.Type.front)

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync()
    })();
  }, [])

  return (
    <View style={styles.container}>

      <Camera
        type={tipoCamera}
        style={styles.camera}
      >
        <View style={styles.viewFlip}>
          <TouchableOpacity style={styles.btnFlip} onPress={() => setTipoCamera(tipoCamera == CameraType.front ? CameraType.back : CameraType.front)}>
            <Text style={styles.txtFlip}>Trocar</Text>
          </TouchableOpacity>

        </View>
      </Camera>
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
  camera: {
    flex: 1,
    height: '80%',
    width: '100%',
  },
  viewFlip: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  btnFlip: {
    position: 'absolute',
    bottom: 80,
    left: 170
  },
  txtFlip: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }
});
