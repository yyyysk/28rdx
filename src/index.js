import React from 'react';
import { render } from 'react-dom';
import './index.css';
import TodoApp from './components/TodoApp';
import { createStore } from 'redux';
import tasksReducer from './reducers/tasks';

const store = createStore(tasksReducer);


function renderApp(store) {
  render (
    <TodoApp store={store} />,
    document.getElementById('root')
  );
}

store.subscribe(() => renderApp(store));
renderApp(store);
