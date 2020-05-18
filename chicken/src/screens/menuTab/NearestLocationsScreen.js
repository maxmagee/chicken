import React, { Component } from 'react';
import { View } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import EStyleSheet from 'react-native-extended-stylesheet';

import { addDistanceToEachLocation, getLocationsWithinRadius } from '../../helpers/locations';

class NearestLocationsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: {
        latitude: 37.78825,
        longitude: -122.4324
      },
      locations: [],
      region: this.getInitialRegion()
    };
  }

  async componentDidMount() {
    await this.getLocationAsync();
    this.getNearestLocations();
    //this.map.fitToElements(true);
  }

  componentDidUpdate() {
    const coordinatesToFit = this.state.locations.map(location => location);
    coordinatesToFit.push(this.state.currentLocation);

    this.mapRef.fitToCoordinates(coordinatesToFit, {
      edgePadding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      },
      animated: true
    });
  }

  getInitialRegion = () => {
    // Should be in San Francisco
    return {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    };
  };

  getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      console.log('Location access permission denied.');
    }

    const location = await Location.getCurrentPositionAsync({ enableHighAccuracy: false });

    this.setState({
      currentLocation: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      },
      region: {
        ...this.state.region,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      }
    });
  };

  // Starting at 5 miles, we keep expanding the radius looking for nearby locations
  getNearestLocations = () => {
    const locationsWithDistance = addDistanceToEachLocation(this.state.currentLocation);
    let filteredLocations = [];
    let radiusInMiles = 5;

    while (filteredLocations.length === 0 && radiusInMiles <= 2000) {
      filteredLocations = getLocationsWithinRadius(locationsWithDistance, radiusInMiles);
      radiusInMiles += 5;
    }

    this.setState({
      locations: filteredLocations
    });
  };

  handleRegionChange = () => {};

  renderLocationMarkers = locations => {
    return locations.map(location => (
      <MapView.Marker
        key={location.id}
        coordinate={{ latitude: Number(location.latitude), longitude: Number(location.longitude) }}
        title={`${location.name}: ${location.distance} miles`}
      />
    ));
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          ref={ref => {
            this.mapRef = ref;
          }}
          style={styles.map}
          initialRegion={this.getInitialRegion()}
          region={this.state.region}
          onRegionChange={this.handleRegionChange}
          showsUserLocation
          legalLabelInsets={{ bottom: 20, left: 20 }}
        >
          {this.renderLocationMarkers(this.state.locations)}
        </MapView>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  }
});

export default NearestLocationsScreen;
