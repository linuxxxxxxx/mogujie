export default {
	addCart(context,payload){
		return new Promise((resolve,reject) => {
			let oldproduct = context.state.cartList.find(item => item.iid == payload.iid)
			if(oldproduct){
				context.commit('addCounter',oldproduct)
				resolve('当前商品数量+1')
			} else {
				payload.count = 1
				context.commit('addTocart',payload)
				resolve('添加了新商品')
			}
		})
	}
}
