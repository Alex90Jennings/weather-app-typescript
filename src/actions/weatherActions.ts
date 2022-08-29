import {ThunkAction} from 'redux-thunk'
import {RootState} from '../models/store'
import { WeatherAction, WeatherData, WeatherError } from '../models/WeatherData'
import { GET_WEATHER, SET_LOADING, SET_ERROR } from '../models/types'

export const getWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
    return async dispatch => {
        try{
            const res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/history?&aggregateHours=24&startDateTime=2022-05-13T00:00:00&endDateTime=2022-06-20T00:00:00&period=last30days&unitGroup=uk&contentType=json&dayStartTime=0:0:00&dayEndTime=0:0:00&location=${city}&key=${process.env.REACT_APP_API_KEY}`)

            if(!res.ok) {
                const resData: WeatherError = await res.json()
                throw new Error(resData.message)
            }

            const resData: WeatherData = await res.json()
            dispatch({
                type: GET_WEATHER,
                payload: resData
            })
        }catch(err: any){
            dispatch({
                type: SET_ERROR,
                payload: err.message
            })
        }
    }
}

export const setLoading = (): WeatherAction => {
    return {
        type: SET_LOADING
    }
}

export const setError = (): WeatherAction => {
    return {
        type: SET_ERROR,
        payload: ''
    }
}