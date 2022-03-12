import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <div style={{ height: 400 }} className="border border-primary d-flex justify-content-center align-items-center align-self-center">
      <div class="col text-center">
        <h1>Count</h1>
        <p>
          <Counter
            value={store.getState()}
            onIncrement={() => store.dispatch({ type: 'INCREASE' })}
            onDecrement={() => store.dispatch({ type: 'DECREASE' })}
            backToZero={() => store.dispatch({ type: 'ZERO' })}
            addTen={() => store.dispatch({ type: 'TEN' })}
          />
        </p>
      </div>
  </div>,
  rootEl
)

render()
store.subscribe(render)
