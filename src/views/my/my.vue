<template>
	<div class="my">
		<!-- 用户信息 -->
		<userinfo :useritem="useritem"></userinfo>
		<!-- 优惠 -->
		<Discount :aaa="aaa"></Discount>

	</div>
</template>

<script>
	import userinfo from './childmy/userinfo'
	import Discount from './childmy/Discount'

	export default {
		name:"my",
		data() {
			return {
				useritem:[
					{name:"一只飞翔麻雀",info:"没有签名就是个性",count:50,king:15},
				],
				aaa:[
					{Activityname:"88VIP",Tips:'古驰新品专享',url:''},
					{Activityname:"淘宝省钱宝",Tips:'领通用红包'},
					{Activityname:"淘宝人生",Tips:'装扮我的人生'},
					{Activityname:"红包签到",Tips:'立即领取红包'},
				],
			}
		},
		components:{
			userinfo,
			Discount
		}
	}
</script>

<style scoped>
	.my{
		overflow: hidden;
		background-color: #f5f5f5;
	}
</style>
