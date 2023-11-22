import React, {useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';

const MARKERS = [
  {
    "city": "San Francisco",
    "country": "USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
    }
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "coordinates": {
      "latitude": -33.8688,
      "longitude": 151.2093
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "coordinates": {
      "latitude": 35.6895,
      "longitude": 139.6917
    }
  },
  {
    "city": "London",
    "country": "United Kingdom",
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    }
  },
  {
    "city": "New York City",
    "country": "USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.0060
    }
  },
  {
    "city": "Paris",
    "country": "France",
    "coordinates": {
      "latitude": 48.8566,
      "longitude": 2.3522
    }
  },
  {
    "city": "Rome",
    "country": "Italy",
    "coordinates": {
      "latitude": 41.9028,
      "longitude": 12.4964
    }
  },
  {
    "city": "Cape Town",
    "country": "South Africa",
    "coordinates": {
      "latitude": -33.9249,
      "longitude": 18.4241
    }
  },
  {
    "city": "Rio de Janeiro",
    "country": "Brazil",
    "coordinates": {
      "latitude": -22.9068,
      "longitude": -43.1729
    }
  },
  {
    "city": "Shanghai",
    "country": "China",
    "coordinates": {
      "latitude": 31.2304,
      "longitude": 121.4737
    }
  }
]

export default function App() {
  const [meetingPoint, setMeetingPoint] = useState({})
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
          title={"New York City"}
          description={"New York City"}
          pinColor={"purple"}
          draggable={true}
          onDragEnd={(e) => setMeetingPoint(e.nativeEvent.coordinate)}
        />

        {MARKERS.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinates}
            title={marker.city}
            description={marker.country}
          />
        ))}
      </MapView>

      <View className="absolute bottom-7 border border-gray-400 rounded-sm bg-white p-2 left-5 right-5 ">
        <Text>Meeting Point</Text>
        <Text>Latitude: {meetingPoint.latitude.toFixed(2)}</Text>
        <Text>Longitude: {meetingPoint.longitude.toFixed(2)}</Text>
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
