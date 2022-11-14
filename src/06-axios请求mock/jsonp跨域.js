import React, {Component} from 'react';
import JsonP from 'jsonp'
import Style from '@/css/style.css'
var classNames = require('classnames');

class jsonp extends Component {
    constructor() {
        super();
        this.state={
            stus:[],
            isLoading:false
        }
    }
    getStu=()=>{
        this.setState({stus:[],isLoading:true})
        JsonP("http://wz321.cp1j07.cnaaa3.com/data22.php",{/* 跨域数据 */
            param:"callback"//callback 存储jsonp函数名的变量
        },(error,res) => {
            if(res){
                console.log("res",res);
                this.setState({
                    stus:res.data,
                    isLoading:false
                })
            }else{
               console.log("error",error);
            }
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

export default jsonp;