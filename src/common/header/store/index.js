import headerReducer from './reducer';
import * as actionCreators from './actionCreators'
import * as actionTypes from './actionTypes'

// index引用了所有的文件，可成为外界的唯一入口
export { headerReducer, actionCreators, actionTypes };