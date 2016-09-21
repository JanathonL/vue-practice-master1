<template>
    <div>
        <div :class="{'gallery': true, 'detail': detail, 'scroll': scroll}" id="gallery">
            <div id="ga-container">
                <gallery-item 
                    v-if="titles.length>1" 
                    :img="imgs[imgs.length-1]"
                    :index="titles.length"
                    :data="titles[titles.length-1]"
                    :ok="ok[titles.length-1]"
                    :detail="detail"
                    :scroll="scroll"
                ></gallery-item><gallery-item 
                    v-for="(index, img) in imgs"
                    :img="imgs[index]"
                    :index="index+1"
                    :data="titles[index]"
                    :ok="ok[index]"
                    :detail="detail"
                    :scroll="scroll"
                ></gallery-item><gallery-item 
                    v-if="titles.length>1" 
                    :img="imgs[0]"
                    :index="1"
                    :data="titles[0]"
                    :ok="ok[0]"
                    :detail="detail"
                    :scroll="scroll"
                ></gallery-item>
            </div>
            <div id="slider" :style="{ width: sliderWidth+'%'}"></div>
            <div class="ga-control" id="prev" v-on:click="go(active-1)">
                <svg viewBox="0 0 24 24"><path d="M9 4L7.6 5.4l6.6 6.6-6.6 6.6L9 20l8-8"></path></svg>
            </div>
            <div class="ga-control" id="next" v-on:click="go(active+1)">
                <svg viewBox="0 0 24 24"><path d="M9 4L7.6 5.4l6.6 6.6-6.6 6.6L9 20l8-8"></path></svg>
            </div>
        </div>
        <router-view :scroll.sync="scroll" :item.sync="item"></router-view>
    </div>
</template>

<script>
import galleryItem from './galleryItem.vue'

export default {
    name: 'Intro',
    components: {
        galleryItem
    },
    props: ['bgimg', 'item'],
    data() {
        return {
            titles: ['众里寻他千百度','在SAP的大楼里','微软与巨硬'],
            imgs: ['data/img/百度合照.jpg', 'data/img/SAP合照.jpg', 'data/img/微软合照.jpg'],
            content: [],
            active: 0,
            documentWidth: 0,
            ok: [false, false, false],
            detail: false,
            scroll: false
        }
    },
    computed: {
        sliderWidth: function() {
            let tmp = 100/this.titles.length*(this.active+1)
            return tmp > 100 ? 100 : tmp;
        }
    },
    methods: {
        handleResize() {
            const padding = 80;
            let documentWidth = $(document).width()-padding,
                itemsNum = this.titles.length > 1 ? this.titles.length+2 : 1;
            $('#ga-container').css({
                'borderSpacing': (this.active+1)*documentWidth,
                'transform': 'translateX(-'+(this.active+1)*documentWidth+'px)',
                'width': documentWidth*itemsNum+'px'
            });
            $('.ga-item').css('width', documentWidth+'px');
            this.documentWidth = documentWidth;
        },
        go(to) {
            this.ok.$set(this.active, false), this.active = to;
            $('#ga-container').animate({borderSpacing: (to+1)*this.documentWidth}, {
                step: function(now, fx) {
                    $(this).css('transform', 'translateX(-'+now+'px)');
                },
                duration: 1000,
                easing: 'easeInQuart',
                complete: () => {
                    if (to>=this.titles.length || to==-1) {
                        to = to==-1 ? this.titles.length-1 : 0;
                        this.active = to;
                        $('#ga-container').css({
                            'transform': 'translateX(-'+(to+1)*this.documentWidth+'px)',
                            'borderSpacing': (to+1)*this.documentWidth
                        });
                    }
                    this.ok.$set(to, true);
                }
            });
        }
    },
    ready() {
	    window.addEventListener('resize', this.handleResize);
	    this.handleResize();
        this.ok.$set(0, true);
    },
    watch: {
        detail(val) {
            if (val) {
                this.bgimg = this.imgs[this.active]
                this.ok.$set(this.active, false)
            }
            else
                this.ok.$set(this.active, true)
        }
    },
    route: {
        data ({ to }) {
            return {
                active: to.params.id ? parseInt(to.params.id)-1 : this.active,
                detail: to.params.id ? true : false
            }
        }
    }
}
</script>

<style lang="stylus">
     #slider 
        position: absolute
        height: 4px 
        background-color: #333//rgb(60, 82, 161)
        top: 0 
        z-index: 10
        transition: all 1s ease-in 

    .gallery
        position: fixed;
        top: 60px;        
        width: calc(100% - 80px);
        height: calc(100% - 60px);
        padding-bottom: 40px;
        box-sizing: border-box;
        overflow: hidden;
        z-index: 2
        transition: top 0.6s cubic-bezier(0.895, 0.03, 0.685, 0.22)
        &.detail
            top: calc(220px - 100%);
            transition: top 0.6s ease-out
            .item-nav
                opacity: 0
                transition: opacity 0.5s ease-in-out
            &:hover
                top: calc(260px - 100%);
                .item-nav
                    opacity: 1
        &.scroll
            top: calc(0px - 100%);
            transition: top 0.6s cubic-bezier(0.895, 0.03, 0.685, 0.22)
		
    #ga-container
        height: 100%;
        z-index: 10
        overflow: hidden;

    .ga-control
        position: absolute;
        top: 40%;
        right: 5%;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        color: rgba(255, 255, 255, 0.4)
        border: 2px solid;
        text-align: center;
        transition: all 0.3s ease;
        svg
            position: relative;
            top: 50%;
            width: 20px;
            height: 20px;
            transform: translateY(-50%) scaleX(-1);
            fill: #fff;
        &#next
            top: 30%
            svg
                transform: translateY(-50%);
</style>