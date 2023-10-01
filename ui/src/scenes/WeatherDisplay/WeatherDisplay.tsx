import { useCurrentWeather } from "./queries";
import invariant from "tiny-invariant";
import styles from "./styles.module.scss";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/ForeCast";

const WeatherDisplay = () => {
  const { data } = useCurrentWeather();

  invariant(data);

  const { location } = data;

  return (
    <section className={styles["weather-display-container"]}>
      <h4 className={styles["location-title"]}>
        ...in {location.name}, {location.region}
      </h4>
      <CurrentWeather />
      <Forecast />
    </section>
  );
};

export default WeatherDisplay;
