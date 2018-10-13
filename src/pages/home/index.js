import React, { Component } from 'react'
import { connect } from "react-redux"
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { actionCreators } from "./store";

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img
                        className='banner-img'
                        src='//upload.jianshu.io/admin_banners/web_images/4486/41d9173c44ce6eded75da5f82da659973ddaad41.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
                    />
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
    }
}

const mapDispatch = (dispatch) => {
    return {
        changeHomeData(){
            dispatch(actionCreators.getHomeInfo());
        }
    }
}

export default connect(null, mapDispatch)(Home);