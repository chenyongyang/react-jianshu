import React, { Component } from 'react'
import { connect } from "react-redux"

import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

import { actionCreators } from './store'

class Home extends Component {

    constructor(props){
        super(props);
        this.handleScrollTop = this.handleScrollTop.bind(this);
    }

    handleScrollTop(){
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img
                        className='banner-img'
                        src='//upload.jianshu.io/admin_banners/web_images/4486/41d9173c44ce6eded75da5f82da659973ddaad41.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {this.props.showScroll ? 
                    <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
                }
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        window.addEventListener("scroll", this.props.changeScrollTopShow);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.props.changeScrollTopShow);
    }
}

const mapState = state => ({
    showScroll: state.get("home").get("showScroll")
});

const mapDispatch = (dispatch) => {
    return {
        changeHomeData(){
            dispatch(actionCreators.getHomeInfo());
        },

        changeScrollTopShow() {
            dispatch(
                actionCreators.toggleTopShow(document.documentElement.scrollTop > 100)
            );
        }
    }
}

export default connect(mapState, mapDispatch)(Home);