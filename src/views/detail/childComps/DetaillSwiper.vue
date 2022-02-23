<template>
	<div class="detail-swiper">
		<swiper class="swiperr">
			<swiper-item v-for="(item,index) in topimages" :key='index'>
				<img :src="item" alt="" @load="imgLoad">
			</swiper-item>
		</swiper>
	</div>
</template>

<script>
	import {Swiper,SwiperItem} from 'components/swiper/index'

	export default {
		name:"DetailSwiper",
		props:{
			topimages:{
				type:Array,
				default(){
					return []
				}
			}
		},
		methods:{
			imgLoad(){
				this.$emit('imageLoad');
			}
		},
		components:{
			Swiper,
			SwiperItem
		}
	}
</script>

<style scoped>
	.swiperr{
		
		height: 300px;
		overflow: hidden;
	}
</style>
