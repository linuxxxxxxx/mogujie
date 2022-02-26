import { request } from "./request"

export function getcategory (config) {
	return request({
		url:'/Category'
	})
}

export function getsubcategory(maitKey){
	return request({
		url:'subcategory',
		params:{
			maitKey
		}
	})
}
