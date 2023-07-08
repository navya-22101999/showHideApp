// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {stage: false, stage2: false}

  onFirstName = () => {
    this.setState(prev => ({stage: !prev.stage}))
  }

  onLastName = () => {
    this.setState(prev => ({stage2: !prev.stage2}))
  }

  render() {
    const {stage, stage2} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="navya">
          <div className="button-container">
            <button type="button" onClick={this.onFirstName}>
              Show/Hide Firstname
            </button>
            {stage && (
              <div className="mini-container">
                <p>Joe</p>
              </div>
            )}
          </div>
          <div className="button-container">
            <button type="button" onClick={this.onLastName}>
              Show/Hide Lastname
            </button>
            {stage2 && (
              <div className="mini-container">
                <p>Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
