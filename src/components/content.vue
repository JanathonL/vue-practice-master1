<template>
	<div class="content-container">
		<div id="item">
			<content-item :img="imgs[0]"></content-item>
		</div>
		<div id="item">
			<content-item :img="imgs[1]"></content-item>
		</div>
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
	import contentItem from './contentItem.vue'
	export default {
		name: 'Content',
		components: {
			contentItem
		},
		data() {
			return {
				imgs: ['data/img/baidu1.jpg', 'data/img/baidu2.jpg', 'data/img/微软合照.jpg'],
			}
		},
		props: ['scroll'],
		ready() {
			let view = $('.view')[0]
			var scrollTmp = $(view).scrollTop();
			$(view).scroll(() => {
				if ($(view).scrollTop() - scrollTmp >= 60) {
					scrollTmp = $(view).scrollTop();
					this.scroll = true
				}
				if (scrollTmp - $(view).scrollTop() >= 10) {
					scrollTmp = $(view).scrollTop();
					this.scroll = false
				}
			});
		}
	}
</script>
<style type="text/css">
	.content-container {
		z-index: -1;
		text-align: center;
		display: -webkit-flex;
		display: flex;
		justify-content: center;
		position: relative;
		top: 500px;
		left: 80px;
		width: 93%;
		height: 100%;
		box-sizing: border-box;
		overflow: hidden;
	}
	
	#item {
		display: inline-block;
		border-style: solid;
		border-color: white;
		border-width: 40px;
		-webkit-flex: 1;
		flex: 1;
		position: relative;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	
	.item+.item {
		margin-left: 20px;
	}
	
	.back {
		z-index: 11;
		position: fixed;
		top: 500px;
		margin: auto;
		left: 50%;
		background:url(/data/img/up.png);
		background-color: gray;
	}
</style>