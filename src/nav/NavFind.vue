<template>
	<div id="navFind">
		<!-- 发现部分 -->
		<div id="title">
			<img src="../source/findLogo.png" alt="">
			<h3>
				最新专题
			</h3>
		</div>

		<div id="SpecialCard" v-for="(item, index) in cardList" :key="index">
			<a href="" class="CardImage">
				<img :src="item.cardPic" alt="">
			</a>
			<div id="CardInfo-header">
				<div id="CardInfo">
					<a href="" class="Info">{{item.cardName}}</a>
					<div id="Cardcount">
						<span>{{item.cardHard}}小时前更新</span>
						<span>·{{item.cardPerson}}浏览</span>
					</div>
				</div>
				<div id="CardButton">
					<button class="FloowButton">关注专题</button>
				</div>
			</div>
			<div id="CardInfoList" v-for="(content, dex) in item.list" :key="dex">
				<div id="countItem">
					<a class="contentTag">{{content.cardTag}}</a>
					<a href="" class="contentTitle">{{content.cardContent}}</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		requestFind
	} from '../utils/RequestFind'
	export default {
		name: 'NavFind',
		data() {
			return {
				cardList: ''
			}
		},
		created() {
			requestFind('https://www.zhihu.com/explore', su => {
				this.cardList = su
			}, fa => {
				console.log(fa)
			})
		}
	}
</script>

<style scoped="scoped">
	@import url("../css/base.css");

	#navFind {
		display: flex;
		flex-wrap: wrap;
	}

	#title {
		display: flex;
		flex-basis: 100%;
	}
	
	#title h3{
		line-height: 40px;
		padding-left: 10px;
	}

	#SpecialCard {
		width: 490px;
		border-radius: 5px;
		background-color: white;
		margin-left: 10px;
		margin-top: 20px;
		box-shadow: 5px 5px 20px 5px #cfcfcf;
	}

	/* header图片 */
	.CardImage {
		display: block;
		height: 200px;
	}

	.CardImage img {
		width: 100%;
		height: 100%;
		/* 使图像自适应块标签 */
		object-fit: cover;
		border-radius: 6px;
	}

	/* 内容部分 */
	#CardInfo-header {
		display: flex;
		align-items: center;
		height: 70px;
		margin: 0 24px;
		padding: 30px 0;
		border-bottom: 1px solid #ebebeb;
	}

	/* 标题 */
	#CardInfo {
		font-size: 15px;
		color: #1a1a1a;
		-webkit-tap-highlight-color: rgba(26, 26, 26, 0);
	}

	#CardInfo .Info {
		width: 330px;
		line-height: 28px;
		max-height: 56px;
		font-size: 20px;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-weight: bold;
	}

	#Cardcount span {
		margin-top: 4px;
		height: 17px;
		line-height: 17px;
		font-size: 12px;
		color: #999;
	}

	#CardButton {
		margin-left: 20px;
	}

	#CardButton button {
		border: 0;
		width: 102px;
		height: 34px;
		color: #0084ff;
		background-color: rgba(0, 132, 255, .08);
	}

	/* tagContent */
	#CardInfoList {
		margin: 20px 14px;
	}

	#CardInfoList>#countItem {
		display: flex;
		align-items: center;
		height: 24px;
	}

	#countItem .contentTag {
		padding: 0 8px;
		height: 24px;
		font: 12px/24px "微软雅黑";
		color: #8590a6;
		background-color: #f6f6f6;
		border-radius: 5px;
	}

	#countItem .contentTitle {
		width: 400px;
		font-size: 12px;
		margin-left: 12px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
