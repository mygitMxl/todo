import React, { Component } from 'react'
import  $ from 'jquery'
import './mock/data'
export default class Mock_get extends Component {
    state={
        content:[]
    }
  render() {
    return (
      <div>
        <button onClick={this.handle}>点击</button>
     
        <ul>
            {
              this.state.content.map(value=>{
                return (
                  <li key={value.id}>
                    学号:{value.id} 
                    姓名:{value.name}
                    性别:{value.sex}
                    年龄:{value.age}
                  </li>
                )
              })
            }
          </ul>
      </div>
    )
  }
  handle=()=>{
    $.ajax({
        url:'data.php',
        dataType:'json',
        success:(data)=>{/* 不写箭头函数,this,setstate的this指向ajax */
            console.log(data.data);
            this.setState({content:data.data})
        }
    })
  }
}
