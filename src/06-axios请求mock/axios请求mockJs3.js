import axios from 'axios'//axios 请求数据,发送数据接受数据都是json */
import React, { Component } from 'react'
import './mock/data2'
import Style from  '../css/style.css'
var classNames=require('classnames')
export default class axios请求fastMock extends Component {
  state={
    list:[],
    loading:false
  }

  render() {
    let{loading}=this.state
    let classes=classNames(Style.container,{[Style.loading]:loading})
    return (
      <div>
        <button onClick={this.handle}>取数据</button>
        <ul className={classes} >
          {
            this.state.list.map(value=>{
              return (
                <li key={value.id}>
                  学号:{value.id} 
                  姓名:{value.name} 
                  年龄:{value.age} 
                  性别:{value.sex} 
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
  handle=()=>{//axios 请求数据,发送数据接受数据都是json */
    this.setState({loading:true})
    axios.get('data.php?',{
      params:{
        name:"xixi"
      }
    }).then(res=>{
      console.log(res.data);
      this.setState({list:res.data.data,
      loading:false
      })
    })
  }
}
