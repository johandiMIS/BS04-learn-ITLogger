import {
    GET_LOGS, 
    SET_LOADING, 
    LOGS_ERROR
} from '../actions/types'

const initialState = {
    logs: [],
    current: null,
    loading: false,
    error: null,
}
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
    switch (action.type){
        case GET_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false,
            }
        case LOGS_ERROR:
            console.error(action.payload)
            return {
                ...state,
                error: action.payload,
                loading:false,
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            }
        default:
            return state
    }
}   