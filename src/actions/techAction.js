import { GET_TECHS, SET_LOADING, TECHS_ERROR } from "./types"

export const setLoading = () => (dispatch) =>{
    dispatch({
        type:SET_LOADING
    })
}
export const getTechs = () => async (dispatch)=>{
    try{
        setLoading()
        const res = await fetch('/techs')
        const data = await res.json()
        dispatch({
            type: GET_TECHS,
            payload: data,
        })
    }catch(err){
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText,
        })
    }
}