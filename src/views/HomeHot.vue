<template>
	<div class="homeHot">
		<About></About>
	</div>
</template>

<script>
	import About from '@/views/About.vue'
	export default {
		name: 'HomeHot',
		components: {
			About
		}
	}
</script>
<style scoped>
	.homeFocus {
		color: orange;
	}
</style>
