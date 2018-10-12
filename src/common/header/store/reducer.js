// reducer如果存放过多的内容，后期不可维护，把它按组件拆分出来
import { SEARCH_FOCUS, SEARCH_BLUR} from './actionTypes'
import { fromJS } from 'immutable'
const initData = fromJS({
    focused: false
})

// reducer导出一个纯函数
export default (state = initData, action) => {
    if (action.type === SEARCH_FOCUS) {
        return state.set('focused', true)
    }
    if (action.type === SEARCH_BLUR) {
        return state.set('focused', false)
    }
    return state;
}

