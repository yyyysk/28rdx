import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';

const initialState = {
  tasks: [],
}

function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.task])
      };

    default:
        return state;
  }
}

const addTask = task => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});

const store = createStore(tasksReducer);
ReactDOM.render(<App />, document.getElementById('root'));

