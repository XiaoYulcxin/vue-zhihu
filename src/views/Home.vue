<template>
	<div class="home">
		<div id="content">
			<router-link to="/home/recommend" class="router-active">推荐</router-link>
			<router-link to="/home/focus">关注</router-link>
			<router-link to="/home/hot">热榜</router-link>
		</div>
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'Home'
	}
</script>
<style scoped>
	.home {
		width: 700px;
		float: left;
		margin-top: 10px;
		background-color: white;
	}
	#content{
		border-bottom: 1px solid #eee;
	}
	a{
		text-decoration: none;
		line-height: 40px;
		height: 100px;
		margin: 0 22px;
		color: inherit;
	}
	.router-link-active{
		color: #0084ff;
	}
</style>
