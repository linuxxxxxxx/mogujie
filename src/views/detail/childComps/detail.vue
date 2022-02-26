<template>
	<div id="detail1">
		<detailnarbar ref="nav" class="detail-nav" @titleClick="titleClick"></detailnarbar>
		<Scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
			<DetailSwiper :topimages="topimages" @imageLoad="imageLoad"></DetailSwiper>
			<DetailBaseInfo :goods="goods"></DetailBaseInfo>
			<DetailShopInfo :shop="shop"></DetailShopInfo>
			<DetailgoodsInfo :detail-info="detailInfo" @imageLoad="imageLoad"></DetailgoodsInfo>
			<DetailParamInfo ref="params" :paramInfo="paramInfo"></DetailParamInfo>
			<DetailCommentInfo ref="comment" :commentInfo="commentInfo"></DetailCommentInfo>
			<GoodsList ref="recommend" :goods="recommeds"></GoodsList>
		</Scroll>
		<backtop class="backtop" @click.native="backClick" v-show="isShowBacktop"></backtop>
		<buttonbar @addCart="addToCart"></buttonbar>
	</div>
</template>

<script>
	import detailnarbar from './detailnarbar'
	import DetailSwiper from './DetaillSwiper'
	import DetailBaseInfo from './DetailBaseInfo'
	import DetailShopInfo from './DetailShopInfo'
	import DetailgoodsInfo from './DetailGoodsInfo'
	import DetailParamInfo from './DetailParamInfo'
	import DetailCommentInfo from './DetailCommentInfo'
	import buttonbar from './buttonbar'


	import Scroll from 'components/scroll/Scroll'
	import GoodsList from 'components/goods/Goodslist'
	import backtop from 'components/backtop/backtop'

	import {getDetail,Goods,Shop,GoodsParam,getrecommend} from 'network/detail'

	import {itemListenerMixin} from '../../../common/mixin'
	import {debouce} from '../../../common/utils'

	import { mapActions } from 'vuex'

	export default {
		name:"detail",
		data() {
			return {
				iid:null,
				topimages:[],
				goods:{},
				shop:{},
				detailInfo:{},
				paramInfo:{},
				commentInfo:{},
				recommeds:[],
				themeTopYs:[],
				getThemeTopY:null,
				currentIndex:null,
				isShowBacktop:false,
			}
		},
		mixins:[itemListenerMixin],
		created() {
			//1.保存传入iid
			this.iid=this.$route.params.id

			//1.根据iid请求详情数据
			getDetail(this.iid).then(res => {
				const data=res.result
				// console.log(data)
				this.topimages=data.itemInfo.topImages
				//2.获取商品信息
				this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)

				//3.获取店铺信息
				this.shop=new Shop(data.shopInfo)

				//4.获取商品信息
				this.detailInfo=data.detailInfo

				//5.获取参数信息
				this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)

				//6.取出评论信息
				if(data.rate.cRate !==0){
					this.commentInfo=data.rate.list[0]
				}

			})
			//7.请求推荐数据
			getrecommend().then( res=> {
				this.recommeds=res.data.list
			})

			//8.getThemeTopY赋值
			this.getThemeTopY= debouce(() => {
				this.themeTopYs=[]
				this.themeTopYs.push(0)
				this.themeTopYs.push(this.$refs.params.$el.offsetTop)
				this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
				this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
				this.themeTopYs.push(Number.MAX_VALUE)
				// console.log(this.themeTopYs)
			},200)
		},
		methods:{
			...mapActions(['addCart']),
			imageLoad(){
				this.newRefresh()
				this.getThemeTopY()
			},
			titleClick(index){
				this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
			},
			contentScroll(position){
				const positoinY = -position.y
				let length = this.themeTopYs.length
				for(let i=0;i < length-1;i++){
					if(this.currentIndex !== i && (positoinY >= this.themeTopYs[i] && positoinY < this.themeTopYs[i+1])){
						this.currentIndex=i
						this.$refs.nav.currentIndex=this.currentIndex
					}
					// if(this.currentIndex !==i && ((i < length -1 && positoinY >= this.themeTopYs[i] && positoinY <= this.themeTopYs[i+1]) || (i===length -1 && positoinY >= this.themeTopYs[i]))){
					// 	this.currentIndex=i
					// 	this.$refs.nav.currentIndex=this.currentIndex
					// }
				}
				this.isShowBacktop=(-position.y)>1000
			},
			backClick(){																//回到顶部
				this.$refs.scroll.scrollTo(0,0,300)
			},
			addToCart(){													//1.获取购物车需要展示的信息
				const product = {}
				product.image = this.topimages[0]
				product.title = this.goods.title
				product.desc = this.goods.desc
				product.price = this.goods.realPrice
				product.iid = this.goods.iid
				//2.将商店添加到购物车里
				this.addCart(product).then(res => {
					this.$toast.show(res,2000)
				})
			}

		},
		components:{
			detailnarbar,
			DetailSwiper,
			DetailBaseInfo,
			DetailShopInfo,
			DetailgoodsInfo,
			DetailParamInfo,
			DetailCommentInfo,
			buttonbar,
			Scroll,
			GoodsList,
			backtop
		}
	}

</script>

<style scoped>
	#detail1{
		position: relative;
		z-index: 10;
		background-color: #FFFFFF;
		height: 100vh;
	}
	.detail-nav{
		position: relative;

		z-index: 10;
		background-color: #FFFFFF;
	}
	.content{
		height: calc(100% - 44px - 54px)
	}
</style>
