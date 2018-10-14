import axios from "axios";
import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const addHomeList = (list, nextPage) => {
    return {
        list: fromJS(list),
        type: actionTypes.ADD_ARTICLE_LIST,
        nextPage
    }
};

const changeHomeData = (result) => {
    return {
        type: actionTypes.CHANGE_HOME_DATA,
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList
    }
};

// 首页数据初始化异步操作
export const getHomeInfo = () => {
    return (dispatch) => {
        console.log('首页数据初始化')
        // axios.get("/api/home").then(res => {
        //     const result = res.data.data;
        //     dispatch(changeHomeData(result));
        // });
    };
};

// 将获取更多的异步操作封装到actionCreator
export const getMoreList = page => {
    return (dispatch) => {
        console.log('获取下一页数据')
        // axios.get("/api/homeList?page=" + page).then(res => {
        //     const result = res.data.data;
        //     dispatch(addHomeList(result, page + 1));
        // });
    };
};

export const toggleTopShow = show => ({
    type: actionTypes.TOGGLE_SCROLL_TOP,
    show
});