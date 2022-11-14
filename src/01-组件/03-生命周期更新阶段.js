import React, { Component, PureComponent } from 'react'

export default class APP extends  PureComponent {
    constructor(){
        super()
    }
   state={
    list:'1'
   }
  render() {
    return (
      <div>
        <div>
            <h3>Child组件</h3>
            <p>{this.state.list}</p>
            <button onClick={()=>{this.setState({list:'2'})}}>点击</button>
        </div>
      </div>
    )
  }
//  shouldComponentUpdate(){

//  }
 UNSAFE_componentWillUpdate(){
    console.log(123);
  }
  componentDidUpdate(){
    console.log('我已更新');
  }
}
