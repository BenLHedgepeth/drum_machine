import React from 'react';
import logo from './logo.svg';
import './App.scss';
import bankOne from './drum_files.js';

class Panel extends React.Component {

  render() {
    return (
      <div className="controls">
        <p className="power_button" onClick={this.props.controls}>Power</p>
        <p class="sound_type"></p>
      </div>
    )
  }
}


class DrumPad extends React.Component {

  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
  }

  playSound(event) {
    let pad_id = event.currentTarget.id.replace("'","");
    let display_title = document.querySelector(".sound_type");
    let sound_clip = document.querySelector(`#${pad_id} audio`);
    if (this.props.power) {
      display_title.innerHTML = pad_id.replace("-", "");
    } else {
      display_title.innerHTML = "";
    }

    sound_clip.play();
  }

  render() {
    let padSound = this.props.sound;
    let status = this.props.power ? "active" : "inactive";
    return (
      <li key={padSound.keyCode} id={padSound.id.replace("'", "")} className={`drum-pad ${status}`}  onClick={this.playSound}>
        <audio src={padSound.url} muted={!this.props.power}></audio>
        {padSound.keyTrigger}
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
      event.target.style.cssText = "box-shadow: inset 0px 10px 10px red; transform: scale(.95)";
    } else {
      this.setState((state) => ({
        powerOn: false
      }))
      event.target.style.cssText="box-shadow: none; transform: none";
    }
  }

  render() {
    let drumPads = bankOne.map((sound) => {
      return <DrumPad sound={sound} power={this.state.powerOn} />
    })
    let machine_on = this.state.powerOn ? "powered" : "";
  return (
      <div id="drum-machine" className={machine_on}>
        <ul className="pads_wrapper">
          {drumPads}
        </ul>
        <Panel controls={this.useMachine} />
      </div>
    )
  }
}

function App() {
  return <DrumMachine />
}

export default App;
