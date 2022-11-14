import Mock from 'mockjs'
Mock.setup({timeout:'1000-2000'})
Mock.mock('url.php','post',(option)=>{
    let url=new URLSearchParams(option.body)
    let name=url.get('name')
    let age=url.get('age')
    return Mock.mock({
        'data|1-5':[{
            'id|+1':1,
            'name|1':['@cname','@cname','@cname',name],
            'sex|1':['男','女'],
            'age|1':['10','20',age]
        }]
    })
})