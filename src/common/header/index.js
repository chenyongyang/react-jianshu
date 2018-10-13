import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store'
import { 
    HeaderWrapper, Logo, Nav,
    NavItem,NavSearch,Addition,
    Button,SearchWrapper, SearchInfo,
    SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList
} from './style';


class Header extends Component{
    render(){
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>Aa</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames='slide'>
                            <NavSearch
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        {
                            // 这里有一个bug，点击SearchInfoList，会触发onBlur事件
                            this.props.focused ?
							<SearchInfo>
								<SearchInfoTitle>
									热门搜索
									<SearchInfoSwitch>
											换一批
									</SearchInfoSwitch>
								</SearchInfoTitle>
								<SearchInfoList>
									<SearchInfoItem>教育</SearchInfoItem>
									<SearchInfoItem>人文</SearchInfoItem>
									<SearchInfoItem>教育</SearchInfoItem>
									<SearchInfoItem>人文</SearchInfoItem>
									<SearchInfoItem>教育</SearchInfoItem>
									<SearchInfoItem>人文</SearchInfoItem>
									<SearchInfoItem>教育</SearchInfoItem>
									<SearchInfoItem>人文</SearchInfoItem>
								</SearchInfoList>
							</SearchInfo> : null
                        }
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='write'>写文章</Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }
}

const MapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused')
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
			// ajax获取数据，通过redux-thunk将异步操作封装到action中
			dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Header);