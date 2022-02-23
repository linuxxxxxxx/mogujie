export default {
	addCounter(state,oldproduct){
		oldproduct.count++
	},
	addTocart(state,payload){
		payload.Checked=true
		state.cartList.push(payload)
	}
	}
