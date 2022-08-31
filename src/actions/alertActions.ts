import { SET_ALERT } from "../models/types";
import { AlertAction } from "../models/WeatherData";

export const setAlert = (message: string): AlertAction => {
    return {
        type: SET_ALERT,
        payload: message
    }
}