<template>
	<div class="Catelist">
		<Scroll class="content" ref="scroll">
			<li
				class="leftui"
				:class="{colortype:index==iscolor}"
				@click="isclick(index)"
				v-for="(item,index) in Catelistitem" :key="index">{{item.title}}</li>
		</Scroll>
	</div>
</template>
<script>
	import Scroll from 'components/scroll/Scroll'

	export default{
		name:"Catelist",
		data(){
			return {
				iscolor:0
			}
		},
		props:{
			Catelistitem:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			Scroll
		},
		methods:{
			isclick(index){						//监听点击了谁
				this.iscolor=index
				this.$emit('isclick',index)
			}
		},
		updated() {										//页面更新数据以后重新计算上滑大小
			this.$refs.scroll.refresh()
		}
	}
</script>

<style scoped>
	.Catelist{
		height: calc(100% - 51px);
		width: 50vh;
		/* border: solid 2px #FF0000; */
		list-style: none;
		text-align: center;

	}
	.content{
		height: 100%;
		/* overflow: hidden; */
	}
	.leftui{
		/* height: 60px; */
		/* border: solid 2px #000000; */
		line-height: 60px;
	}
	.colortype{
		font-size: 25px;
		color: #ff6a00;
		font-weight: 600;
	}


</style>
