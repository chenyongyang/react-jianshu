// reducer如果存放过多的内容，后期不可维护，把它按组件拆分出来
import { SEARCH_FOCUS, SEARCH_BLUR, CHANGE_HEADER_LIST, MOUSE_ENTER, MOUSE_LEAVE } from './actionTypes'
import { fromJS } from 'immutable'
const initData = fromJS({
    focused: false,
    mouseIn: false,
    list: []
})

// reducer导出一个纯函数
export default (state = initData, action) => {
    switch (action.type) {
        case SEARCH_FOCUS:
            return state.set('focused', true);
        case SEARCH_BLUR:
            return state.set('focused', false);
        case CHANGE_HEADER_LIST:
            return state.set('list', action.payload);
        case MOUSE_ENTER:
            return state.set('mouseIn', true);
        case MOUSE_LEAVE:
            return state.set('mouseIn', false);
        default:
            return state;
    }
}

