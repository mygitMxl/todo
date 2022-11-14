import axios from 'axios'
import React, { Component } from 'react'
import Style from '../css/style.css'
var classNames =require('classnames')
export default class axios请求fastMock extends Component {
  state={
    list:[],
    loading:false
  }
  render() {
     let{list,loading}=this.state
     let classses=classNames(Style.container,{[Style.loading]:loading})
    
    return (
      <div>
        <button onClick={this.handle}>来数据</button>
        <ul className={classses}>
       {
        list.map(value=>
          <li key={value.id}>
          学号:{value.id}
          姓名:{value.name}
          年龄:{value.age}
          性别:{value.sex}
          </li>
    
        )
       }</ul>
      </div>
    )
  }

  handle=()=>{//axios 请求数据,发送数据接受数据都是json */
    this.setState({loading:true})
    const use_able =require('./config').use_able
    axios.get(`${use_able}/api`).then(res=>{/* api是接口地址 */
      console.log(res.data.data);
      this.setState({
      list:res.data.data,
      loading:false
      })
    })
  }
}
