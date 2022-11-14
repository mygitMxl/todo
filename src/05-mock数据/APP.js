import React, { Component } from 'react'
import Mock_get from './Mock_get'
import Mock_post from './Mock_post'
export default class APP extends Component {
  render() {
    return (
      <div>
        <Mock_get/>
        {/* <Mock_post/> */}
      </div>
    )
  }
}
