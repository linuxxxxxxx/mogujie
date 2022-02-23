<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
	import BScroll from 'better-scroll'

	export default {
		name:"Scroll",
		props:{
			probeType:{
				type:Number,
				default:0
			}
		},
		data(){
			return {
				scroll:null,
				pullUpLoad:null
			}
		},
		mounted() {
			this.scroll= new BScroll(this.$refs.wrapper,{
				click:true,
				probeType:this.probeType,
				pullUpLoad:true,

			})

				//监听滚动的位置
			this.scroll.on('scroll',(Position)=>{
				// console.log(Position)
				this.$emit('scroll',Position)
			})

			//监听上拉事件
			this.scroll.on('pullingUp',()=>{
				this.$emit('pullingUp')
			})
		},
		methods:{

			//回到顶部
			scrollTo(x,y,time=300){
				this.scroll && this.scroll.scrollTo(x,y,time)
			},

			//上拉获取更多
			finishPullUp(){
				this.scroll.finishPullUp()
			},

			//重新计算为滑动大小
			refresh(){
				this.scroll && this.scroll.refresh()
			}

		},

	}


</script>

<style scoped>

</style>
