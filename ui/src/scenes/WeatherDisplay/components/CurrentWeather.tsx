import { useCurrentWeather } from "../queries";
import invariant from "tiny-invariant";
import styles from "../styles.module.scss";
import { useState } from "react";
import classNames from "classNames";

const CurrentWeather = ({ selectedLocation }: { selectedLocation: string }) => {
  const [tempUnit, setTempUnit] = useState<"c" | "f">("c");
  const { data } = useCurrentWeather(selectedLocation);

  invariant(data);

  const { current, location } = data;
  const isCelsius = tempUnit === "c";

  return (
    <section>
      <h4 className={styles["location-title"]}>
        ...in {location.name}, {location.region}
      </h4>
      <div className={styles["current-container"]}>
        <div className={styles["temp"]}>
          {isCelsius ? current.feelslike_c : current.feelslike_f}
        </div>
        <button
          className={classNames({ [styles.active]: isCelsius })}
          onClick={() => setTempUnit("c")}
        >
          °C
        </button>
        <button
          className={classNames({ [styles.active]: !isCelsius })}
          onClick={() => setTempUnit("f")}
        >
          °F
        </button>
        <div className={styles["left-stats"]}>
          <div className={styles["stat-row"]}>
            Precipitation: {current.precip_mm}mm
          </div>
          <div className={styles["stat-row"]}>
            Humidity: {current.humidity}%
          </div>
          <div className={styles["stat-row"]}>
            Wind: {current.wind_kph}kph {current.wind_dir}
          </div>
        </div>
        <div className={styles["right-stats"]}>
          <div className={styles["stat-row"]}>Weather</div>
          <div className={styles["stat-row"]}>
            {new Date().toLocaleDateString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
          <div className={styles["stat-row"]}>{current.condition.text}</div>
        </div>
        <img
          src={current.condition.icon}
          className={styles.logo}
          style={{ filter: "drop-shadow(0 0 1rem rgb(10, 167, 219))" }} //TODO make this colour change based on the weather
        />
      </div>
    </section>
  );
};

export default CurrentWeather;
