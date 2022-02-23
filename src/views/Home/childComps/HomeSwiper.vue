<template>
	<swiper>
		<swiper-item v-for="(item,index) in banners" :key="index">
			<a :href="item.link">
				<img :src="item.image" @load="imageLoad" alt=""/>
			</a>
		</swiper-item>
	</swiper>
</template>

<script>
	import{Swiper,SwiperItem} from '../../../components/swiper'
	export default {
		name:"HomeSwiper",
		data() {
			return {
				isLoad:false
			}
		},
		props:{
			banners:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			Swiper,
			SwiperItem
		},
		methods:{
			imageLoad(){
				if(!this.isLoad)
					this.$emit("swiperImage")
					this.isLoad
			}
		}
	}
</script>

<style scoped>
</style>
