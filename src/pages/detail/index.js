import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { DetailWrapper, Header, Content } from "./style";
import { actionCreators } from "./store";
import { withRouter } from "react-router-dom";

// pureComponent内部自动优化shouldComponentUpdate
class Detail extends PureComponent {
    render() {
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
            </DetailWrapper>
        );
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapState = state => ({
    title: state.get("detail").get("title"),
    content: state.get("detail").get("content")
});

const mapDispatch = dispatch => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));
    }
});

export default connect(mapState, mapDispatch)(withRouter(Detail));
