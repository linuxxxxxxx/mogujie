<template>
	<div id="category">
		<Catelist
			:Catelistitem="categorylist"
		></Catelist>
<!-- 		<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=0 height=0 src="//music.163.com/outchain/player?type=2&id=1841002409&auto=1&height=32"></iframe>
 --><Catelistrigth :goods="goods"></Catelistrigth>
	</div>
</template>

<script>

	import Catelist from './childcategory/Catelist'
	import Catelistrigth from './childcategory/Catelistrigth'

	import { getcategory } from 'network/category'
	import { getHomeGoods } from 'network/home';



	export default {
		name:"Category",
		data(){
			return {
				categorylist:[],
				goods:{
					"sell":{page:0,list:[]}
				},
			}
		},
		created() {
			//请求左边滚动数据
			getcategory().then( res => {
				this.categorylist.push(...res.data.category.list)
			})

			this.getHomeGoods("sell")

		},
		components:{
			Catelist,
			Catelistrigth
		},
		methods:{
			getHomeGoods(type){
				this.goods[type].page=0
				const page=this.goods[type].page+1
				getHomeGoods(type,page).then(res =>{
					console.log(res);
					this.goods[type].list.push(...res.data.list)
				})
			}
		}
	}
</script>

<style scoped>
	#category{
		position: relative;
		height: 100vh;
		padding: 0 10px;
		display: flex;
		flex: 2;
		background-color: #ececec;
		overflow: hidden;
	}
</style>
