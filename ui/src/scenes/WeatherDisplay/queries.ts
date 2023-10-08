import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CurrentResponse, ForecastType } from "./types";

export const useCurrentWeather = () =>
  useQuery<CurrentResponse>(["current"], async () => {
    const response = await axios.get<CurrentResponse>(`/weather/current`);
    return response.data;
  });

export const useForecast = () =>
  useQuery<ForecastType>(["forecast"], async () => {
    const response = await axios.get<ForecastType>(`/weather/forecast`);
    return response.data;
  });
