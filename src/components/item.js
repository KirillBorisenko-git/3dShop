import React, { Component } from 'react'

export class item extends Component {
  render() {
    return (
      <div>{this.props.item.id}</div>
    )
  }
}

export default item