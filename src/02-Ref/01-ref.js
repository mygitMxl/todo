import React, { Component } from 'react'

export default class APP extends Component {

  render() {
    this.mxl=React.createRef()
    return (
      <div>
        <input ref={this.mxl}></input>
        <button onClick={()=>{
      this.mxl.current.focus()
        }}>点击</button>
      </div>
    )
  }
}
