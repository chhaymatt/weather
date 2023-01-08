import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import "./App.scss"
import CurrentWeather from "./components/CurrentWeather/CurrentWeather"
import Footer from "./components/Footer/Footer"
import { getCurrentWeather, getGeocoding } from "./services/weather"
function App() {
    const [currentWeatherData, setCurrentWeatherData] = useState()

    
    useEffect(() => {
        getGeocoding("Adelaide").then((res) => {
            console.log(res)
        })
        getCurrentWeather(-34.9281805, 138.5999312, "metric").then((res) => {
            console.log(res)
            setCurrentWeatherData(res)
        })
    }, [])
    return (
        <div className="App">
            <Button variant="contained">Hello World</Button>
            <CurrentWeather data={currentWeatherData}></CurrentWeather>
            <Footer></Footer>
        </div>
    )
}

export default App
