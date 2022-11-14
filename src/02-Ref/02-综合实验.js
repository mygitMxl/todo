import React, { Component } from 'react'

export default class APP extends Component {
    state={
        text:'1'
    }
    handle=(event)=>{
        console.log(this);
      this.setState({
        text:event.target.value
      })
    }
  render() {
    console.log('render');
    return (
      <div>
        <input onChange={this.handle}></input>
        <p>{this.state.text}</p>
      </div>
    )
  }
}
