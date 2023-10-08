package com.example.api.dtos

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty

data class Condition(
    val text: String,
    val icon: String,
    val code: Number
)

@JsonIgnoreProperties(ignoreUnknown = true)
data class WeatherApiResponseObj(val current: CurrentWeather?, val location: Location, val forecast: Forecast?)

//TODO find way to read given json names and map to custom names
@JsonIgnoreProperties(ignoreUnknown = true)
data class CurrentWeather(
    @JsonProperty("last_updated")
    val lastUpdated: String,
    @JsonProperty("feelslike_c")
    val feelsLikeC: Number,
    @JsonProperty("feelslike_f")
    val feelsLikeF: Number,
    val condition: Condition,
    @JsonProperty("precip_mm")
    val precipitation: Number,
    val humidity: Number,
    @JsonProperty("wind_kph")
    val wind: Number,
    @JsonProperty("wind_dir")
    val windDir: String
)

@JsonIgnoreProperties(ignoreUnknown = true)
data class Location(
    val name: String,
    val region: String,
    val country: String,
    val lat: Number,
    val lon: Number,
    @JsonProperty("tz_id")
    val tzId: String,
    @JsonProperty("localtime_epoch")
    val localtimeEpoch: Number,
    val localtime: String
)

@JsonIgnoreProperties(ignoreUnknown = true)
data class DayStats(
    val maxtemp_c: Number,
    val maxtemp_f: Number,
    val mintemp_c: Number,
    val mintemp_f: Number,
    val avgtemp_c: Number,
    val avgtemp_f: Number,
    val maxwind_mph: Number,
    val maxwind_kph: Number,
    val totalprecip_mm: Number,
    val totalprecip_in: Number,
    val totalsnow_cm: Number,
    val avgvis_km: Number,
    val avgvis_miles: Number,
    val avghumidity: Number,
    val daily_will_it_rain: Number,
    val daily_chance_of_rain: Number,
    val daily_will_it_snow: Number,
    val daily_chance_of_snow: Number,
    val condition: Condition,
    val uv: Number,
)

@JsonIgnoreProperties(ignoreUnknown = true)
data class HoursForecast(
    val time_epoch: Number,
    val time: String,
    val temp_c: Number,
    val temp_f: Number,
    val is_day: Number,
    val condition: Condition,
    val wind_mph: Number,
    val wind_kph: Number,
    val wind_degree: Number,
    val wind_dir: String,
    val pressure_mb: Number,
    val pressure_in: Number,
    val precip_mm: Number,
    val precip_in: Number,
    val humidity: Number,
    val cloud: Number,
    val feelslike_c: Number,
    val feelslike_f: Number,
    val windchill_c: Number,
    val windchill_f: Number,
    val heatindex_c: Number,
    val heatindex_f: Number,
    val dewpoint_c: Number,
    val dewpoint_f: Number,
    val will_it_rain: Number,
    val chance_of_rain: Number,
    val will_it_snow: Number,
    val chance_of_snow: Number,
    val vis_km: Number,
    val vis_miles: Number,
    val gust_mph: Number,
    val gust_kph: Number,
    val uv: Number,
)

@JsonIgnoreProperties(ignoreUnknown = true)
data class AstroStats(
    val sunrise: String,
    val sunset: String,
    val moonrise: String,
    val moonset: String,
    val moon_phase: String,
    val moon_illumination: String,
    val is_moon_up: Number,
    val is_sun_up: Number,
)

@JsonIgnoreProperties(ignoreUnknown = true)
data class ForecastDay(
    val date: String,
    val date_epoch: Number,
    val day: DayStats,
    val astro: AstroStats,
    val hour: List<HoursForecast>
)

@JsonIgnoreProperties(ignoreUnknown = true)
data class Forecast(
    val forecastday: List<ForecastDay>
)