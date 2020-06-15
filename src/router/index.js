import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeTop from '../views/HomeTop.vue'
import HomeBot from '../views/HomeBot.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		name: 'Home',
		components: {
			default: Home,
			HomeTop,
			HomeBot
		},
		children: [{
				path: '',
				redirect: 'recommend'
			},
			{
				path: 'recommend',
				component: () => import('../views/HomeRecommend.vue')
			},
			{
				path: 'hot',
				component: () => import('../views/HomeHot.vue')
			},
			{
				path: 'focus',
				component: () => import('../views/HomeFocus.vue')
			}
		]
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue')
	},
	{
		path: '/navFind',
		name: 'NavFind',
		component: () => import('../nav/NavFind.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue'),
	},
	{
		path: '/register',
		name: 'Register',
		component: () => import('../views/Register.vue')
	}
]

const router = new VueRouter({
	// mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
