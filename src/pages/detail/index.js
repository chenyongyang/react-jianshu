import React, { PureComponent } from "react";
import { DetailWrapper, Header, Content } from "./style";

// pureComponent内部自动优化shouldComponentUpdate
class Detail extends PureComponent {
    render() {
        return (
            <DetailWrapper>
                <Header>头部</Header>
                <Content>
                    <img
                        className='banner-img'
                        alt=''
                        src='//upload.jianshu.io/admin_banners/web_images/4486/41d9173c44ce6eded75da5f82da659973ddaad41.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
                    />
                    <p>
                        这是一个段落
                    </p>
                </Content>
            </DetailWrapper>
        );
    }
}

export default Detail
