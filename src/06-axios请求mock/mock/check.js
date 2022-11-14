
import Mock from 'mockjs'
Mock.setup({timeout:'1000'})
Mock.mock('check.php','post',(options)=>{
var data=JSON.parse(options.body);
var username=data.username
var password=data.password
if(username=='tom'&&password=='123'){/* 不可以全等 */
   return Mock.mock({'status':'10001','message':'OK'})
}else{
   return Mock.mock({'status':'10002','message':'用户名密码错误'})
}
})
//...............................................
//fastmock写法
// {
//    'data':function({_req,Mock}){
//      let data=_req.body;
//      let username=data.username;
//      let password=data.password;
//      if(username=='tom'&&password==123){
//        return Mock.mock({'status':'10001','message':'ok'})
//      }else{
//        return Mock.mock({'status':'10002','message':'错误'})
//      }
//    }
//  }
