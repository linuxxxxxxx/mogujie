<template>
	<div class="cart">
		<NavBar class="navbar">
			<div slot="center">购物车({{cartLength}})</div>
		</NavBar>
		<cartolist></cartolist>
		<cartbottomBar></cartbottomBar>
	</div>
</template>

<script>
	import NavBar from 'components/navbar/NavBar'

	import cartolist	from './childComps/cartolist'
	import cartbottomBar from './childComps/cartbottomBar'


	import {mapGetters} from 'vuex'

	export default {
		name:"cart",
		components:{
			NavBar,
			cartolist,
			cartbottomBar
		},
		computed:{
			...mapGetters(["cartLength","cartList"])
		}
	}
</script>

<style scoped>
	.cart{
		height: 100vh;
	}
	.navbar{
		background-color: #ff87b5;
		color: #F0F0F0;
		font-weight: 700;
	}
</style>
