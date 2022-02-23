<template>
	<div class="my">

		<!-- 用户信息 -->
		<el-row type="flex" justify="space-around"  style="margin-top: 10px;" class="row-bg">
			<el-col :span="7" class="item">
				<div>
					<el-avatar :size="100" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
				</div>
			</el-col>

			<el-col class="userinfo" :span="7" v-for="(item,index) in useritem" :key='index' style="padding-top: 10px;">
				<p style="font-size: 16px; font-weight: bolder;">{{item.name}}</p>
				<p>{{item.info}}</p>
				<p style="">{{item.count}}&nbsp;关注&nbsp|&nbsp{{item.king}}&nbsp;粉丝</p>
			</el-col>

			<el-col :span="7" style="text-align: right;">
				<el-button  type="text" style='color: #000000; font-weight: bold; font-size: 15px;'>设置</el-button>
				<p style="font-size: 25px;">></p>
			</el-col>
		</el-row>

		<!-- 卡包 -->
		<el-row type="flex" justify="space-around" class="row-bg">

			<el-col :span="23" class="item" style='border-radius: 10px; background-color: #ffffff;'>
				<el-col :span="12" class="item" v-for="(item,index) in aaa" :key="index">
					<el-col :span="12">
							<p style="margin-top:3px;">{{item.Activityname}}</p>
							<p style="font-size: 13px;color: #FF0000; margin-top: 10px;">{{item.Tips}}</p>
					</el-col>
					<el-col :span="12">
						<el-avatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
					</el-col>
				</el-col>
			</el-col>
		</el-row>

	</div>
</template>

<script>
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
		props:{
			user:{
				type:Array,
				default:() =>{
					return []
				}
			},
		}
	}
</script>

<style scoped>
	.my{
		overflow: hidden;
		background-color: #f5f5f5;
	}

	.item{
		text-align: center;
		/* border: solid 2px #FF0000; */
	}
	.userinfo p{
		margin-bottom: 10px;
		font-size: 13px;
	}
</style>
