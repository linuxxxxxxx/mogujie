<template>
	<div class="buttonbar">
		<ul class="buttonul">
			<li>
				<img src="~assets/images/kf.png" class="imglet">
				<p>客服</p>
			</li>
			<li>
				<img src="~assets/images/dp.png" class="imglet">
				<p>店铺</p>
			</li>
			<li>
				<img src="~assets/images/sc.png" class="imglet">
				<p>收藏</p>
			</li>
			<li class="butlet" @click="carclick">
				<p>加入购物车</p>
			</li>
			<li class="butright">
				<p>购买</p>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:"buttonbar",
		methods:{
			carclick(){
				this.$emit("addCart")
			}
		},
	}
</script>

<style scoped>

	.buttonbar{
		height: 55px;
		/* background-color: red; */
		position: relative;
		background-color: #ffffff;
		text-align: center;
		font-weight: 340;
		font-size: 12px;
		/* bottom: -3px; */
	}
	.buttonul{
		display: flex;
	}
	.buttonul li{
		list-style-type: none;
		flex: 5;
		/* border: solid 2px #303133; */
	}
	.imglet{
		height:25px;
		width: 30px;
		padding-top: 7px;

	}
	.butlet{
		/* border: solid 2px #000000; */
		background-color: #e8e800;
		font-weight: 430;
		font-size: 15px;
	}
	.butlet p{
		line-height: 55px;
		width: 110px;
	}
	.butright{
		/* border: solid 2px #000000; */
		background-color: #ff77be;
		font-weight: normal;
		color: #F0F0F0;
		font-size: 15px;
	}
	.butright p{
		line-height: 55px;
		width: 80px;

	}
</style>
