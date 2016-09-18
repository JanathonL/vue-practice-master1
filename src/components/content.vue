<template>
<div class="content-container">
	<div class="co-row" v-for="(i, row) in rows">
		<content-item v-for="(j, item) in rows[i].items" :item="rows[i].items[j]" :data="rows[i].intros[j==0?0:1]"></content-item>
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
				
				rows: [{
					height: 500,
					items: [{
						type: 'img',
						content: 'data/img/baidu1.jpg',
						width: ''
					}, {
						type: 'img',
						content: 'data/img/baidu2.jpg',
						width: ''
					}],
					intros: ['百度大厦','中巴键盘'],
				}, 
				{
					height: 500,
					items: [{
						type: 'img',
						content: 'data/img/baidu1.jpg',
						width: ''
					}, {
						type: 'img',
						content: 'data/img/baidu2.jpg',
						width: ''
					}],
					intros: ['百度大厦','中巴键盘'],
				}, {
					height: 500,
					items: [{
						type: 'img',
						content: 'data/img/baidu1.jpg',
						width: ''
					}, {
						type: 'img',
						content: 'data/img/baidu2.jpg',
						width: ''
					}],
					intros: ['百度大厦','中巴键盘'],
				}]
			}
		},
		props: ['scroll'],
		ready() {
			let view = $('.view')[0]
			var scrollTmp = $(view).scrollTop();
			$(view).scroll(() => {
				if($(view).scrollTop() - scrollTmp >= 60) {
					scrollTmp = $(view).scrollTop();
					this.scroll = true
				}
				if(scrollTmp - $(view).scrollTop() >= 10) {
					scrollTmp = $(view).scrollTop();
					this.scroll = false
				}
			});
		}
	}
</script>
<style lang="stylus">
	.content-container
		z-index: 1;
		//display: flex;
		position: relative;
		top: 180px;
		width: 100%;
		padding: 0 40px 120px;
		box-sizing: border-box;
	
	.co-row
		width: 100%

</style>