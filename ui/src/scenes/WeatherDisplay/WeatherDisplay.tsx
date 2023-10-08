import styles from "./styles.module.scss";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/ForeCast";

const WeatherDisplay = () => {
  return (
    <section className={styles["weather-display-container"]}>
      <CurrentWeather />
      <Forecast />
    </section>
  );
};

export default WeatherDisplay;
