// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

  delayMethod = (event) => {

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // setTimeout, fetch, promises -> asynchronises 
    // first the setTimeout need finish and after event can start 
    // rare situation event pooling 

      const eventDataINeed = {
        clientX: event.clientX,
        target: event.target,
      }

      setTimeout(() => {
        this.props.onDelayedClick(eventDataINeed);
      }, this.props.delay);

    }

  // another solution
  //   event.persist();
  //   window.setTimeout(() => {
  //     this.props.onDelayedClick(event);
  //   }, this.props.delay);
  // };


  render() {
    return (
      <div>
        <button onClick={this.delayMethod}>Delay</button>
      </div>
    )
  }
}