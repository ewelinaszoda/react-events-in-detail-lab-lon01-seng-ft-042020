// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  createCoordinates  = (event) => {

    const x = event.clientX
    const y = event.clientY

    this.props.onReceiveCoordinates([x,y])
  }

  render() {
    return (
      <div>
        <button onClick={this.createCoordinates}>Coordinates</button>
      </div>
    )
  }
}