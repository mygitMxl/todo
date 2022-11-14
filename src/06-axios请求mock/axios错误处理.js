import React, {Component} from 'react';
import axios from 'axios'
class App extends Component {
    constructor() {
        super();
        this.state={
            email:"",
            success:true,
            errormessage:""
        }
    }
    render() {
        let {success,email,errormessage} = this.state;
        return (
            <div>
                {success?<p>email:{email}</p>:<p>{errormessage}</p>}
            </div>
        );
    }
    componentDidMount() {//错误处理就是当借口地址错误是,我们用catch并且使用状态接收这个错误,自己处理这个错误（404）
        axios.get("https://randomuser.me/api")
            .then(res=>{
                console.log("res",res);
                this.setState({
                    email:res.data.results[0].email
                })
            })
            .catch(error=>{
                console.log("error",error);
                this.setState({
                    success:false,
                    errormessage:error.response.data
                })

            })
    }
}

export default App;