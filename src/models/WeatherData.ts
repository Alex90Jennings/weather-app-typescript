import { GET_WEATHER, SET_ERROR, SET_LOADING } from "./types"

export interface WeatherData {
    temp: number,
    heatindex: number,
    precip: number,
    weathertype: string,
    humidity: number,
    precipcover: number
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

export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction