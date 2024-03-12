import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, LogBox, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  watchPositionAsync,
  LocationAccuracy
} from 'expo-location';
import { useEffect, useRef, useState } from 'react';
import { BoxMap } from './Box/Box';
import MapViewDirections from 'react-native-maps-directions';
import { mapskey } from './Utils/mapskey';

LogBox.ignoreLogs(['Warning: ...'])

export default function App() {
  const mapReference = useRef(null)
  const [initialPosition, setInitialPosition] = useState(null)
  const [finalPosition, setFinalPosition] = useState({
    latitude: -23.6503,
    longitude: -46.5640,
  })

  async function CapturarLocalizacao() {
    const { granted } = await requestForegroundPermissionsAsync()


    if (granted) {
      const captureLocation = await getCurrentPositionAsync()

      setInitialPosition(captureLocation)

      console.log(initialPosition);
    }
  }

  useEffect(() => {
    CapturarLocalizacao()

    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 10000,
      distanceInterval: 1
    }, async (response) => {
      await setInitialPosition(response)

      mapReference.current?.setCamera({
        pitch: 60,
        center: {
          latitude: initialPosition.coords.latitude,
          longitude: initialPosition.coords.longitude,
        }
      })
      
      console.log(response);
    })
  }, [1000])

  useEffect(() => {
    RecarregarVisualizacaoMapa()
  }, [initialPosition])

  async function RecarregarVisualizacaoMapa() {
    if (mapReference.current && initialPosition) {
      await mapReference.current.fitToCoordinates(
        [{ latitude: initialPosition.coords.latitude, longitude: initialPosition.coords.longitude },
        { latitude: finalPosition.latitude, longitude: finalPosition.longitude }],
        {
          edgePadding: { top: 60, right: 60, bottom: 60, left: 60 },
          animated: true
        }
      )
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Sua rota:</Text>
      <BoxMap>
        {
          initialPosition != null
            ? (
              <MapView

                ref={mapReference}

                style={styles.map}
                customMapStyle={grayMapStyle}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                  latitude: initialPosition.coords.latitude,

                  longitude: initialPosition.coords.longitude,

                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005,
                }}

              >
                <Marker
                  coordinate={{
                    latitude: initialPosition.coords.latitude,
                    longitude: initialPosition.coords.longitude
                  }}
                  title='Voce esta aqui'
                  description='Localizacao atual'
                  pinColor={'blue'}
                />

                <MapViewDirections
                  origin={initialPosition.coords}
                  destination={{
                    latitude: -23.6503,
                    longitude: -46.5640,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                  }}
                  apikey={mapskey}
                  strokeColor='yellow'
                  strokeWidth={7}
                />

                <Marker
                  coordinate={{
                    latitude: -23.6503,
                    longitude: -46.5640,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                  }}
                  title='Destino'
                  description='Rua Roseira'
                  pinColor={'red'}
                />
              </MapView>
            ) : (
              <>
                <Text>Localizacao nao encontrada</Text>

                <ActivityIndicator />
              </>
            )
        }
      </BoxMap>

      <Text style={styles.SubTitulo}>Boa viajem!</Text>

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

  map: {
    flex: 1,
    width: '80%',
    height: '60%'
  },

  texto: {
    fontSize: 18,
    fontWeight: '700'
  },

  SubTitulo: {
    marginTop: 50,
    fontWeight: '500',
    fontSize: 16
  }

});

const grayMapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#E1E0E7",
      },
    ],
  },
  {
    elementType: "geometry.fill",
    stylers: [
      {
        saturation: -5,
      },
      {
        lightness: -5,
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FBFBFB",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#33303E",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#66DA9F",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "white",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#00F5ED",
      },
    ],
  },
  {
    featureType: "road",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#C6C5CE",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FBFBFB",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#ACABB7",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#8C8A97",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#8C8A97",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#5DE3F5",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
]