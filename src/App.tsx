import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import PageBlank from "./views/PagesWithoutRedux/PageBlank";
import PageBlank from "./views/PagesWithRedux/PageBlank";
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";
import PagePrivateBlank from "./views/PrivatePageBlank";

const history = createBrowserHistory();
const AfterChangeRoute = () => {
    console.log('AfterChangeRoute');
    window.scrollTo(0,0,);
};

const isAuthenticated = false;

// @ts-ignore
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        AfterChangeRoute(),
        isAuthenticated
            ? ( <Component {...props}/> )
            : ( <Redirect to={{ pathname: '/login'}}/> )
    )} />
);
// @ts-ignore
const AuthRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        AfterChangeRoute(),
            !isAuthenticated
                ? ( <Component {...props}/> )
                : ( <Redirect to={{ pathname: '/'}}/> )
    )} />
);
// @ts-ignore
const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        AfterChangeRoute(),
            <Component {...props}/>
    )} />
);


const App = () => <Provider store={store}>
    <Router
        // @ts-ignore
        history={ history }
        // @ts-ignore
        render={ props => getUserAfterChangeRoute()}>
        <Header />
        <Switch>
            <AuthRoute exact path="/login" component={ Login } />
            <AuthRoute exact path="/register" component={ Register } />
            <PrivateRoute exact path="/private" component={ PagePrivateBlank } />
            <PublicRoute exact path="/" component={ PageBlank } />
        </Switch>
        <Footer />
    </Router>

</Provider>;

export default App;