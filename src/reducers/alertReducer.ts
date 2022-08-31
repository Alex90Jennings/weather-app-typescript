import { SET_ALERT } from "../models/types"
import { AlertState, AlertAction } from "../models/WeatherData"

const initialState: AlertState = {
    message: ''
}

const alert = (state = initialState, action: AlertAction): AlertState => {
    switch(action.type){
        case SET_ALERT:
            return {
                message: action.payload
            }
        default:
            return state
    }
}

export default alert