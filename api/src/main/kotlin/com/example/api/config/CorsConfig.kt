package com.example.api.config

import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@Configuration
class CorsConfig {

    @Value("\${cors.originPatterns}")
    private val corsOriginPatterns: Array<String> = arrayOf("")

    @Bean
    fun addCordConfig(): WebMvcConfigurer {
        return object : WebMvcConfigurer {
            override fun addCorsMappings(registry: CorsRegistry) {
                super.addCorsMappings(registry)

                registry.addMapping("/**")
                    .allowedMethods("*")
                    .allowedOriginPatterns(*corsOriginPatterns)
                    .allowCredentials(true)
            }
        }
    }
}