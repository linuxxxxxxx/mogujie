<template>
	<div class="goods">
		<goodslistitem v-for="(item,index) in goods" :key="index" :goodsitem="item"></goodslistitem>
	</div>
</template>

<script>
	import Goodslistitem from './Goodslistitem'
	
	export default {
		name:"Goodslist",
		props:{
			goods:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			Goodslistitem
		}
	}
</script>

<style scoped>
	.goods{
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: space-evenly;
	
	  padding: 2px;
	}
</style>
