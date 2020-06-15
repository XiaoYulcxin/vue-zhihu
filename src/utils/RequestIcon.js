import axios from 'axios'
import Mock from 'mockjs'

export function requestIcon(url, succ, fail){
	const instance = axios.create({
		method:'get'
	})
	
	instance(url).then(res=>{succ(res.data.list)}).catch(err=>{fail(err)})
	
	Mock.mock(url,{
		'list|4':[{
			"id|+1":1,
			"icon":Mock.Random.image('40x40'),
			"title":'@ctitle(1,3)'
		}]
	})
}