// Write your code here

import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  increaseMangoes = () => {
    this.setState(prevState => ({
      mango: prevState.mango + 1,
      banana: prevState.banana,
    }))
  }

  increaseBananas = () => {
    this.setState(prevState => ({
      mango: prevState.mango,
      banana: prevState.banana + 1,
    }))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <h1>
          Bob ate {mango} mangoes {banana} bananas
        </h1>
        <div className="increase-container">
          <div className="card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <button onClick={this.increaseMangoes}>Eat Mango</button>
          </div>
          <div className="card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
            <button onClick={this.increaseBananas}>Eat Banana</button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
