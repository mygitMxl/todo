import React, { Component } from 'react'
export default class Footer extends Component {
    render() {
        let{todoNum,filtertodo,view,cleartodo}=this.props
        return (
           <footer className="footer">
               <span className="todo-count">
                  <strong>{todoNum}</strong>
                  <span>{todoNum<2? 'item left':'items left'}</span>
              </span>
           <ul className="filters">
               <li>
                   <a href="#/all" 
                   className={view==='all'?'selected':''}
                    onClick={()=>{filtertodo('all')}}
                   >All</a>
               </li>
               <li>
                   <a href="#/active"
                    className={view==='active'?'selected':''}
                    onClick={()=>{filtertodo('active')}}
                   >Active</a>
               </li>
               <li>
                   <a href="#/complete"
                    className={view==='complete'?'selected':''}
                    onClick={()=>{filtertodo('complete')}}
                   >Complete</a>
               </li>
           </ul>
           <button className="clear-completed" onClick={cleartodo}>
               Clear commpleted
           </button>
         </footer>
        )
    }
}
