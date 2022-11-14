import React, {Component} from 'react';
import Child from "./Child";

class App extends Component {
    constructor() {
        super();
        this.state={
            x:200
        }
    }
    render() {
        let {x}=this.state;
        return (
            <div>
                <h3>App组件</h3>
                <hr/>
                <Child x={x} />
            </div>
        );
    }
}

export default App;
//..................................
