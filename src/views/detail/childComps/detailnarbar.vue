<template>
	<div>
		<NavBar>
			<div slot="left" class="back" @click="back">
				<img src="~assets/images/back.png" alt="">
			</div>
			<div slot="center" class="title">
				<div v-for="(item,index) in titles"
						 class="titleitem" :class="{active:index===currentIndex}"
						 @click="titleClick(index)">
					{{item}}
				</div>
			</div>
		</NavBar>
	</div>

</template>

<script>
	import NavBar from 'components/navbar/NavBar.vue'

	export default {
		name:"detailnavbar",
		components:{
			NavBar
		},
		data(){
			return {
				titles:["商品","参数","评论",'推荐'],
				currentIndex:0
			}
		},
		methods:{
			titleClick(index){
				this.currentIndex=index
				this.$emit('titleClick',index)
			},
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	.title{
		display: flex;
	}
	.titleitem{
		flex: 1;
	}
	.active{
		color: red;
	}
	.back img{
		width: 25px;
		height: 25px;
		margin-top: 10px;
	}
</style>
