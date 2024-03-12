import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync
} from 'expo-location';

import { useEffect, useState } from 'react';
import { BoxMap } from './Box/Box';

import MapViewDirections from 'react-native-maps-directions';
import { mapskey } from './Utils/mapskey';

export default function App() {
  const [initialPosition, setInitialPosition] = useState(null)

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
  }, [1000])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <BoxMap>
        {
          initialPosition != null
            ? (
              <MapView
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
                  title='Position'
                  description='Posicao atual'
                  pinColor={'green'}
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
                  title='Position'
                  description='Posicao atual'
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