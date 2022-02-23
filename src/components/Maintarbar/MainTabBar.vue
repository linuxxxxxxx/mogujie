<template>
		<tab-bar>
			<TabBarItem path="/home"a alt="">
				<template v-slot:item-icon>
					<img src="~assets/images/Home.png" alt="">
				</template>
				<template v-slot:item-icon-active>
					<img src="~assets/images/Home2.png" alt="">
				</template>
				<template v-slot:item-text>
					<p>首页</p>
				</template>
			</TabBarItem>

			<TabBarItem path="/category">
				<template v-slot:item-icon>
					<img src="~assets/images/about.png" alt="">
				</template>
				<template v-slot:item-icon-active>
					<img src="~assets/images/about2.png" alt="">
				</template>
				<template v-slot:item-text>
					<p>分类</p>
				</template>
			</TabBarItem>

			<TabBarItem path="/Cart">
				<template v-slot:item-icon>
					<img src="~assets/images/gwc.png" alt="">
				</template>
				<template v-slot:item-icon-active>
					<img src="~assets/images/gwc2.png" alt="">
				</template>
				<template v-slot:item-text>
					<p>购物车</p>
				</template>
			</TabBarItem>

			<TabBarItem path="/my">
				<template v-slot:item-icon>
					<img src="~assets/images/im.png" alt="">
				</template>
				<template v-slot:item-icon-active>
					<img src="~assets/images/im2.png" alt="">
				</template>
				<template v-slot:item-text>
					<p>我的</p>
				</template>
			</TabBarItem>
		</tab-bar>
</template>

<script>
	import TabBar from '../tabbar/TabBar.vue'
	import TabBarItem from '../tabbar/TabBarItem.vue'
	export default {
		name: "MainTabBar",
		components:{
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
</style>
