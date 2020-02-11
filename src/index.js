import React from 'react';
import { render } from 'react-dom';
import './index.css';
import TodoApp from './components/TodoApp';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tasksReducer from './reducers/tasks';

const store = createStore(tasksReducer);


render (
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);

