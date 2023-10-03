import axios from "axios";

export const setLocationQuery = (desiredLocation: string) => {
  axios.defaults.params = { ...axios.defaults.params, q: desiredLocation };
};

export const setupLocation = (onAccept: (location: string) => void) => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setLocationQuery(`${latitude},${longitude}`);
        onAccept(`${latitude},${longitude}`);
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            throw new Error("User denied the request for Geolocation.");
          case error.POSITION_UNAVAILABLE:
            throw new Error("Location information is unavailable.");
          case error.TIMEOUT:
            throw new Error("The request to get user location timed out.");
          default:
            throw new Error("An unknown error occurred.");
        }
      }
    );
  }
};
