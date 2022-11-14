import React, { Component } from 'react'
import Style from '../css/style.css'
import classNames from 'classnames'
import axios from 'axios'
import './mock/all_data2'
import './mock/all_data2'
export default class axios发送urlencoded extends Component {
    state={
        list:[],
        list2:[],
        loading:false
    }
 
  render() {
    let{list,loading,list2}=this.state
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
        <ul className={classses}>
            {
                list2.map(item=>
                    <li key={item.id}>
                     学号:{item.id} 
                     姓名:{item.name} 
                     年龄:{item.age} 
                     性别:{item.sex} 
                    </li>
                    )
            }
        </ul>
      </div>
    )
  }
  handle=()=>{
    this.setState({loading:true})
    axios.all([ //all请求数据谁慢以谁为准(最后返回的数据的再一起返回),race以谁块为准
        axios.get('data.php'),
        axios.get('data.php')
    ]).then(axios.spread((res1,res2)=>{/* axios.spread可执行多个请求 */
          this.setState({
            list:res1.data.data,
            list2:res2.data.data,
            loading:false
          })
    }))
   
  }
}
