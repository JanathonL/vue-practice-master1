<template>
	<div class="co-item">
		<a 
			v-if="item.type == 'img'" 
			v-link="{ path:item.name, append: true }"
			class="co-item-container"
		>
			<div :style="{backgroundImage: 'url('+item.content+')'}"></div>
		</a>
		<div 
			v-else="item.type == 'text'" 
			class="co-item-container"
		>
			<p>{{ item.content }}</p>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'contentItem',
		props: ['item']
	}
</script>

<style type="text/css">
	.co-item {
		display: inline-block;
		width: 50%;
		padding: 20px;
		height: 540px;
		box-sizing: border-box;
		transition: opacity 0.8s ease
	}

	.co-item-container {
		display: block;
		width: 100%;
		background-color: #333;
		height: 0;
		text-align: center;
		transition: height 0.5s cubic-bezier(0.895, 0.03, 0.685, 0.22);
	}

	.co-item div {
		width: 100%;
		height: 500px;
		opacity: 0;
		background-size: cover;
		background-position: 50% 50%;
		transition: opacity 1.5s ease-in;
	}
</style>