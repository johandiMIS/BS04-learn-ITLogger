import {
    GET_LOGS, 
    SET_LOADING, 
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOGS,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_LOG
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
        case UPDATE_LOG:
            return {
                ...state,
                logs: state.logs.map((log)=> log.id === action.payload.id ? action.payload : log),
                loading:false, 
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload,
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null,
            }
        case DELETE_LOGS:
            return {
                ...state,
                logs: state.logs.filter((log) => log.id !== action.payload),
                loading: false,
            }
        case ADD_LOG:
            return {
                ...state,
                logs: [...state.logs, action.payload],
                loading: false,
            }
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