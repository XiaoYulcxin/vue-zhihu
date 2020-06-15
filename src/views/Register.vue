<template>
	<div id="register">
		<div id="register-client">
			<h2>知乎-注册</h2>
			<input type="text" v-model.lazy="username" placeholder="手机号或邮箱"><br />
			<input type="password" v-model.lazy="password" placeholder="请输入密码"><br />
			<input type="password" v-model.lazy="confirmPassword" placeholder="请再次输入密码"><br />
			<button @click="changeRegister">注册</button>
			<router-link to="/login">已有账号，点击登录</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Register',
		data() {
			return {
				username: '',
				password: '',
				confirmPassword: ''
			}
		},
		methods: {
			changeRegister() {
				if (this.username != '' && this.password != '' && this.confirmPassword != '') {
					if (this.password == this.confirmPassword) {
						localStorage.setItem('username', this.username);
						localStorage.setItem('password', this.password);
						alert('注册成功！')
						this.$router.push('/login');
					} else if (this.username == localStorage.getItem('username')){
						alert('该用户名已注册，请直接登录')
					} else {
						alert('注册失败，两次密码不一致')
					}
					
				} else {
					alert('请输入用户名或密码')
				}
			}
		}
	}
</script>

<style scoped="scoped">
	@import url("../css/base.css");
	
	#register{
		width: 100%;
		height: 500px;
		background: url(../source/sign_bg.db29b0fb.png) no-repeat;
		background-size: cover;
	}

	#register-client {
		width: 500px;
		background-color: white;
		text-align: center;
		padding-bottom: 50px;
		position: relative;
		top: 10%;
		left: 25%;
	}

	a {
		color: #0084FF;
		padding-left: 15px;
	}

	h2 {
		text-align: center;
		line-height: 50px;
	}

	input {
		display: inline-block;
		width: 370px;
		height: 50px;
		border: 0;
		border-bottom: 1px solid #aaaaaa;
		outline: none;
		margin-top: 15px;
	}

	.codeModel {
		width: 370px;
		height: 70px;
		border-bottom: 1px solid #AAAAAA;
		margin: 0 auto;
	}

	.codeModel input {
		width: 300px;
		border: 0;
	}

	button {
		background-color: #0084ff;
		color: #fff;
		width: 200px;
		height: 36px;
		margin-top: 40px;
		border: 0;
		cursor: pointer;
		transition: all 1s;
	}

	button:hover {
		background-color: #38a1fd;
		outline: #0084FF;
	}
</style>
