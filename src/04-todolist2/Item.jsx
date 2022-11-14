import React, { Component } from 'react'
export default class Item extends Component {
    state={
        edit:false,
        flag:false
    }
    myInput=React.createRef()
    handleedit=()=>{
        let {todo}=this.props
        this.setState({edit:true,flag:true},()=>{
            this.myInput.current.value=todo.value
            this.myInput.current.focus()
        })
    }
    render() {
        let{todo,deletetodo,changhasComplete,editetodo}=this.props
        let{edit,flag}=this.state
        let{handleedit}=this
        let completed=todo.hasCompleted?'completed':''
        let edits=edit?completed+'editing':completed
        return (
           <li className={edits}>
              <div className="view">
                  <input type="checkbox" className="toggle"
                   onChange={()=>{ changhasComplete(todo)}}
                   checked={todo.hasCompleted}
                  />
                  <label onDoubleClick={handleedit}>
                      {todo.value}
                  </label>
                  <button className="destroy" onClick={()=>{deletetodo(todo)}}></button>
              </div>
              <input type="text" className="edit" ref={this.myInput}
              
              onBlur={flag?(event)=>{
               this.setState({edit:false})
               todo.value=event.target.value.trim()
               editetodo(todo)
              }:null}
               onKeyUp={(event)=>{
                if(event.key==='Enter'){
                    this.setState({edit:false})
                    todo.value=event.target.value.trim()
                    editetodo(todo)
                }
                if(event.key==='Escape'){
                    this.setState({
                        edit:false,
                        flag:false
                    })
                }
               }}
              /> 
           </li>
        )
    }
}
