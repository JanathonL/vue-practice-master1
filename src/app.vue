<template>
    <div id="app">
        <div id="nav">
            <p>
                2016·ZJU·Software Engineering·BeiJing
            </p>
        </div>
        <div id="background" :style="'background-image:url('+bgimg+');'"></div>
        <router-view class="view" :bgimg.sync="bgimg"></router-view>
        <div id="about"><p>关于网站 / ABOUT SITE</p></div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                bgimg: ''
            }
        }
    }
</script>

<style lang="stylus">
@font-face {
    font-family: 'MF JunYa';
    src: url('/static/fonts/MFJunYa_Noncommercial-Regular.ttf');
}

@font-face {
    font-family: 'FZ YueSong';
    src: url('/static/fonts/方正清刻本悦宋简体.ttf');
}

html, body, #app
    height: 100%;
    overflow-x: hidden

::-webkit-scrollbar
    width: 4px;
    height: 4px;
::-webkit-scrollbar-button
    width: 0;
    height: 0;
::-webkit-scrollbar-corner
    background: 0 0;
::-webkit-scrollbar-thumb
    background: #dbc3b3;
    border: 0 #fff;
    border-radius: 0;
::-webkit-scrollbar-thumb:hover
    background: #dbc3b3;
::-webkit-scrollbar-track
    background: #fff;
    border: 0 #fff;
    border-radius: 0;
::-webkit-scrollbar-track:hover
    background: #fff;

#nav
    position: fixed
    width: 100%;
    height: 60px
    text-align: center
    background-color: #fff;
    z-index: 100;
    p
        margin: 0 auto;
        line-height: 60px;
        color: rgb(159,159,159);
        letter-spacing: 3px;
        font-family: MF JunYa;
#background
    position: fixed;
    height: 100%;
    width: calc(100% - 80px);
    padding: 60px 40px 0;
    box-sizing: border-box;
    backface-visibility: hidden;
    z-index: -1;
    opacity: .05;
    pointer-events: none;
    background-size: cover;
    background-position: 50% 50%;

.view
    position: relative
    padding: 0 40px
    min-height: 100%
    width: 100%
    overflow-x: hidden;
    box-sizing: border-box;

#about
    position: fixed;
    left: 50%;
    bottom: 10px;
    width: 250px;
    padding: 20px 0;
    color: #fff;
    font-size: 11px;
    font-family: sans serif;
    font-weight: bold;
    text-align: center;
    transform: translateX(-50%);
    background-color: #333//rgb(112, 163, 168);
    cursor: pointer;
    p
        padding: 5px 0;
        margin: 0;
</style>