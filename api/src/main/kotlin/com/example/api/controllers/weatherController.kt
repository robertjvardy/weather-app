package com.example.api.controllers

import com.example.api.dtos.WeatherApiResponseObj
import com.example.api.services.WeatherService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/weather")
class WeatherController(
    private val weatherService: WeatherService,
) {
    @GetMapping("/current")
    fun fetchCurrentWeather(@RequestParam(name = "location") location: String): ResponseEntity<WeatherApiResponseObj> {
        return weatherService.getCurrentWeather(location)
    }

    @GetMapping("/forecast")
    fun fetchForecast(@RequestParam(name = "location") location: String): ResponseEntity<WeatherApiResponseObj> {
        return weatherService.getWeatherForecast(location)
    }
}