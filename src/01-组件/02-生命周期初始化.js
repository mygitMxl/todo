import React, { Component } from 'react'

export default class APP extends Component {
  state={
    name:'帅哥'
  }
    UNSAFE_componentWillMount(){
        console.log('1');
    }
    componentDidMount(){
     
    }
    handle=()=>{
      this.setState({
        name:'美女'
      })
     }
  render() {
    console.log('2');
    return (
      <div>
        <button onClick={
            this.handle
        }>123</button>
        {this.state.name}
      </div>
    )
  }
}
