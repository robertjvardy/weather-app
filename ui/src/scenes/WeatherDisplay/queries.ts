import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CurrentResponse, ForecastType } from "./types";

export const useCurrentWeather = () =>
  useQuery<CurrentResponse>(["current"], async () => {
    const response = await axios.get<CurrentResponse>(`/current.json`);
    return response.data;
  });

export const useForecast = (days: number = 7) =>
  useQuery<ForecastType>(["forecast"], async () => {
    const response = await axios.get<ForecastType>(
      `/forecast.json?days=${days}`
    );
    return response.data;
  });
