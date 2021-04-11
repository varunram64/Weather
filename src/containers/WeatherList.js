import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from "../components/chart";

class WeatherList extends Component {
    renderWeather(weather) {
        const temps = weather.list.map(item => item.main.temp);
        const pressures = weather.list.map(item => item.main.pressure);
        const humidities = weather.list.map(item => item.main.humidity);

        return (
            <tr key={weather.city.id}>
                <td>
                    {weather.city.name}
                </td>
                <td>
                    <Chart data={temps} color="orange" units="K" />
                </td>
                <td>
                    <Chart data={pressures} color="green" units="hPa" />
                </td>
                <td>
                    <Chart data={humidities} color="black" units="%" />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>
                            City
                        </th>
                        <th>
                            Temperature (K)
                        </th>
                        <th>
                            Pressure (hPa)
                        </th>
                        <th>
                            Humidity (%)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
} 

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);