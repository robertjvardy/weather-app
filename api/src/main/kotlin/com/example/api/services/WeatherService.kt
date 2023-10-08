package com.example.api.services

import com.example.api.dtos.WeatherApiResponseObj
import org.springframework.beans.factory.annotation.Value
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import org.springframework.web.client.RestTemplate

@Service
class WeatherService {
    @Value("\${apis.weatherApiUri}")
    val weatherApiUrl = ""

    @Value("\${apis.weatherApiToken}")
    val weatherApiToken = ""

    //    TODO Implement proper logging and error handling
    val restTemplate = RestTemplate()

    fun getCurrentWeather(location: String): ResponseEntity<WeatherApiResponseObj> {
        return restTemplate.getForEntity(createWeatherApiUrl("/current", location), WeatherApiResponseObj::class.java)
    }

    fun getWeatherForecast(location: String): ResponseEntity<WeatherApiResponseObj> {
        //  in the free tier only three days in advance can be set
        return restTemplate.getForEntity(
            "${createWeatherApiUrl("/forecast", location)}&days=3",
            WeatherApiResponseObj::class.java
        )
    }

    private fun createWeatherApiUrl(route: String, location: String): String {
        return "$weatherApiUrl$route.json?key=$weatherApiToken&q=$location"
    }
}

