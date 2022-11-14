import React from 'react'
import Button from './Button'
import Password from './Password'
import UserName from './UserName'
//容器组件
 const Reg= (props)=>{
   return(
    <div>
       <div>欢迎注册</div>
       <UserName name="用户名:"></UserName>
       <Password pwdname="密&nbsp;&nbsp;&nbsp;码:" id="pwd1"></Password>
       <Password pwdname="确认密码:" id="pwd2"></Password>
       <Button txt="注册"></Button>
    </div>
   )
}
export default Reg;