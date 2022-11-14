var Mock=require('mockjs')//URLSearchParams是一种Web API ，它是一种快速构造和获取URL查询参数的方法
Mock.setup({timeout:'1000-4000'})
Mock.mock('data.php? name=petter','get',function(option){/* option,axios传过来的数据 */
    let urldata=new URLSearchParams(option.url.substr(8))//截取axios路径data.php//括号里直接写option.body也可以
    let name =urldata.get('name')
    return Mock.mock({
        'data|1-6':[{
            'id|+1':99,
             'name|1':['@cname','@cname',name],
              'age|10-20':0,
              'sex|1':['男','女']
        }]
    })
})
