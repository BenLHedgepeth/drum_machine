import React from 'react';
import logo from './logo.svg';
import './App.css';


class Panel extends React.Component {

}


class DrumPad extends React.Component {

  render() {
    return (
      <li className="drum-pad">
        <audio muted={this.props.power}></audio>
        {this.props.name}
      </li>
    )
  }
}

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active : true
    };
  }
  render() {
    let items = ['A', 'B', 'C'];
    let drumPads = items.map((button) => {
      return <DrumPad name={button} power={!this.state.active} />
    })
    return (
      <div id="drum-machine">
        <ul class="pads_wrapper">
          {drumPads}
        </ul>
      </div>
    )
  }
}

function App() {
  return <DrumMachine />
}

export default App;
