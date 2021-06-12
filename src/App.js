import React, {Suspense} from 'react';
import './App.css';
import NavBarContainer from "./components/Navbar/SidebarContainer";
import UsersContainer from "./components/users/usersContainer";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {initializeApp} from './Redux/app-reducer';
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router";
import Preloader from "./components/Common/Preloader/Preloader";
import store from './Redux/redux-store'
import SettingsContainer from "./components/Settings/SettingsContainer";
import NotFound from "./components/Common/NotFound404/NotFound";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends React.Component {
    catchAllUnHandleErrors(event) {
        alert(event.reason)
        console.log(event.reason, event.promise)
    }
    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnHandleErrors)
    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnHandleErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBarContainer/>
                <div className="app-wrapper-content">
                    <Suspense fallback={<div>loading...</div>}>
                        <Switch>
                            <Route path="/settings" component={SettingsContainer}/>
                            <Route path="/profile/:userId?" component={ProfileContainer}/>
                            <Route path="/dialogs" component={DialogsContainer}/>
                            <Route path="/users" component={UsersContainer}/>
                            <Route path="/login" component={Login}/>
                            <Route exact path='/'>
                                <Redirect to='/profile'/>
                            </Route>
                            <Route path="*">
                                <NotFound />
                            </Route>
                        </Switch>
                    </Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
    }
}

const AppConnect = compose(withRouter, connect(mapStateToProps,
    {
        initializeApp
    }
))(App);

const AppContainer = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppConnect/>
            </Provider>
        </Router>
    )
}
export default AppContainer