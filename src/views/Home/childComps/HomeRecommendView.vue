<template>
	<div class="recommend">
		<div v-for="(item,index) in recommends" :key="index" class="recommends-item">
			<a :href="item.link">
				<img :src="item.image" >
				<p>{{item.title}}</p>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name:"HomeRecommendView",
		props:{
			recommends:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.recommend a:hover{
		color: #000000;
	}
	.recommend a:link{
		color: #000000;
		text-decoration: none;
	}
	.recommend{
		display: flex;
		width: 100%;
		text-align: center;
		font-size: 12px;
		font-family: "黑体";
		padding: 15px 0 15px;
		border-bottom: 5px solid #eee;
	}
	.recommends-item{
		flex: 1;
	}
	.recommends-item img{
		width: 70px;
		height:70px ;
		margin-bottom: 2px;
	}
</style>
