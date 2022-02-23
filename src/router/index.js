import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home=() => import('../views/Home/home')
const category=() => import('../views/category/Category')
const cart=()=> import('../views/cart/cart')
const my =()=>import('../views/my/my')

const detail =()=>import('../views/detail/childComps/detail')


const routes = [
	{
		path:'',
		redirect:'/home',
	},
	{
		path:'/home',
		component:Home
	},
	{
		path:'/category',
		component:category
	},
	{
		path:'/cart',
		component:cart
	},
	{
		path:'/my',
		component:my
	},
	{
		path:'/detail/:id',
		component:detail
	}
]

const router = new VueRouter({
  // mode: 'history',
	mode: 'hash',
	base: process.env.BASE_URL,
  routes
})

export default router
