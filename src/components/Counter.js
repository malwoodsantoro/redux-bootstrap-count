import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button';

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value, onIncrement, onDecrement, backToZero, addTen } = this.props
    return (
      <p>
        <h3 className="display-3 align-content-center align-self-center">
          {value}
          {' '}
        </h3>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li style={{  }}>
            <Button onClick={onIncrement} variant="primary" className="btn-lg">+</Button>{' '}
            <Button onClick={onDecrement} variant="primary" className="btn-lg">-</Button>{' '}
          </li>
          <li style={{ paddingTop: 10 }}>
            <Button onClick={backToZero} variant="info" className="btn-sm">Clear</Button>{' '}
            <Button onClick={addTen} variant="warning"className="btn-sm" >+ 10</Button>{' '}
        </li>
      </ul>
      </p >
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  backToZero: PropTypes.func.isRequired,
  addTen: PropTypes.func.isRequired
}

export default Counter
