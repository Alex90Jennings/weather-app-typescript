import { UrlWithStringQuery } from "url";
import { GET_WEATHER, SET_ERROR, SET_LOADING } from "./types"

export interface WeatherData {
    locations: Location
}

interface Location {
    [cityName: string] : {
        address: string,
        values: DailyData[]
    }
}

interface Weather {
    main: string,
    icon: string,
    description: string
}

export interface WeatherError {
    cod: string;
    message: string;
}
  

export interface WeatherState {
    data: WeatherData | null,
    loading: boolean,
    error: string
}

interface GetWeatherAction {
    type: typeof GET_WEATHER,
    payload: WeatherData
}

interface SetLoadingAction {
    type: typeof SET_LOADING
}

interface SetErrorAction {
    type: typeof SET_ERROR
    payload: string
}

export interface AlertAction {
    type: typeof SET_ALERT,
    payload: string
}

export interface AlertState {
    message: string
}

export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction