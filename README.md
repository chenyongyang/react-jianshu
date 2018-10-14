## React.js开发简书WebApp

### 页面的数据管理
每个页面的数据来自于redux，因此每个页面都要维护自己的一份store

最后再将每个页面的store组合起来（merge)，合成一个总的store

每个页面要获取数据：首先要connect到store，在mapState/mapDispatch

在App.js中，所有的组件都被Provider包围，所有的子孙组件都有能力获取到store

容器组件维护一份store，容器内所有的UI组件的数据都从中获取


### react-router-dom
Link组件不能单独使用，需要用Router包围起来

单独使用Router，则需要定义history属性

因此可以直接使用BrowserRouter/HashRouter
