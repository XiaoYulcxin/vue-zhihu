<template>
	<!-- 验证码的实现 -->
	<span @click = "changeCode" title="看不清楚,换一张照片">{{code}}</span>
</template>

<script>
	export default {
		data() {
			return {
				code: '',
				letter: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a',
					's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'
				]
			}
		},
		created() {
			this.code = this.makeCode();
			sessionStorage.setItem('验证码',this.code);
		},
		methods: {
			makeCode() {
				//自动生成字母或数字,4位
				let code = [];
				for (let i = 0; i < 4; i++) {
					code[i] = this.letter[Math.ceil(Math.random() * 35)]
				}
				return code.join('')
			},
			changeCode(){
				this.code = this.makeCode();
				sessionStorage.setItem('验证码',this.code);
			}
		}
	}
</script>

<style scoped>
	span{
		display: inline-block;
		width: 60px;
		font: 20px/30px "comic sans ms";
		cursor: pointer;
		text-align: center;
		border: 1px solid #005500;
	}
</style>
