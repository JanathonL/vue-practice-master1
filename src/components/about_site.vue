<template>
	<div class="content-container" v-link="{path:'/intro'}">
		<h1>{{title}}</h1>
		<h2>{{content}}</h2>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'About_site',
		data(){
			return{
				title:"About Me",
				content:"这是一个展示认知实习素材的网站"
			}
		}
	}
</script>
<style type="text/css">
	h1{
		margin-left: 45%; 
	}
	h2{
		margin-left: 45%; 
	}
</style>