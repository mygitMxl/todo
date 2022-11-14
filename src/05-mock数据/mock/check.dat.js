
var Mock =require('mockjs')
Mock.setup({timeout:"1000-4000"})
Mock.mock('check.php' ,'post',function(options){
 console.log(options);
 options=JSON.parse(options.body)/* ajx发过来的数据 */
 if(options.username=='tom'&&options.password=='123'){
    return  Mock.mock({'status':10001,'message':"登录成功"})
 }else{
    return Mock.mock({'status':10002,'message':'用户名或密码错误'})
 }
})

