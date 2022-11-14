import React, { Component } from 'react'

export default class APP extends Component {
    state={
        name:'mxl'
    }
  render() {
    return (
      <div>
        <Child name={this.state.name}/>
      </div>
    )
  }
}
class Child extends Component{
    render(){
        return(
            <div>{this.props.name}</div>
        )
    }
}