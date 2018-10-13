import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";

const initData = fromJS({
    topicList: [],
    articleList: [],
    articlePage: 1,
    recommendList: []
});

// 将多次state.set操作merge到一起
const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
    });
};

const addArticleList = (state, action) => {
    return state.merge({
        articleList: state.get("articleList").concat(action.list),
        articlePage: action.nextPage
    });
};

export default (state = initData, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return changeHomeData(state, action);
        case actionTypes.ADD_ARTICLE_LIST:
            return addArticleList(state, action);
        default:
            return state;
    }
}