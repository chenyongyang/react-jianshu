import * as actionTypes from './actionTypes'
import axios from 'axios'
export const searchFocus = () => {
    return {
        type: actionTypes.SEARCH_FOCUS
    }
}

export const searchBlur = () => {
    return {
        type: actionTypes.SEARCH_BLUR
    }
}

export const getList = () => {
    // redux-thunk使得action能够返回函数
    return (dispatch) => {
        axios.get('http://localhost:3001/api/headerlist').then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
}