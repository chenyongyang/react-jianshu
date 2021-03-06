import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store'
import { toJS } from 'immutable'
import { Link, HashRouter as Router } from "react-router-dom"
import { 
    HeaderWrapper, Logo, Nav,
    NavItem,NavSearch,Addition,
    Button,SearchWrapper, SearchInfo,
    SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList
} from './style';
import { actionCreators as loginActionCreators } from "../../pages/login/store";


class Header extends Component{

	getHeaderList(){
		const pageList = [];
		const jsList = this.props.list.toJS();
		if (jsList.length) {
			for (let i = (this.props.currentPage - 1) * 10; i < this.props.currentPage * 10; i++) {
				pageList.push(
					<SearchInfoItem key={i}>{jsList[i]}</SearchInfoItem>
				)
			}
		}
		return pageList;
	}

    render(){
        return (
			    <HeaderWrapper>
					<Router>
						<Link to="/">
							<Logo />
						</Link>
					</Router>
			        <Nav>
			          <NavItem className="left active">首页</NavItem>
			          <NavItem className="left">下载App</NavItem>
			          {this.props.login ? (
			            <NavItem onClick={this.props.logout} className="right">
			              退出
			            </NavItem>
			          ) : (
						<Router>
							<Link to="/login">
								<NavItem className="right">登陆</NavItem>
							</Link>
						</Router>
			          )}
                    <NavItem className='right'>Aa</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames='slide'>
                            <NavSearch
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={()=>{this.props.handleInputFocus(this.props.list)}}
                                onBlur={this.props.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        {
							// 这里有一个bug，点击SearchInfoList，会触发onBlur事件
							/**
							 * 本来的解决思路是：阻止事件冒泡，其实并不是这个原因
							 * 其实是因为list的显示完全由input的onblur状态来决定
							 * 要想解决，添加控制list显示与否的条件即可
							 */
                            this.props.focused || this.props.mouseIn ?
							<SearchInfo
								onMouseEnter={this.props.handleMouseEnter}
								onMouseLeave={this.props.handleMouseLeave}
							>
								<SearchInfoTitle>
									热门搜索
									<SearchInfoSwitch
										onClick={() => this.props.handleChangePage(this.props.currentPage, this.props.totalPage)}
									>
											换一批
									</SearchInfoSwitch>
								</SearchInfoTitle>
								<SearchInfoList>
									{
										this.getHeaderList()
									}
								</SearchInfoList>
							</SearchInfo> : null
                        }
                    </SearchWrapper>
                </Nav>
                <Addition>
					<Router>
						<Link to="/write">
							<Button className="write">
								写文章
							</Button>
						</Link>
					</Router>
					
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }
}

const MapStateToProps = (state) => {
    return {
		focused: state.get('header').get('focused'),
		list: state.get('header').get('list'),
		mouseIn: state.get('header').get('mouseIn'),
		currentPage: state.get('header').get('currentPage'),
		totalPage: state.get('header').get('totalPage'),
		login: state.getIn(["login", "login"])
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
			// ajax获取数据，通过redux-thunk将异步操作封装到action中
			// 每次点击搜索框触发focus，都会去获取数据，这是无意义的请求发送
			// 应该只有第一次需要获取
			if(list.size === 0){
				dispatch(actionCreators.getList(list));
			}
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter(){
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave(){
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(currentPage, totalPage){
			if (currentPage < totalPage) {
				dispatch(actionCreators.changePage(currentPage + 1));
			} else {
				dispatch(actionCreators.changePage(1));
			}
		},
		logout() {
	      dispatch(loginActionCreators.logout());
	    }
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Header);