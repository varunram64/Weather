import axios from 'axios';

const API_KEY = "3c972da184ec9856fda71511b17fb2ca";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
    const SearchURL = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(SearchURL);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}