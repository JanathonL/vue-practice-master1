<template>
    <div class="ga-item" :style="'background-image:url('+img+');'">
        <a class="title animated"
           v-link="{ path: index, append:true }" 
           v-show="ok"  transition="fade">
            <h1>{{ data }}</h1>
            <span :class="'underline'+titleClass"></span>
        </a>
        <a v-link="{ path: (detail ? '/intro' : index), append:true }" :class="{'item-nav': true, 'detail': detail}">
            <p>{{ detail ? '返回·BACK' : '查看详细·DETAIL' }}</p>
        </a>
    </div>
</template>

<script>
	export default {
		name: 'gallery-item',
		props: ['img', 'data', 'ok', 'index', 'detail'],
		data() {
			return {
				underlineClass: "underline",
				titleClass: ' hovered'
			}
		},
		watch: {
			ok: function(val) {
				if(val)
					setTimeout(() => {
						this.titleClass = ''
					}, 300);
				else
					this.titleClass = ' hovered';
			}
		}
	}
</script>
<style lang="stylus">
    .ga-item 
        height: 100%;
        position: relative;
        display: inline-block;
        overflow: hidden;
        background-position: 50% 30%;
        background-size: cover;
        img
            width: 100%;

    .title
        position: absolute
        display: inline-block;
        text-decoration: none;
        top: 40%;
        left: 10%;
        color: #fff;
        h1
            font-size: 50px;
            font-family: MF JunYa, serif;
            font-family: FZ YueSong, serif;
            font-weight: normal;
            letter-spacing: 5px;
            margin-bottom: 0;
        .underline
            display: inline-block;
            height: 3px;
            width: 100%;
            top: -10px;
            background-color: #fff;
            transition: width 0.3s cubic-bezier(0.77, 0, 0.175, 1); 
            &:hover, &.hovered
                width: 0;
                transition: width 0.6s cubic-bezier(0.77, 0, 0.175, 1); 
            &::before
                content: '';
                position: absolute;
                display: inline-block;
                height: 100%;
                top: 0;
                width: 100%;
    
    .item-nav
        color: #fff;
        text-decoration: none;
        width: 250px;
        text-align: center;
        font-size: 20px;
        font-family: MF JunYa;
        position: absolute;
        display: inline-block;
        letter-spacing: 2px;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
        border: 2px solid #fff;
        padding: 25px 0;
        transition: bottom 0.5s cubic-bezier(0.895, 0.03, 0.685, 0.22)
        &.detail
            bottom: 10px
        p
            margin: 0;
            display: inline-block;
            border-top: 1px solid;
            border-bottom: 1px solid;
</style>