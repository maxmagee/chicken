import React, { Component } from 'react';
import { View } from 'react-native';
import { Location, MapView, Permissions } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';

class NearestLocationsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: {
        latitude: 37.78825,
        longitude: -122.4324
      },
      region: this.getInitialRegion()
    };
  }

  componentDidMount() {
    this.getLocationAsync();
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

  handleRegionChange = () => {};

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={this.getInitialRegion()}
          region={this.state.region}
          onRegionChange={this.handleRegionChange}
          showsUserLocation
          legalLabelInsets={{ bottom: 20, left: 20 }}
        />
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
