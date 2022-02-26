<template>
	<div class="Catelist">
		<Scroll class="content" ref="scroll">

			<div class="goods">
				<div v-for="(item,index) in goods" class="Goodslistitem" :key="index" @click="itemclick(index)">
					<img :src="item.image" @load="imageload">
					<div class="goods-info">
						<p>{{item.title}}</p>
					</div>
				</div>

			</div>

		</Scroll>
	</div>
</template>
<script>
	import Scroll from 'components/scroll/Scroll'
	import Goodslist from 'components/goods/Goodslist'

	import { debouce } from 'common/utils'

	export default{
		name:"Catelist",
		data(){
			return {

			}
		},
		props:{
			goods:{
				type:Array,
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
		methods:{
			itemclick(index){						//监听点击了谁
				this.$emit("itemclick",index)
			},
			imageload(){									//通知scroll重新计算大小
				this.$refs.scroll.refresh()
			}
		},

	}
</script>

<style scoped>
	.Catelist{
		height: calc(100% - 51px);
		width: 100vh;
		border: solid 2px #ffff00;
		list-style: none;
		text-align: center;
		background-color: #ffffff;
	}
	.content{
		height: 100%;
	}


	.goods{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		padding: 2px;
	}
	.Goodslistitem {
	  padding-bottom: 30px;
	  position: relative;

	  width: 43%;
	}

	.Goodslistitem img {
	  width: 100%;
	  border-radius: 5px;
	}

	.goods-info {
	  font-size: 12px;
	  position: absolute;
	  bottom: 5px;
	  left: 0;
	  right: 0;
	  overflow: hidden;
	  /* text-align: center; */
	}

	.goods-info p {
	  overflow: hidden;
	  text-overflow: ellipsis;
	  white-space: nowrap;
	  margin-bottom: 3px;
	}

	.goods-info .price {

	  margin-right: 20px;
	}

	.goods-info .collect {
	  position: relative;
	}

	.goods-info .collect::before {
	  content: '';
	  position: absolute;
	  left: -15px;
	  top: -1px;
	  width: 14px;
	  height: 14px;
	  /* background: url("~assets/img/common/collect.svg") 0 0/14px 14px; */
	}





</style>
