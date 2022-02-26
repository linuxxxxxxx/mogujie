<template>
	<div>
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
	export default{
		name:"Discount",
		props:{
			aaa:{
				type:Array,
				default:() => {
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
</style>
