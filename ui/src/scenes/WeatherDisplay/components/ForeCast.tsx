import invariant from "tiny-invariant";
import { useForecast } from "../queries";
import styles from "../styles.module.scss";
import { DayForecastType } from "../types";

const DailyForecast = ({
  data,
  index,
}: {
  data: DayForecastType;
  index: number;
}) => {
  const dayIndex = new Date();
  dayIndex.setDate(dayIndex.getDate() + index);
  return (
    <div className={styles["day-tile"]}>
      <img
        src={data.day.condition.icon}
        className={styles.logo}
        style={{ filter: "drop-shadow(0 0 1rem yellow)" }} //TODO make colour weather dependent
      />
      <div>{dayIndex.toLocaleString("en-us", { weekday: "long" })}</div>
    </div>
  );
};

const Forecast = () => {
  const { data: forecastData } = useForecast();

  invariant(forecastData);

  const { forecast } = forecastData;
  return (
    <section className={styles["forecast-container"]}>
      <h5>7 Day Forecast</h5>
      <div className={styles["daily-grid"]}>
        {forecast.forecastday.map((data, index) => (
          <DailyForecast data={data} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Forecast;
