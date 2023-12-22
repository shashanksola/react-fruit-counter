// Write your code here

import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  increaseSpeed = () => {
    this.setState(prevState => {
      if (prevState.speed === 200) {
        return {speed: prevState.speed}
      }
      return {speed: prevState.speed + 10}
    })
  }

  decreaseSpeed = () => {
    this.setState(prevState => {
      if (prevState.speed === 0) {
        return {speed: prevState.speed}
      }
      return {speed: prevState.speed - 10}
    })
  }

  render() {
    const {speed} = this.state
    console.log('rendering')
    return (
      <div className="bg-container">
        <h1>SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer-img"
        />
        <h1>Speed is {speed}mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button onClick={this.increaseSpeed}>Accelerate</button>
          <button onClick={this.decreaseSpeed}>Apply Brake</button>
        </div>
      </div>
    )
  }
}

export default Speedometer
