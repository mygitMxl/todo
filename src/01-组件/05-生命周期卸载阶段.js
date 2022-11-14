import React, { Component } from 'react'
var time
export default class APP extends Component {
    state={
        btn:'true'
    }

 handle(){
    console.log(this);
    this.setState({btn:!this.state.btn})
}
  render() {
    return (
      <div>
        <button onClick={()=>{
        this.handle()
        }}>change</button>
          {this.state.btn&&<Child/>}{/* false为销毁,在销毁组件之前触发卸载阶段 */}
      </div>
    )
  }  
}
class Child extends Component{
    componentDidMount(){
        time=setInterval(() => {
                console.log(111);
            },1000);
        }
        componentWillUnmount(){
            clearInterval(time)
            console.log('1123');
        }
    render(){
        return(
            <div>
                <div style={{width:'100px',height:'100px',background:'green'}}></div>
            </div>
        )
    }
}
