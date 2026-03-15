import {Component} from 'react'
import './index.css'

class FindNumber extends Component {
  state = {count: 0}

  number = () => Math.floor(Math.random() * 101)

  check = () => {
    const randomnumber = this.number()
    this.setState(prevState => ({count: prevState.count + randomnumber}))
  }

  render() {
    const {count} = this.state
    const displayvalue = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div>
        <div className="container">
          <h1 className="head">Count {count}</h1>
          <p className="para">Count is {displayvalue}</p>

          <button className="but" onClick={this.check}>
            Increment
          </button>

          <p className="paratwo"> 
            Increment the number 
          </p>
        </div>
      </div>
    )
  }
}

export default FindNumber