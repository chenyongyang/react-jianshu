import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListItem, ListInfo, LoadMore } from "../style";
import { actionCreators } from '../store'
class List extends Component {
    render() {
        return (
            <div>
                {this.props.list.map((item, index) => {
                    return (
                        <Link key={index} to={"/detail/" + item.get("id")}>
                            <ListItem>
                                <img alt="" className="pic" src={item.get("imgURL")} />
                                <ListInfo>
                                    <h3 className="title">{item.get("title")}</h3>
                                    <p className="desc">{item.get("desc")}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    );
                })}
                <LoadMore onClick={() => this.props.getMoreList(this.props.page)}>更多文字</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        list: state.get('home').get('articleList'),
        page: state.get('home').get('articlePage')
    }
}

const mapDispatch = (dispatch) => {
    return {
        getMoreList(page) {
            dispatch(actionCreators.getMoreList(page));
        }
    }
}

export default connect(mapState, mapDispatch)(List);