import React from 'react';
import logo from './logo.svg';
import './App.scss';


class Panel extends React.Component {

}


class DrumPad extends React.Component {

  render() {
    let status = this.props.power ? "active" : "inactive";
    console.log(status);
    return (
      <li className={`drum-pad ${status}`}>
        <audio muted={!this.props.power}></audio>
        {this.props.name}
      </li>
    )
  }
}


class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      powerOn : false
    };
    this.useMachine = this.useMachine.bind(this);
  }

  useMachine(event) {
    if (!this.state.powerOn) {
      this.setState((state) => ({
        powerOn: true
      }))
      event.target.style.boxShadow = "inset 0px 10px 10px red";
    } else {
      this.setState((state) => ({
        powerOn: false
      }))
      event.target.style.boxShadow = "none";
    }
  }
  
  render() {
    let items = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
    let drumPads = items.map((button) => {
      return <DrumPad name={button} power={this.state.powerOn} />
    })
    return (
      <div id="drum-machine">
        <ul className="pads_wrapper">
          {drumPads}
        </ul>
        <div className="controls">
          <p className="power_button" onClick={this.useMachine}>Power</p>
        </div>
      </div>
    )
  }
}

function App() {
  return <DrumMachine />
}

export default App;
