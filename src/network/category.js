import { request1 } from "./request"

export function getcategory (config) {
	return request1({
		url:'/Category'
	})
}
