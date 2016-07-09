import React, { Component } from 'react'

import Tone from './tone'

export default class Keyboard extends Component {
  constructor(){
    super();
    this.state = { base: 1 };
    
    this.tones = {};
    this.base = 1;
    this.waveForm = 'sine';
  }
  handleKeyDown(e){

    for (var key in this.tones) {
      if (!this.tones.hasOwnProperty(key)) continue;
      this.tones[key].stop();
      this.tones[key].disconnect();
    }

    switch(e.key){
      // C
      case 'a':
        this.tones['a'] = new Tone(this.waveForm, 261.63 * this.state.base);
        return this.tones['a'].start();
      // C#
      case 'w':
        this.tones['w'] = new Tone(this.waveForm, 277.18 * this.state.base);
        return this.tones['w'].start();
      // D
      case 's':
        this.tones['s'] = new Tone(this.waveForm, 293.66 * this.state.base);
        return this.tones['s'].start();
      // D#
      case 'e':
        this.tones['e'] = new Tone(this.waveForm, 311.13 * this.state.base);
        return this.tones['e'].start();
      // E
      case 'd':
        this.tones['d'] = new Tone(this.waveForm, 329.63 * this.state.base);
        return this.tones['d'].start();

      // F
      case 'f':
        this.tones['f'] = new Tone(this.waveForm, 349.23 * this.state.base);
        return this.tones['f'].start();
      // F#
      case 't':
        this.tones['t'] = new Tone(this.waveForm, 369.99 * this.state.base);
        return this.tones['t'].start();
      // G
      case 'g':
        this.tones['g'] = new Tone(this.waveForm, 392.00 * this.state.base);
        return this.tones['g'].start();
      // G#
      case 'y':
        this.tones['y'] = new Tone(this.waveForm, 415.30 * this.state.base);
        return this.tones['y'].start();
      // A
      case 'h':
        this.tones['h'] = new Tone(this.waveForm, 440.00 * this.state.base);
        return this.tones['h'].start();
      // A#
      case 'u':
        this.tones['u'] = new Tone(this.waveForm, 466.16 * this.state.base);
        return this.tones['u'].start();
      // B
      case 'j':
        this.tones['j'] = new Tone(this.waveForm, 493.88 * this.state.base);
        return this.tones['j'].start();
      // C
      case 'k':
        this.tones['k'] = new Tone(this.waveForm, 523.25 * this.state.base);
        return this.tones['k'].start();
      
      
      // Octave Down
      case 'z':
        if(this.base > 1){
          this.base--;
        } else {
          this.base = this.base / 2;
        }
        if(this.base < 0.25){
          this.base = 0.25;
        }
        return this.setState({ base: this.base});

      // Octave Up
      case 'x':
        if(this.base <= 0.5)
          this.base = this.base * 2;
        else if(this.base >= 1 && this.base < 4)
          this.base++;
        return this.setState({ base: this.base})

    }
  }

  handleStop(){
    for (var key in this.tones) {
      if (!this.tones.hasOwnProperty(key)) continue;
      this.tones[key].stop();
      this.tones[key].disconnect();
    }
  }
  render(){
    return(
      <div onKeyDown={this.handleKeyDown.bind(this)}>

        <button onClick={this.handleStop.bind(this)}>Stop</button>
      </div>
    )
  }
}

