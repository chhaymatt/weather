const apiKey: String = "000901dcf6a0a59c1a5dd6f4089651f2"

export const getGeocoding = async (searchTerm: String) => {
    //const apiKey = process.env.API_KEY

    if (searchTerm) {
        const response = await fetch(
            `https://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=5&appid=${apiKey}`
        )

        const json = await response.json()
        return json
    }
}

export const getCurrentWeather = async (
    lat: Number,
    lon: Number,
    units: String
) => {
    if (lat && lon) {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`
        )
        return await response.json()
    }
}
// Geocoding
//https://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

// Current Weather
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// Forecast
//https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

// Weather Maps 2.0
//http://maps.openweathermap.org/maps/2.0/weather/{op}/{z}/{x}/{y}?appid={API key}

// Current air pollution data
//http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API key}

// Forecast air pollution data
// http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat={lat}&lon={lon}&appid={API key}
