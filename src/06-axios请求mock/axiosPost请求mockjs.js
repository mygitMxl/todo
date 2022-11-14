import React, {Component} from 'react';
import axios from 'axios'
import Style from '@/css/style.css'
var classNames = require('classnames');
import './mock/data3'
class  AxiosPost请求mockjs extends Component {
    constructor() {
        super();
        this.state={
            stus:[],
            isLoading:false
        }
    }
    getStu=()=>{//axios 请求数据,发送数据接受数据都是json */
        this.setState({stus:[],isLoading:true})
        axios.post("data11.php",{
                name:"赵四",
                age:'18'
        })
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
            11111
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

export default  AxiosPost请求mockjs