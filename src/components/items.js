import React, { Component } from 'react'
import Item from '../components/item';
export class items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(el=>(
          <Item key={el.id} item={el}/>
        
        ))}
      </main>
    )
  }
}

export default items