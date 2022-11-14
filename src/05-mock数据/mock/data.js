// var Mock = require('mockjs');
// Mock.setup({ timeout: '1000-4000' });

// Mock.mock('data.php', {
//     "data|1-6": [{   // 随机生成1到6个数组元素
// 	    'id|+1': 88,    // 属性值自动加 1，初始值为88
//         'name|1': ["@cname","@cname","@cname","@cname","@cname"],    /* 5个随机名字选一个 */    
//         'age|18-28': 0,   // 18至28以内随机整数, 0只是用来确定类型
// 		'sex|1':['男',"女"]
//     }]
// });
var Mock=require('mockjs')
Mock.mock({timeout:'1000-4000'})
Mock.mock('data.php',{
    'data|1-6':[{
        'id|+1':88,
        'name|1':['@cname','@cname','@cname','@cname','@cname'],
        'sex|1':['男','女'],
        'age|10-20':0
    }]
})