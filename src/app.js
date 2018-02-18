import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
import TodoList from './containers'

const store = createStore(reducer)

render(
    <Provider todo={store}>
        <TodoList />
    </Provider>,
    document.getElementById('app')
)