<template>
	<div id="home">
		
		<NavBar class="home-nav">
			<template v-slot:center>
				<p class="pitem">购物街</p>
			</template>
		</NavBar>
		
		<tabControl
		:titles="['流行','新款','推荐']"
		@tabClick="tabClick"
		class="tab-control"
		v-show="istabFixed"
		ref="tabControl1"></tabControl>
		<Scroll
		class="content"
		ref="scroll"
		:probeType="3"
		:pullUpLoad="true"
		@scroll="contentScroll"
		@pullingUp="loadMore">
				<HomeSwiper
				:banners="banners"
				@swiperImage="swiperImage"></HomeSwiper>
				<HomeRecommendView :recommends="recommends"></HomeRecommendView>
				<FeatureView></FeatureView>
				<tabControl
				ref="tabControl2"
				:titles="['流行','新款','推荐']"
				@tabClick="tabClick"></tabControl>
				<goodlist :goods="showGoods"></goodlist>
		</Scroll>
		<backtop @click.native="backClick" v-show="isShowBacktop"></backtop>

	</div>
</template>

<script>
	import HomeSwiper from './childComps/HomeSwiper.vue'
	import HomeRecommendView from './childComps/HomeRecommendView.vue'
	import FeatureView from './childComps/FeatureView.vue'

	import NavBar from '../../components/navbar/NavBar'
	import tabControl from '../../components/tabControl/tabControl.vue'
	import Goodlist from '../../components/goods/Goodslist'
	import backtop from '../../components/backtop/backtop'

	import Scroll from '../../components/scroll/Scroll'

	import { getHomeMultidata,getHomeGoods } from '../../network/home';
	import { debounce } from '../../components/utils'


	export default {
		name:"home",
		components:{
			HomeSwiper,
			HomeRecommendView,
			FeatureView,
			NavBar,
			tabControl,
			Goodlist,
			backtop,
			Scroll

		},
		data() {
			return {
				banners:[],
				recommends:[],
				goods:{
					"pop":{page:0,list:[]},
					"new":{page:0,list:[]},
					"sell":{page:0,list:[]},
				},
				currentType:"pop",
				isShowBacktop:false,
				taboffsetTop:0,
				istabFixed:false
			}
		},
		computed:{
			showGoods(){
				return this.goods[this.currentType].list
			}
		},
		created() {
			//请求多个数据
			this.getHomeMultidata()

			//请求商品数据
			this.getHomeGoods("pop")
			this.getHomeGoods("new")
			this.getHomeGoods("sell")
		},
		mounted() {
			//图片加载完成的事件监听
			const refresh =debounce(this.$refs.scroll.refresh,100)

			//3监听事件总线
			this.$bus.$on('itemImageLoad',()=>{
				refresh()
			})

		},
		methods:{
			/**
			 *事件监听
			 */

			tabClick(index){											//监听点击了哪个分类然后网络请求
				// console.log(index)
				switch(index){
					case 0:
						this.currentType="pop"
						break
					case 1:
						this.currentType="new"
						break
					case 2:
						this.currentType="sell"
						break
				}
				this.$refs.tabControl1.currentIndex=index
				this.$refs.tabControl2.currentIndex=index
			},

			backClick(){														//回到顶部
				this.$refs.scroll.scrollTo(0,0)
			},

			contentScroll(position){										//tabbar吸顶效果
				//1.判断回到顶部是否显示
				this.isShowBacktop=(-position.y)>1000

				//2.判断tabControl是否吸顶
				this.istabFixed=(-position.y) > this.taboffsetTop
			},

			loadMore(){
				this.getHomeGoods(this.currentType)
			},
			//2.获取offsetopt
			swiperImage(){
				this.taboffsetTop = this.$refs.tabControl2.$el.offsetTop
			},

			/**
			 * 网络请求相关方法
			 */
			//网络请求轮播图
			getHomeMultidata(){
				getHomeMultidata().then(res=>{
					this.banners=res.data.banner.list;
					this.recommends=res.data.recommend.list;
				})
			},
			getHomeGoods(type){										//点击了哪个tabbar,更新数据
				const page=this.goods[type].page+1
				getHomeGoods(type,page).then(res =>{
					this.goods[type].list.push(...res.data.list)
					this.goods[type].page+=1

					this.$refs.scroll.finishPullUp()
				})
			},
		},
	}
</script>

<style scoped>
	#home{
		/* padding-top: 44px; */
		position: relative;
		height: 100vh;
	}
	.home-nav{
		background-color: #ff557f ;

		/*原生滑动*/
		/* position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 9; */
	}

	.content{
		overflow: hidden;
		position: absolute;
		top: 44px;
		bottom: 49px;
		right: 0;
		left: 0;
	}

	.tab-control{
		position: relative;
		z-index: 1;
	}
	.pitem{
		color: #ffffff;
	}
</style>
