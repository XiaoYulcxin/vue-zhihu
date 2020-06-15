<template>
	<div class="homebot">
		<div id="nav-source" v-for="(item, index) in BootomData" :key="index">
			<span :class="item.iconClass">
				<i :class="item.src"></i>
			</span>
			<h5>{{item.title}}</h5>
		</div>
		<div id="adv">
			<img src="https://pic2.zhimg.com/v2-1ffaaa2e88bb1b3efa720dcee7a73445_540x450.jpeg" alt="">
		</div>
		<div id="copyRight">
			<h5>联系我们&copy;2020&nbsp;欧阳小灿</h5>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HomeBot',
		data() {
			return {
				BootomData: [{
					id: 1,
					src:'glyphicon glyphicon-thumbs-up',
					iconClass:'icon iconLive',
					title:'Live'
				}, {
					id:2,
					iconClass:'icon iconBook',
					src:'glyphicon glyphicon-book',
					title:'书店'
				}, {
					id:3,
					iconClass:'icon iconDesk',
					src:'glyphicon glyphicon-cd',
					title:'圆桌'
				}, {
					id:4,
					iconClass:'icon iconFocus',
					src:'glyphicon glyphicon-pencil',
					title:'专栏'
				}, {
					id:5,
					iconClass:'icon iconCheck',
					src:'glyphicon glyphicon-yen',
					title:'付费查询'
				}, {
					id:6,
					iconClass:'icon iconBaike',
					src:'glyphicon glyphicon-education',
					title:'百科'
				}]
			}
		},
	}
</script>
<style>
	@import url("../css/bootstrap.min.css");
	.homebot {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 321px;
		margin-top: 15px;
	}

	#nav-source {
		width: 107px;
		background-color: white;
		border-radius: 5px;
		text-align: center;
		padding-top: 15px;
	}

	#nav-source img {
		border-radius: 20px;
	}

	#nav-source h5 {
		font: 14px/40px "comic sans ms";
		color: #8590A6;
		cursor: pointer;
	}

	#nav-source h5:hover {
		color: #0084FF;
	}

	#adv {
		margin-top: 15px;
	}

	#adv img {
		width: 100%;
		height: 100%;
	}
	.glyphicon{
		font-size: 20px;
	}
	.glyphicon-thumbs-up{
		color: yellow;
	}
	.glyphicon-book{
		color: #43d480;
	}
	.glyphicon-cd{
		color: #0084ff;
	}
	.glyphicon-pencil{
		color: #1e8fec;
	}
	.glyphicon-yen{
		color: #5478f0;
	}
	.glyphicon-education{
		color: #5868d1;
	}
</style>
