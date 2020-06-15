<template>
	<div class="hometop">
		<div id="iconContent" v-for="(item, index) in iconTagList" :key="index">
			<span :class="item.iconClass">
				<i :class="item.pic"></i>
			</span>
			<h5>{{item.tag}}</h5>
		</div>
		<div id="downContent">
			<h4>稍后答</h4>
			<h4>草稿箱</h4>
		</div>
	</div>
</template>

<script>
	// {}中为方法名
	import {
		requestIcon
	} from '../utils/RequestIcon'
	export default {
		name: 'HomeTop',
		data() {
			return {
				iconList: '',
				iconTagList: [{
					id: 1,
					pic: "glyphicon glyphicon-list",
					iconClass:"icon iconQuestion",
					tag: '回答问题'
				}, {
					id: 2,
					pic: "glyphicon glyphicon-facetime-video",
					iconClass:"icon iconVideo",
					tag: '发视频'
				}, {
					id: 3,
					pic: "glyphicon glyphicon-edit",
					iconClass:"icon iconWord",
					tag: '写文章'
				}, {
					id: 4,
					pic: "glyphicon glyphicon-compressed",
					iconClass:"icon iconWrite",
					tag: '写想法'
				}, ]
			}
		},
		created() {
			requestIcon('https://www.zhihu.com/follow', su => {
				this.iconList = su
			}, fa => {
				console.log(fa)
			})
		}
	}
</script>
<style scoped>
	@import url("../css/bootstrap.min.css");

	.hometop {
		width: 300px;
		background-color: white;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		padding: 10px;
		text-align: center;
		border-radius: 5px;
	}

	.hometop img {
		border-radius: 20px;
	}

	.hometop h5 {
		font-size: 12px;
		cursor: pointer;
	}
	
	.hometop h5:hover{
		color: #0084FF;
	}

	#downContent {
		flex-basis: 100%;
		display: flex;
		justify-content: center;
		border-top: 1px solid #eeeeee;

	}

	#downContent h4 {
		width: 150px;
		font: 15px/50px "arial black";
		color: #8590A6;
		transition: color 1s;
		cursor: pointer;
	}

	#downContent h4:hover {
		color: #0084ff;
	}

	#downContent h4:nth-of-type(1) {
		border-right: 1px solid #eee;
	}
	
	.icon{
		display: inline-block;
		width: 40px;
		height: 40px;
		border-radius: 20px;
	}

	.iconQuestion {
		background-color: #e1f1ff;
	}
	.iconVideo{
		background-color: #fff3e2;
	}
	.iconWord{
		background-color: #fef9e2;
	}
	.iconWrite{
		background-color: #e5f7f7;
	}
	.glyphicon{
		font-size: 20px;
		line-height: 35px;
	}
	.glyphicon-list {
		color: #0084FF;
	}
	.glyphicon-facetime-video{
		color: #ff9607;
	}
	.glyphicon-edit{
		color: #f4c807;
	}
	.glyphicon-compressed{
		color: #26bfbf;
	}
</style>
