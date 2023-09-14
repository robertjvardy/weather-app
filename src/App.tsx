import "./App.scss";
import { Suspense, useState } from "react";
import WeatherDisplay from "./scenes/WeatherDisplay/WeatherDisplay";

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

  return (
    <div>
      <h1>Is It Raining?</h1>

      {desiredLocation ? (
        //TODO add loader
        <Suspense fallback={<div>LOADING ...</div>}>
          <WeatherDisplay desiredLocation={desiredLocation} />
        </Suspense>
      ) : null}
    </div>
  );
}

export default App;
