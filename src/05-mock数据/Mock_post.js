
import React, { Component } from 'react'
import $ from 'jquery'
import './mock/check.dat'
export default class Mock_post extends Component {
  username=React.createRef()
    password=React.createRef()
  render() {

    return (
      <div>
        <h1>登录</h1>
        <label htmlFor='username'>用户名</label>
        <input id='username' ref={this.username}></input><br/>
        <lable htmlFor='password'>密码</lable>
        <input  type={'password'} id='password' ref={this.password}></input>
        <button onClick={this.handle}>登录</button>
      </div>
    )
  }
  handle=()=>{
  $.ajax({
    url:'check.php',
    type:"POST",
    dataType:'json',
    data:JSON.stringify({
      username:this.username.current.value,
      password:this.password.current.value
    }),
    contentType:'application/json',
    success:(data)=>{
      console.log(data);
      if(data.status==10001){
        location.href="manage.html";
      }else{
       alert(data.message)
      }
    }

  })
  }
}
