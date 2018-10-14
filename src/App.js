import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom'
import Header from './common/header';
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import Write from './pages/write'
import store from './store'

class App extends Component {
    render(){
        return (
            <Provider store={store}>
                <div>
                    <Header/>
                    <HashRouter>
                        <div>
                            <Route path='/' exact component={Home}/>
                            <Route path="/login" exact component={Login} />
                            <Route path="/detail/:id" exact component={Detail} />
                            <Route path="/write" exact component={Write} />
                        </div>
                    </HashRouter>
                </div> 
            </Provider>
        )
    }
}

export default App;