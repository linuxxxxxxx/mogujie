<template>
	<div id="category">
		<Catelist
			:Catelistitem="categorylist"
			@isclick='isclick'
		>
		</Catelist>
<!-- 		<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=0 height=0 src="//music.163.com/outchain/player?type=2&id=1841002409&auto=1&height=32"></iframe>
 --><Catelistrigth :goods="goods" @itemclick="itemclick"></Catelistrigth>
	</div>
</template>

<script>

	import Catelist from './childcategory/Catelist'
	import Catelistrigth from './childcategory/Catelistrigth'

	import { getcategory,getsubcategory } from 'network/category'
	import { getHomeGoods } from 'network/home';



	export default {
		name:"Category",
		data(){
			return {
				maitkey:null,
				categorylist:[],
				goods:[],
			}
		},
		created() {
			//网络请求左边滚动数据并保存
			getcategory().then( res => {
				this.categorylist.push(...res.data.category.list)
			})
			this.maitkey=3627

			//网络请求右边item数据并保存
			getsubcategory(this.maitkey).then( res => {
				this.goods.push(...res.data.list)
			})

		},
		components:{
			Catelist,
			Catelistrigth
		},
		methods:{
			itemclick(index){													//判断点击了哪个item然后发网络请求
				console.log('没数据接口了'+index)
			},
			isclick(index){
				this.goods=[]
				this.maitkey=this.categorylist[index].maitKey
				getsubcategory(this.maitkey).then( res => {
					this.goods.push(...res.data.list)
				})
			}
		}
	}
</script>

<style scoped>
	#category{
		height: 100vh;
		padding: 0 10px;
		display: flex;
		/* flex: 2; */
		background-color: #ececec;
		overflow: hidden;
	}
</style>
