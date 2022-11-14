import axios from 'axios';
import React, { Component } from 'react'

export default class APP extends Component {
    state={
        name:'mxl'
    }
    componentDidMount(){
        // console.log(this.state.name);
        
    }
   render(){
    return(
        <div>
            <Child name={this.state.name}/>
            <button onClick={()=>{
                this.setState({
               name:'xixi'
                })
            }}>点击</button>
        </div>
    )
   }
}
//...........................
class Child extends Component{
    state={
        name:'',
        list:[]
    }
    static getDerivedStateFromProps(nexProps){/* 替换了componentwillrecerverprops */
        console.log(nexProps);
       return {
       name:nexProps.name
       }
    }
  
  render() {
    console.log('2');
    return (
      <div>
       <p>{this.state.name}</p>
      </div>
    )
  }
}