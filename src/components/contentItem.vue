<template>
	<div class="co-item" :style="'background-image:url('+img+');'">
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'contentItem',
		props: ['img']
	}
</script>
<style type="text/css">
	.co-item {
		height: 100px;
		width: 100%;
		padding-bottom: 100%;
		background-size: contain;
		background-repeat: no-repeat;
	}
</style>