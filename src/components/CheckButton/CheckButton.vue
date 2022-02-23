<template>
	<div class="CheckButton" :class="{check:isChecked}">
		<img src="~assets/images/tick.svg" >
	</div>
</template>
<script>
	export default{
		name:"CheckButton",
		props:{
			isChecked:{
				type:Boolean,
				default:false
			}
		}
	}
</script>

<style scoped>
	.CheckButton{
		border-radius: 50%;
		border: 2px solid #aaa
	}
	.CheckButton img{
		width: 25px;
		height: 25px;
	}
	.check{
		background-color: red;
		border: none;
	}
</style>
