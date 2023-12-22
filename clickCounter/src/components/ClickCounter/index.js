// Write your code here
import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  incrementCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1>The button has been clicked {count} times</h1>
        <p>Click the button to increase the count!</p>
        <button onClick={this.incrementCount}>Click Me!</button>
      </div>
    )
  }
}

export default ClickCounter
