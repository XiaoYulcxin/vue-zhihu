import axios from 'axios'
import Mock from 'mockjs'

export function request(url, succ, fail){
	// 创建一个拦截器
    const instance = axios.create({
        method: 'get'
    })
    instance(url).then(res=>{succ(res.data.list)}).catch(err=>{fail(err)})

    Mock.mock(url,{
        'list|3-5':[{
            "id|+1": 1,
            "pic": Mock.Random.image('30x30'),
            "username": "@cname",
            "title": "@ctitle",
            "image":Mock.Random.image('200x150', '#50B347', '#FFF', 'Mock.js'),
            "paragraph": "@cparagraph"
        }]
    })
}
