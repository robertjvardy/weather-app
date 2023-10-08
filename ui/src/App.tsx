import "./App.scss";
import { Suspense, useEffect, useState } from "react";
import WeatherDisplay from "./scenes/WeatherDisplay/WeatherDisplay";
import axios from "axios";

const setLocationQuery = (desiredLocation: string) => {
  axios.defaults.params = {
    ...axios.defaults.params,
    location: desiredLocation,
  };
};

function App() {
  const [desiredLocation, setDesiredLocation] = useState<string | null>(null);

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        setDesiredLocation(`${latitude},${longitude}`),
      (error) => {
        console.log("there was an error", error);
      }
    );
  }

  useEffect(() => {
    if (desiredLocation) {
      setLocationQuery(desiredLocation);
    }
  }, [desiredLocation]);

  return (
    <div>
      <h1>Is It Raining?</h1>
      {/* TODO implement routing based on available location */}
      {!!desiredLocation ? (
        //TODO add loader
        <Suspense fallback={<div>LOADING ...</div>}>
          <WeatherDisplay />
        </Suspense>
      ) : null}
    </div>
  );
}

export default App;
