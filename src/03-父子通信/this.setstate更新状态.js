
import React, { Component } from 'react'

export default class App extends Component {

    state={
        count:0
    }
    handdleClick=()=>{
        let {count}=this.state;
        this.setState({count:count+1});
    }
  render() {
    let {count}=this.state;
    console.log("render");
    return (
      <div>
        <h3>计数器</h3>
        <p>count:{count}</p>
        <button onClick={this.handdleClick}>+</button>
      </div>
    )
  }
  componentDidMount(){/* 先走同步再走异步 */
    console.log("同步语句1------>count值:",this.state.count);
    this.setState((prevState,porps)=>({count:prevState.count+1}));
    console.log("同步语句1------>count值:",this.state.count);
    this.setState((prevState,porps)=>({count:prevState.count+1}));
    console.log("同步语句1------>count值:",this.state.count);

    }
    
}





















// import React, { Component } from 'react'

// export default class APP extends Component {
//     state={
//         count:0
//     }
//     componentDidMount(){/* 这里的setState执行的是异步*/
//         console.log(123);
//         this.setState({count:this.state.count+1})
//         console.log(this.state.count);
//         this.setState({count:this.state.count+1})
        
//     }
//   render() {
//     console.log('render');
//     return (
//       <div>{this.state.count}</div>
//     )
//   }
// }
