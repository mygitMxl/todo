import React, {Component} from 'react';
import axios from 'axios'
import Style from '@/css/style.css'
var classNames = require('classnames');
import './mock/data'
class axios请求拦截器 extends Component {
    constructor() {
        super();
        this.state={
            stus:[],
            isLoading:false
        }
    }
    getStu=()=>{
        axios.get("data.php")
            .then(res=>{
                console.log("res",res);
                this.setState({
                    stus:res.data.data,
                })
            })
    }
    getStu2=()=>{
        axios.get("data.php")
            .then(res=>{
                console.log("res",res);
                this.setState({
                    stus:res.data.data,
                })
            })
    }
    render() {
        let {stus,isLoading}=this.state;
        let className=isLoading?classNames(Style.container,Style.loading):Style.container;
        return (
            <>
               <button onClick={this.getStu}>get student</button>
               <button onClick={this.getStu2}>get student2</button>
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
    componentDidMount() {
        axios.interceptors.request.use(config=>{/* 请求拦截器 */
            this.setState({stus:[],isLoading:true});
            console.log(config);
            return config;
        })
        axios.interceptors.response.use(config=>{/* 响应拦截器 */
            console.log("response config",config);
            //统一管理loading
            this.setState({
                isLoading:false
            })
            return config;
        })
    }
    
}

export default axios请求拦截器;