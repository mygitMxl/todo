import React, {Component} from 'react';
import axios from 'axios'
import Style from '@/css/style.css'
var classNames = require('classnames');
import './mock/data2'
class App extends Component {
    constructor() {
        super();
        this.state={
            stus:[],
            isLoading:false
        }
    }
    getStu=()=>{
        this.setState({stus:[],isLoading:true})
        axios.get("data.php?name=petter")
            .then(res=>{
                console.log("res",res);
                this.setState({
                    stus:res.data.data,
                    isLoading:false
                })
            })
    }
    render() {
        let {stus,isLoading}=this.state;
        let className=isLoading?classNames(Style.container,Style.loading):Style.container;
        return (
            <>
               <button onClick={this.getStu}>get student</button>
                <div className={className}>
                    <ul>
                        {
                            stus.map(value=>{
                                return (
                                    <li key={value.id}>
                                        学号:{value.id}
                                        姓名:{value.name}
                                        年龄:{value.age}
                                        性别:{value.sex}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </>
        );
    }

}

export default App;