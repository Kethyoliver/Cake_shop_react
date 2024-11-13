import { Camera, CameraType } from 'expo-camera/legacy';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Card } from 'react-native-paper'


export default function Index() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const cameraRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  if (!permission) {

    return <View />;
  }

  if (!permission.granted) {

    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Para fazer um lindo retrato, precisamos da sua permissão. Você pode nos permitir?</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  async function tirarFoto() {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log("Foto foi tirada!", photo.uri);
      setCapturedImage(photo.uri);
    }
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.CameraVirar} onPress={toggleCameraType}>
            <Ionicons name='reload' size={30} color='#fff'></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity style={styles.CameraBotao} onPress={tirarFoto}>
            <Ionicons name='camera' size={30} color='#fff'></Ionicons>
          </TouchableOpacity>
        </View>
      </Camera>
      <Card.Content>
        {
          capturedImage &&
          <View style={styles.fotoTirada}>
            <Image source={{ uri: capturedImage }} style={styles.foto}></Image>
            <TouchableOpacity  style={styles.botao} onPress={tirarFoto}>
              <Text style={styles.textoBotao}>Nova foto</Text>
            </TouchableOpacity>
          </View>
        }
      </Card.Content>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#C69286',
  },
  camera: {
    width: '90%',
    height: '45%',
    alignSelf: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  CameraVirar: {
    position: 'absolute',
    bottom: 10,
    left: 20,
  },
  CameraBotao: {
    position: 'absolute',
    bottom: 10,
    right: '10%',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  fotoTirada: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    borderRadius: '10',
    marginBottom: 10,
  },
  foto: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    borderRadius: '100',
  },
  botao: {
    backgroundColor: '#C7830D',
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
  },
});