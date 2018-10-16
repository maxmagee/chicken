import haversineDistance from 'haversine-distance';

import locations from '../data/locations.json';

// Iterates through all of the locations and updates the 'distance' property
// to the current distance from the current lat-long location
export const addDistanceToEachLocation = currentLocation => {
  return locations.map(location => {
    const modifiedLocation = Object.assign({}, location);
    const distanceToLocationInMiles =
      haversineDistance(
        {
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude
        },
        {
          latitude: location.latitude,
          longitude: location.longitude
        }
      ) * 0.00062137; // Meters to miles conversion factor
    const roundedDistance = Math.round(distanceToLocationInMiles * 10) / 10;

    modifiedLocation.distance = roundedDistance;

    return modifiedLocation;
  });
};

export const getLocationsWithinRadius = (locationsWithDistance, radius) => {
  return locationsWithDistance.filter(location => location.distance <= radius);
};
