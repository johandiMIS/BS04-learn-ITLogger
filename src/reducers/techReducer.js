import {
    GET_TECHS, SET_LOADING, TECHS_ERROR,
} from '../actions/types'

const initialState = {
    techs: [],
    loading: false,
    error: null,
}
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state=initialState, action)=>{
    switch(action.type){
        case SET_LOADING:
            return {
                ...state,
                loading:true,
            }
        case GET_TECHS:
            return {
                ...state,
                techs: action.payload,  
                loading:false,
            }
        case TECHS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        default:
            return state
    }
}