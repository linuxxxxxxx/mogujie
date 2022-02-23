<template>
	<div class="buttom-bar">
		<div class="check-content">
			<CheckButton class="check-button" :isChecked="isChecked"
				@click.native="isallChecked"
			>

			</CheckButton>
			<span>全选</span>
		</div>
		<div class="price">合计:{{totalPrice}}</div>
		<div class="calculate" @click="calcClick">
				去计算({{checkLength}})
		</div>
	</div>
</template>
<script>
	import CheckButton from 'components/CheckButton/CheckButton'

	import { mapGetters } from 'vuex'
	export default{
		name:"cartbottomBar",
		components:{
			CheckButton
		},
		computed:{
			...mapGetters(['cartList']),
			totalPrice(){
				// console.log(this.cartList.length)
				return this.cartList.filter(item => {
					return item.Checked
				}).reduce((preVealue,item) => {
					return preVealue + item.price * item.count
				},0).toFixed(2)
			},
			checkLength(){
				return this.cartList.filter(item => item.Checked).length
			},
			isChecked(){
				if(this.cartList.length===0) return false
				return !(this.cartList.filter(item => !item.Checked).length)
			}
		},
		methods:{
			isallChecked(){
				if(this.isChecked){
					this.cartList.forEach(item => item.Checked = false)
				} else {
					this.cartList.forEach(item => item.Checked = true)
				}
			},
			calcClick(){

				if(!this.checkLength){
					this.$toast.show('请选择购买的商品',2000)
				}
			}
		},
	}
</script>

<style scoped>
	.buttom-bar{
		position: relative;
		display: flex;

		height: 40px;
		line-height: 40px;
		background-color: #eee;
	}
	.check-content{
		display: flex;
		align-items: center;
		margin-left: 10px;
		width: 90px;
	}
	.check-button{
		width: 25px;
		height: 25px;
		line-height: 23px;
		margin-right: 5px;
	}
	.price{
		margin-left: 15px;
		flex: 1;
	}
	.calculate{
		width: 90px;
		background: red;
		color: #fff;
		text-align: center;
	}
</style>
