<template>
	<div class="co-item">
		<div class="co-item-container">
			<img :src="content" alt="">
			<div class="co-intro">
				{{data}}
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'contentItem',
		props: ['item','data'],
		data() {
			return {
				content: ''
			}
		},
		ready() {
			setTimeout(()=>{
				$('.co-item-container').css('height', '400px');
			}, 600)
			setTimeout(()=>{
				this.content = this.item.content
			}, 1300)
			$('.co-item-container').click(function(){
				$(this).find('.co-intro').slideDown(500);
			//	alert('test');
			});
			$(".co-item-container").mouseleave(function () {
				$(this).find('.co-intro').slideUp(500);
			});
		}
	}
</script>

<style type="text/css">
	.co-item {
		display: inline-block;
		width: 50%;
		padding: 20px;
		box-sizing: border-box;
	}

	.co-item-container {
		background-color: #333;
		height: 0;
		transition: height 0.5s ease-in;
	}

	.co-item img {
		width: 100%
	}
	.co-intro{
		display: none;
		width: 100%;
	}
</style>