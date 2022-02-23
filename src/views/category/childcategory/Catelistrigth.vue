<template>
	<div class="Catelist">
		<Scroll class="content" ref="scroll">
			<Goodslist :goods="showGoods"></Goodslist>
		</Scroll>
	</div>
</template>
<script>
	import Scroll from 'components/scroll/Scroll'
	import Goodslist from 'components/goods/Goodslist'

	export default{
		name:"Catelist",
		data(){
			return {
				iscolor:0,
				currentType:"sell",
			}
		},
		props:{
			goods:{
				type:Object,
				default(){
					return []
				}
			}
		},
		components:{
			Scroll,
			Goodslist
		},
		computed:{
			showGoods(){
				return this.goods[this.currentType].list
			}
		},
		mounted() {
			this.$bus.$on('detailItemImageLoad',()=>{
				this.$refs.scroll.refresh()
			})
		},
		methods:{
			isclick(index){						//监听点击了谁
				this.iscolor=index
			}
		},

	}
</script>

<style scoped>
	.Catelist{
		height: calc(100% - 51px);
		width: 100vh;
		/* border: solid 2px #FF0000; */
		list-style: none;
		text-align: center;

	}
	.content{
		height: 100%;
		/* overflow: hidden; */
	}
	.leftui{
		/* height: 60px; */
		/* border: solid 2px #000000; */
		line-height: 60px;
	}
	.colortype{
		font-size: 25px;
		color: #ff6a00;
		font-weight: 600;
	}


</style>
