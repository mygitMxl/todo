import Mock from 'mockjs'
// 设置4秒后再响应
Mock.setup({ timeout:'1000'});
// Mock响应模板
Mock.mock('data11.php','post', function(options) {
    console.log("options",options);
    var data=JSON.parse(options.body) /* post方法需要将json方法转为字符串 */
     var name=data.name;
     var age=data.age
    return Mock.mock({
        'data|1-2':[{
            'id|+1':1,
            'name|1':['@cname',name],
             'age|1':[20,10,100,age],
             'sex|1':['男','女']
        }]
    })   
});

