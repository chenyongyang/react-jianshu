import axios from "axios";
import * as actionTypes from "./actionTypes.js";

const changeDetail = (title, content) => ({
    type: actionTypes.CHANGE_DETAIL,
    title,
    content
});

export const getDetail = id => {
    return dispatch => {
        console.log('获取详情页数据')
        // axios
        //     .get("/api/detail.json?id=" + id)
        //     .then(res => {
        //         const result = res.data.data;
        //         dispatch(changeDetail(result.title, result.content));
        //     })
        //     .catch(() => { });
    };
};