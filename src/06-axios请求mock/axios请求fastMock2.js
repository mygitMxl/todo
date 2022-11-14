import axios from 'axios'
import React, { Component } from 'react'

export default class axios请求fastMock2 extends Component {
  username=React.createRef()
  password=React.createRef()   
  state={
    list:[]
  }
  render() {
    return (
      <div>
        <h1>登录验证</h1>
        <input ref={this.username} placeholder="用户名"></input>
        <input ref={this.password} type={'password'} placeholder='密码'></input>
        <button onClick={this.handle}>登录</button>
      </div>
    )
  }
  handle=()=>{//axios 请求数据,发送数据接受数据都是json */
  const use_able =require('./config').use_able//接口跟地址与上个文件是相同的,直接换接口即可
  axios.post(`${use_able}/login`,{
     username:this.username.current.value,
     password:this.password.current.value
  }).then(res=>{
    if(res.data.data.status=='10001'){//不要忘记加data
      location.href='123.html'
    }else{
      alert(res.data.data.message)
    }
  })
 
  }
}
