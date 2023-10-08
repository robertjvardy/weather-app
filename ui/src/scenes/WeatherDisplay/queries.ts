import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CurrentResponse, ForecastType } from "./types";

export const useCurrentWeather = (selectedLocation: string) =>
  useQuery<CurrentResponse>(["current"], async () => {
    const response = await axios.get<CurrentResponse>(
      `/weather/current?location=${selectedLocation}`
    );
    return response.data;
  });

export const useForecast = (selectedLocation: string) =>
  useQuery<ForecastType>(["forecast"], async () => {
    const response = await axios.get<ForecastType>(
      `/weather/forecast?location=${selectedLocation}`
    );
    return response.data;
  });
