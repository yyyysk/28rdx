import React from 'react';
import { render } from 'react-dom';
import './index.css';
import TodoApp from './components/TodoApp';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createStore from './store';
import { createBrowserHistory as createHistory } from 'history';

const history = createHistory();

const store = createStore(history);
console.log(store);
render (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <TodoApp />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

