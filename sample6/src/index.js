import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './views/login';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history';
import createStore from '../src/app/createStore'

const history = createBrowserHistory();

const { store } = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" render={() => (<App />)} />
      </Switch>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root')); // Provider使用context将store传给子组件

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
