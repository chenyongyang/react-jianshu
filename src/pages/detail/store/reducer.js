import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";

const initData = fromJS({
    title: "衡水中学，被外地人占领的高考工厂",
    content: "<img src='//upload-images.jianshu.io/upload_images/10295326-b7d6641a66c7fafc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/524'/><p><b>2017年，衡水中学考上清华北大的人数是176人</b>，2016年是139人，再往前推到2015年，这个人数是119人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人上好高中越来越艰难的尴尬处境。</p><p>2017年，衡水中学考上清华北大的人数是176人，2016年是139人，再往前推到2015年，这个人数是119人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人上好高中越来越艰难的尴尬处境。</p><p>2017年，衡水中学考上清华北大的人数是176人，2016年是139人，再往前推到2015年，这个人数是119人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人上好高中越来越艰难的尴尬处境。</p><p>2017年，衡水中学考上清华北大的人数是176人，2016年是139人，再往前推到2015年，这个人数是119人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人上好高中越来越艰难的尴尬处境。</p>"
});

const changeDetail = (state, action) => {
    return state.merge({
        title: action.title,
        content: action.content
    });
};

export default (state = initData, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_DETAIL:
            return changeDetail(state, action);
        default:
            return state;
    }
};
