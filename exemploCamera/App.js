import { Camera, CameraType, FlashMode } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const cameraRef = useRef(null)
  const [photo, setPhoto] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [tipoCamera, setTipoCamera] = useState(Camera.Constants.Type.front)
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off)

  async function CapturePhoto() {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync()
      setPhoto(photo.uri)

      setOpenModal(true)

      console.log(photo);
    }
  }

  async function ClearPhoto() {
    if (photo) {
      await MediaLibrary.deleteAssetsAsync([photo])
        .then(() => {
          alert('Foto apagada')
        }).catch(error => {
          alert('Erro ao apagar foto')
        })
    }
    setPhoto(null)
    
  }

  async function SavePhoto() {
    if (photo) {
      await MediaLibrary.createAssetAsync(photo)
        .then(() => {
          alert('Sucesso', 'foto salva na galeria')
        }).catch(error => {
          alert("Erro ao salvar foto")
        })
    }
  }

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync()

      const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync()
    })();
  }, [])

  return (
    <View style={styles.container}>

      <Camera
        ref={cameraRef}
        type={tipoCamera}
        flashMode={flashMode}
        style={styles.camera}
      >

      </Camera>

      <View style={styles.box}>

        <TouchableOpacity style={styles.btnFlip} onPress={() => setTipoCamera(tipoCamera == CameraType.front ? CameraType.back : CameraType.front)}>
          <FontAwesome6 name="camera-rotate" size={36} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCaptura} onPress={() => CapturePhoto()}>
          <FontAwesome name="camera" size={28} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnFlash} onPress={() => setFlashMode(flashMode == FlashMode.on ? FlashMode.off : FlashMode.on)}>
          <Ionicons name={flashMode === FlashMode.on ? "flash" : "flash-off"} size={24} color={flashMode === FlashMode.on ? "yellow" : "black"} />
        </TouchableOpacity>
      </View>



      <Modal
        animationType='slide'
        transparent={false}
        visible={openModal}
      >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 }}>
          <Image
            style={{ width: '100%', height: 500, borderRadius: 10 }}
            source={{ uri: photo }}
          />

          <View style={{ margin: 15, flexDirection: 'row' }}>
            <TouchableOpacity style={styles.btnCancel} onPress={() => ClearPhoto()}>
              <FontAwesome name='trash' size={40} color={'#ff0000'} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnUpload} onPress={() => SavePhoto()}>
              <FontAwesome name='save' size={40} color={'#121212'} />
            </TouchableOpacity>
          </View>

        </View>
      </Modal>

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
  btnFlip: {

    height: 80,
    width: 80,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnCaptura: {

    height: 70,
    width: 80,
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center'

  },
  btnFlash: {
    height: 80,
    width: 80,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 140,
    width: '100%',
    backgroundColor: '#d3d3d3',
    gap: 80
  },
  btnCancel: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'transparent',

    alignItems: 'center',
    justifyContent: 'center'
  },

  btnUpload: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'transparent',

    alignItems: 'center',
    justifyContent: 'center'
  }
});
