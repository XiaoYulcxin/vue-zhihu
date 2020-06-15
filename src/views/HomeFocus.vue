<template>
	<div class="homeFocus">
		<img src="../source/FocusNotFound.png" alt="">
		<h4>暂无关注的人，为您推荐以下内容</h4>
		<About></About>
	</div>
</template>

<script>
	import About from '@/views/About.vue'
	export default {
		name: 'HomeFocus',
		components: {
			About
		}
	}
</script>
<style scoped>
	img{
		display: block;
		margin: 0 auto;
	}
	h4{
		text-align: center;
		font: 16px/60px "arial narrow";
		color: #8590A6;
	}
</style>
