import React, { Component } from 'react'

export default class APP extends Component {
  state={
    name:'mxl'
  }
  render() {
    return (
      <div>
        <Child event={(value)=>{this.setState({name:value})}}/>
        {this.state.name}
      </div>
    )
  }
}
class Child extends Component{
    render(){
        return(
            <div>
                <button onClick={()=>{this.props.event('123')}}>点击</button>
            </div>
        )
    }
}