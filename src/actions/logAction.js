import {GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOGS, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG, SEARCH_LOGS} from './types'

export const searchLogs = (keyword) => async (dispatch) =>{
    try{
        setLoading();

        const res = await fetch(`/logs?q=${keyword}`)
        const data = await res.json()

        dispatch({
            type: SEARCH_LOGS,
            payload: data,
        })
    }catch(err){
        dispatch({
            type: LOGS_ERROR,
            payload: err.repsonse.statusText,
        })
    }
}

export const updateLog = (log) => async (dispatch) => {
    try{
        setLoading();

        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                "Content-Type":"application/json"
            },
        })
        
        const data = await res.json()

        dispatch({
            type: UPDATE_LOG,
            payload: data,
        })
    }catch(err){
        dispatch({
            type: LOGS_ERROR,
            payload: err.repsonse.statusText,
        })
    }
}

export const setCurrent = (log) => (dispatch)=>{
    dispatch({
        type: SET_CURRENT,
        payload: log,
    })
}

export const clearCurrent = () => (dispatch) =>{
    dispatch({
        type: CLEAR_CURRENT,
    })
}

export const deleteLogs = (id) => async (dispatch) =>{
    try{
        setLoading();

        await fetch(`/logs/${id}`, {
            method: 'DELETE',
        })

        dispatch({
            type: DELETE_LOGS,
            payload: id
        })
    }catch(err){
        dispatch({
            type: LOGS_ERROR,
            payload: err.repsonse.statusText,
        })
    }
}

export const addLogs = (log) => async (dispatch) =>{
    try{
        setLoading();

        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type':'application/json'
            }
        })

        const data = await res.json()

        dispatch({
            type: ADD_LOG,
            payload: data,
        })
    }catch(err){
        dispatch({
            type: LOGS_ERROR,
            payload: err.repsonse.statusText,
        })
    }
}

export const getLogs = () => async (dispatch) =>{
    try{
        setLoading();

        const res = await fetch('/logs')
        const data = await res.json()

        dispatch({
            type: GET_LOGS,
            payload: data,
        })
    }catch(err){
        dispatch({
            type: LOGS_ERROR,
            payload: err.repsonse.statusText,
        })
    }
}

export const setLoading = () =>{
    return {
        type: SET_LOADING
    }
}