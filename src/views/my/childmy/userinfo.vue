<template>
	<div>
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
	</div>
</template>
<script>
	export default{
		name:"userinfo",
		props:{
			useritem:{
				type:Array,
				default:() =>{
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.item{
		text-align: center;
		/* border: solid 2px #FF0000; */
	}
	.userinfo p{
		margin-bottom: 10px;
		font-size: 13px;
	}
</style>
