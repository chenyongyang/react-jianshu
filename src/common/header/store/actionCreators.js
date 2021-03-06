import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'
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

const changeHeaderList = (data)=>{
    return {
        type: actionTypes.CHANGE_HEADER_LIST,
        data: fromJS(data),
        totalPage: Math.ceil(data.length / 10) // 每页显示10
    }
}

export const getList = (list) => {
    // redux-thunk使得action能够返回函数
    return (dispatch) => {
        axios.get('http://localhost:3001/api/headerlist').then((res)=>{
            dispatch(changeHeaderList(res.data.data));
        }).catch((err)=>{
            console.log(err)
        })
    }
};

export const mouseEnter = () => {
    return {
        type: actionTypes.MOUSE_ENTER
    }
}

export const mouseLeave = () => {
    return {
        type: actionTypes.MOUSE_LEAVE
    }
}

export const changePage = (currentPage) => {
    return {
        type: actionTypes.CHANGE_PAGE,
        currentPage
    }
}