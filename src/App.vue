<template>
	<div id="app">
		<div id="nav">
			<div id="nav-center">
				<img src="@/source/logo.png" alt="">
				<router-link to="/home">首页</router-link>
				<router-link to="/navFind">发现</router-link>
				<div class="hiddenBox"></div>
				<router-link to="/login" v-if="loginShow">登录/注册</router-link>
				<div class="SignBox" v-else>
					<img src="./assets/logo.png" alt="">
					<button @click="exit">{{username}}</button>
				</div>
			</div>
		</div>
		<div id="center">
			<div id="main-content">
				<router-view />
				<div id="homeright">
					<router-view name="HomeTop" />
					<router-view name="HomeBot" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'App',
		data() {
			return {
				loginShow: true,
				username: sessionStorage.getItem('username')
			}
		},
		methods: {
			exit() {
				if (confirm('确定要注销吗')) {
					sessionStorage.clear();
					alert('注销成功');
					location.reload();
				}
			}
		},
		created() {
			alert('欢迎登录欧阳小灿知乎系统');
			console.log('18软件4班 李灿欣');
			//如果sessionStorage中没有username
			if (sessionStorage.getItem('username') != null) {
				this.loginShow = false;
			} else {
				//如果sessionStronge没有username，则进行拦截跳转至登录页面
				alert('您未登录，请登录')
				this.loginShow = true;
				this.$router.replace('/login')
			}
		},
	}
</script>
<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}

	#nav-center {
		display: flex;
		justify-content: flex-start;
		width: 1000px;
		margin: 0 auto;
	}

	#nav {
		a {
			text-decoration: none;
			text-align: center;
			margin-left: 15px;
			height: 50px;
			padding: 0 17px;
			font-weight: bold;
			line-height: 50px;
			color: #bebebe;
		}

		a:hover {
			color: darkgrey;
		}

		.router-link-active {
			color: black;
			border-bottom: 2px solid #0084ff;
		}
	}

	#main-content{
		width: 1050px;
		margin: 0 auto;
		background-color: #f6f6f6;
	}

	#nav img {
		margin-top: 5px;
	}

	.hiddenBox {
		width: 600px;
	}

	.SignBox img {
		position: relative;
		width: 20px;
		height: 20px;
	}

	.SignBox button {
		width: 70px;
		height: 50px;
		border: 0;
		background-color: rgba($color: #000000, $alpha: 0);
		cursor: pointer;
	}

	h5 {
		line-height: 50px;
	}

	#center {
		background-color: #f6f6f6;
		padding-top: 15px;
	}

	.main::after {
		display: block;
		content: '';
		visibility: hidden;
		height: 0;
		clear: both;
	}

	#homeright {
		float: right;
		margin: 10px;
	}
</style>
