import { fromJS } from 'immutable'

const initData = fromJS({
    topicList: [],
    articleList: [],
    articlePage: 1
})

export default (state = initData, action) => {
    return state;
}