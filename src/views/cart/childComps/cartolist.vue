<template>
	<div class="cartlist">
		<scroll class="content" ref="scroll">
			 <Cartlistitem v-for="(item,index) in cartList"
					:item-info="item"
					:key="index">
				</Cartlistitem>
		</scroll>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'

	import Cartlistitem from './Cartlistitem'

	import scroll from 'components/scroll/Scroll'

	export default {
		name:"cartolist",
		components:{
			scroll,
			Cartlistitem
		},
		computed:{
			...mapGetters(["cartList"])
		},
		activated() {
			this.$refs.scroll.refresh()

		}
	}

</script>

<style scoped>
	.cartlist{
		height: calc(100% - 44px - 49px - 40px);
	}
	.content{
		height: 100%;
		overflow: hidden;
	}
</style>
