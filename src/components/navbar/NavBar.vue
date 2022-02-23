<template>
	<div class="nav-var">
		<div class="left">
			<slot name="left"></slot>
		</div>

		<div class="center">
			<slot name="center"></slot>
		</div>

		<div class="right">
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name:"NavBar",

	}
</script>

<style scoped>
	.nav-var{
		display: flex;
		height: 44px;
		line-height: 44px;
		text-align: center;
		color: #000000;
		/* background-color: #EEEEEE; */
	}
	.left,.right{
		width: 60px;
	}
	.center{
		flex: 1;
	}
</style>
