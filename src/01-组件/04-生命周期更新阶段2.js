import React, { Component, PureComponent } from 'react'

export default class APP extends  PureComponent {
   state={
    name:'我是帅哥'
   }
  render() {
    return (
      <div>
        <button onClick={()=>{this.setState({name:'mxl'})}}>按钮</button>
        <Child name={this.state.name}/>
      </div>
    )
  }
}
//。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
class Child extends Component{
    state={
        name:'嘿嘿'
    }
    UNSAFE_componentWillMount(){
        console.log('挂载阶段1');
    }
    componentDidMount(){
        console.log('挂载阶段2');
    }
    render(){
        console.log('挂载阶段3');
        return(
            <div>{this.state.name}</div>
        )
    }
    UNSAFE_componentWillReceiveProps(nexProps){
       if(this.props.name!==nexProps.name){
        this.setState({name:'好'})
       }
    }
    componentDidUpdate(){
        console.log('321');
    }
}