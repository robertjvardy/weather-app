import styles from "./styles.module.scss";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import { useEffect, useState } from "react";
import { setLocationQuery, setupLocation } from "../../locationUtils";

const WeatherDisplay = () => {
  const [desiredLocation, setDesiredLocation] = useState<string | null>(null);

  setupLocation(setDesiredLocation);

  useEffect(() => {
    if (desiredLocation) {
      setLocationQuery(desiredLocation);
    }
  }, [desiredLocation]);

  return (
    <>
      <h1>Is It Raining?</h1>
      <section className={styles["weather-display-container"]}>
        {desiredLocation && (
          <>
            <CurrentWeather />
            <Forecast />
          </>
        )}
        {!desiredLocation && (
          <div>... before we can answer that, we need a location</div>
        )}
      </section>
    </>
  );
};

export default WeatherDisplay;
