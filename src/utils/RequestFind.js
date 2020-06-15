import axios from 'axios'
import Mock from 'mockjs'

export function requestFind(url, succ, fail){
	//创建一个拦截器
	const instance = axios.create({
		method: 'get'
	})
	instance(url).then(res=>{succ(res.data.list)}).catch(err=>{fail(err)})
	Mock.mock(url,{
		'list|3-5':[{
			"id|+1":1,
			"cardPic":Mock.Random.image('490x200'),
			"cardName":"@ctitle",
			"cardHard|1-24":1,
			"cardPerson|10000-1000000":10000,
			"list|1-3":[{
				"cardTag":"@ctitle(2)",
				"cardContent":"@cparagraph"
			}]
			
		}]
	})
}