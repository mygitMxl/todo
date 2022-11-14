import React, { Component } from 'react'
import axios from 'axios'
import './mock/check'
export default class axiosPost请求Mockjs2 extends Component {
    state={
        list:[],
        loading:false
    }
    username=React.createRef()
    password=React.createRef()    
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
  handle=()=>{
   axios.post('check.php',{/* axios 收发默认是json */
     username:this.username.current.value,
     password:this.password.current.value
   }).then(ref=>{
    if(ref.data.status==='10001'){
      location.href='hdas.html'
    }else{
      alert(ref.data.message)
    }
   })
  }
}
