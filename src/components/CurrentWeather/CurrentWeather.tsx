import {
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Typography,
} from "@mui/material"
import { useState } from "react"

import ThermostatIcon from "@mui/icons-material/Thermostat"
import AirIcon from "@mui/icons-material/Air"
import BeachAccessIcon from "@mui/icons-material/BeachAccess"
import OpacityIcon from "@mui/icons-material/Opacity"
import CompressIcon from "@mui/icons-material/Compress"

const CurrentWeather = (data) => {
    const [dense, setDense] = useState(false)

    return (
        <div>
            <Typography variant="h1" gutterBottom>
                Adelaide
            </Typography>
            <List dense={dense}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ThermostatIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Feels like" secondary="16 °C" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <AirIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Wind" secondary="12 km/h" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Precipitation" secondary="100%" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <OpacityIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Humidity" secondary="10%" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <CompressIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Pressure" secondary="1012" />
                </ListItem>
            </List>
        </div>
    )
}

export default CurrentWeather
