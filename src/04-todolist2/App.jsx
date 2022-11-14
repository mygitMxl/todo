//第6次todo用时1小时10分钟
import React, { Component } from 'react'
import Item from './Item'
import Footer from './Footer'
import './css/index.css'
import '../05-mock数据/mock/data'
export default class App extends Component {  
  state={
    todoData:[],
    todoNum:'',
    view:'all',
    flag:false
  }
  //添加
  addtodo=(event)=>{
    if(event.key!=='Enter') return
    if(event.target.value.trim()==='') return
    let{todoData,todoNum}=this.state
    let todo={}
    todo.id=Math.random()*100000
    todo.value=event.target.value.trim()
    todo.hasCompleted=false
    todoData.push(todo)
    todoNum++
    this.setState({
      todoData,todoNum
    })
    event.target.value=''
  }
  //删除
  deletetodo=(todo)=>{
    let{todoData,todoNum}=this.state
    todoData=todoData.filter(item=>{
     if(todo.id===item.id){
      todoNum--
      return false
     }else{
      return true
     }
    })
    this.setState({
      todoData,todoNum
    })
  }
  //改变状态
  changhasComplete=(todo)=>{
    let{todoData,todoNum}=this.state
    todoData=todoData.map(item=>{
      if(item.id===todo.id){
        item.hasCompleted=!item.hasCompleted
        if(todo.hasCompleted){
          todoNum--
        }else{
          todoNum++
        }
      }
      return item
    })
    this.setState({
      todoData,todoNum
    })
  }
  //编辑
  editetodo=(todo)=>{
    let{todoData}=this.state
    todoData=todoData.map(item=>{
      if(item.id===todo.id){
        item.value=todo.value
      }
      return item
    })
    this.setState({
      todoData
    })
  }
  //改变状态
  filtertodo=(view)=>{
    this.setState({view})
   }
   //全选全部选
   isALL=()=>{
    let{todoData,todoNum,flag}=this.state
    flag=!flag
    todoData=todoData.map(item=>{
      if(flag){
        item.hasCompleted=true
      }else{
        item.hasCompleted=false
      }
      return item
    })
    if(flag){
      todoNum=0
    }else{
      todoNum=todoData.length
    }
    this.setState({
      todoData,todoNum,flag
    })
   }
   //全部清除
   cleartodo=()=>{
    let{todoData,todoNum}=this.state
    todoData=todoData.filter(item=>{
      if(item.hasCompleted){
        return false
      }else{
        return true
      }
   })
   this.setState({todoData})
  }
    render() {
      let{todoData,todoNum,view,flag,}=this.state
      let{addtodo,deletetodo, changhasComplete, editetodo,filtertodo,isALL,cleartodo}=this

      let filterTodos=todoData.filter(item=>{
        switch(view){
          case 'all':
            return true
          case 'active':
            return !item.hasCompleted  
          case 'complete':
            return item.hasCompleted  
        }
      })
      let items=filterTodos.map(item=>{
        return <Item key={item.id} todo={item} deletetodo={deletetodo}  changhasComplete={ changhasComplete} editetodo={editetodo}/>
      })
        return (
            <section className='todoapp'>
               <header className="header">
                    <h1>Todos</h1>  
           <input className='new-todo' placeholder='What needs to be ?' onKeyUp={addtodo}/>
               </header>
               <section className="main">
                  <input id="toggle-all" type="checkbox" className="toggle-all" onChange={isALL}/>
                  <label htmlFor="toggle-all"></label>
                  <ul className="todo-list">
                  {items}
                  </ul>
               </section>
               <Footer todoNum={todoNum} view={view} filtertodo={filtertodo} cleartodo={cleartodo}/>
            </section>
        )
    }
}