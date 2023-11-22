import React, {useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View className="flex flex-1">
      <MapView
        style={styles.map}
        initialRegion={region}
        showsUserLocation={true}
        provider={'google'}
        followsUserLocation={true}
        onRegionChangeComplete={setRegion}>
          <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            title={"Something"}
            description={"New location"}
          />
      </MapView>

      <View className="absolute bottom-7 border border-gray-400 rounded-sm bg-white p-2 left-5 right-5 ">
        <Text>Latitude: {region.latitude}</Text>
        <Text>Longitude: {region.longitude}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
