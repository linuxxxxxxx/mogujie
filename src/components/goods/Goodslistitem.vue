<template>
	<div class="Goodslistitem" @click="itemclick">
		<img :src="showimage" @load="imageLoad">
		<div class="goods-info">
			<p>{{goodsitem.title}}</p>
			<span class="price">{{goodsitem.price}}</span>
			<span class="collect">{{goodsitem.cfav}}</span>
		</div>
	</div>
</template>

<script scoped>
	export default {
		name:"Goodslistitem",
		props:{
			goodsitem:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		computed:{
			showimage(){
				return this.goodsitem.image || this.goodsitem.show.img
			}
		},
		methods:{
			imageLoad(){
				if (this.$route.path=='/home'){
					this.$bus.$emit('itemImageLoad')
				}else if (this.$route.path.indexOf('detail')){
					this.$bus.$emit('detailItemImageLoad')
				}
			},
			itemclick(){
				this.$router.push('/detail/' + this.goodsitem.iid)
			}
		}
	}
</script>

<style scoped>
	.Goodslistitem {
	  padding-bottom: 40px;
	  position: relative;

	  width: 48%;
	}

	.Goodslistitem img {
	  width: 100%;
	  border-radius: 5px;
	}

	.goods-info {
	  font-size: 12px;
	  position: absolute;
	  bottom: 5px;
	  left: 0;
	  right: 0;
	  overflow: hidden;
	  text-align: center;
	}

	.goods-info p {
	  overflow: hidden;
	  text-overflow: ellipsis;
	  white-space: nowrap;
	  margin-bottom: 3px;
	}

	.goods-info .price {

	  margin-right: 20px;
	}

	.goods-info .collect {
	  position: relative;
	}

	.goods-info .collect::before {
	  content: '';
	  position: absolute;
	  left: -15px;
	  top: -1px;
	  width: 14px;
	  height: 14px;
	  /* background: url("~assets/img/common/collect.svg") 0 0/14px 14px; */
	}
</style>
