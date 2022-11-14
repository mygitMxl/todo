import React, { Component } from 'react'
import Style from '../css/style.css'
import classNames from 'classnames'
import axios from 'axios'
import './mock/urlencoded'
export default class axios发送urlencoded extends Component {
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
            }
        </ul>
      </div>
    )
  }
  handle=()=>{
    let url =new URLSearchParams()
    url.append('name','刘能能')
    url.append('age','199')//append添加数据
    this.setState({loading:true})
    axios({/* axios 的配置式写法,在这里发送的数据是urlencoded */
        url:'url.php',
        method:'post',
        data:url,
    }).then(res=>{
      this.setState({
        list:res.data.data,
        loading:false
      })
    })
  }
}
