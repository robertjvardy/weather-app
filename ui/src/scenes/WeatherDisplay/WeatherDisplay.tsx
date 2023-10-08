import styles from "./styles.module.scss";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/ForeCast";
import { useEffect, useState } from "react";

const WeatherDisplay = () => {
  const [desiredLocation, setDesiredLocation] = useState<string | null>();
  const hasLocation = !!desiredLocation;

  useEffect(() => {
    if ("geolocation" in navigator && !hasLocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          setDesiredLocation(`${latitude},${longitude}`);
        },
        (error) => {
          console.log("there was an error", error);
        }
      );
    }
  }, [desiredLocation]);

  return (
    <section className={styles["weather-display-container"]}>
      {!!desiredLocation && (
        <>
          <CurrentWeather selectedLocation={desiredLocation} />
          <Forecast selectedLocation={desiredLocation} />
        </>
      )}
      {!desiredLocation && <div>The is no location</div>}
    </section>
  );
};

export default WeatherDisplay;
