<template>
    <div id="item" v-show="animate">
        <a v-link="{path: '/intro/'+this.$route.params.id}" id="back">
            <svg viewBox="0 0 24 24"><path d="M9 4L7.6 5.4l6.6 6.6-6.6 6.6L9 20l8-8"></path></svg>
        </a>
        <img :src="itemContent" alt="">
        <p>{{ itemDsp }}</p>
    </div>
</template>

<script>
    export default {
        name: 'item',
        props: ['animate'],
        data() {
            return {
                itemContent: '',
                itemDsp: ''
            }
        },
        ready() {
            $.getJSON('./data/'+this.$route.params.id+'.json', (data) => {
                data.some((row) => {
                    return row.items.some((item) => {
                        if (item.name == this.$route.params.name) {
                            this.itemContent = item.content;
                            this.itemDsp = item.description;
                            return true;
                        }
                        return false;
                    });
                });
            });
        }
    }
</script>

<style lang="stylus">
    #item
        position: absolute;
        left: 0;
        top: -90px;
        width: 100%
        height: calc(100% + 90px)
        text-align: center
        img
            max-width: 80%
            height: 85%
        p
            color: #333
            font-size: 28px
            font-family: MF JunYA
    #back
        position: absolute
        display: inline-block
        top: 50%
        left: 0
        transform: translateY(-50%)
        width: 60px
        height: 60px
        border: 1px solid #333
        border-radius: 50%
        svg
            position: relative;
            top: 50%;
            width: 20px;
            height: 20px;
            transform: translateY(-50%) scaleX(-1);
            fill: #333;
</style>