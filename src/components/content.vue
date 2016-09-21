<template>
	<div class="content-container">
		<div class="co-row" v-for="(i, row) in rows">
			<content-item 
				v-for="(j, item) in rows[i].items" 
				:item="rows[i].items[j]"
			>
			</content-item>
		</div>
		<router-view :animate="animate" class="animated" transition="slide"></router-view>
	</div>
</template>

<script type="text/javascript">
	import contentItem from './contentItem.vue'
	export default {
		name: 'Content',
		components: {
			contentItem
		},
		props: ['item','scroll'],
		data() {
			return {
				rows: [],
				animate: false,
				scrollTop: 0
			}
		},
		methods: {
			lazyLoad(latency) {
				this.$nextTick(function() {
					let itemContainers = $('.co-item-container');
					for (let i = 0; i<itemContainers.length; i++) {
						let target = $(itemContainers[i])
						if (target.css('height') == '0px' && itemContainers[i].getBoundingClientRect().top < window.innerHeight-50) {
							setTimeout(()=>{
								target.css('height', '500px');
								target.children('div').css('opacity', 1)
							}, latency)
							latency += 350;
						}
					};
				});
			}
		},
		watch: {
			item(val) {
				if (val) {
					$('.co-item').css({
						opacity: 0
					})
					setTimeout(()=>{
						$('.co-item').css('display', 'none')
						$('.content-container').css({
							'height': 'calc(100% - 150px)',
							'padding-bottom': 0
						})
						this.animate = true
					},500)
				}
				else {
					$('.co-item').css({
						display: 'inline-block'
					})
					setTimeout(()=>{
						$('.view').scrollTop(this.scrollTop)
						$('.co-item').css({
							opacity: 1
						});
					},450)
					setTimeout(()=>{
						$('.content-container').css({
							'height': 'initial',
							'padding-bottom': 120
						})
						this.animate = false
					},1000)
					
				}
			}
		},
		ready() {
			$.getJSON('./data/'+this.$route.params.id+'.json', (data) => {
				setTimeout(()=>{
					this.rows = data;
					this.lazyLoad(0);
				}, 500)
			});
			let view = $('.view')[0], 
				scrollTmp = $(view).scrollTop();
			$(view).scroll(() => {
				this.scrollTop = scrollTmp;
				if (!this.item && $(view).scrollTop() - scrollTmp >= 60) {
					scrollTmp = $(view).scrollTop();
					this.scroll = true
				}
				else if (!this.item && scrollTmp - $(view).scrollTop() >= 10) {
					scrollTmp = $(view).scrollTop();
					this.scroll = false
				}
				if (!this.item)
					this.lazyLoad(0);
			});
		},
		route: {
			data({ to }) {
				if (to.params.name) 
					this.item = this.scroll = true;
				else
					this.item = this.scroll = false;
			}
		}
	}
</script>

<style lang="stylus">
	.content-container
		z-index: 1;
		position: relative;
		top: 150px;
		max-width: 1000px;
		margin: 0 auto;
		padding-bottom: 120px;
		box-sizing: border-box;

	.co-row
		width: 100%

</style>