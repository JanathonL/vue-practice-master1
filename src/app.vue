<template>
    <div id="app">
        <div id="nav">
            <p>
                2016·ZJU·Software Engineering·BeiJing
            </p>
        </div>
        <div id="background" :style="'background-image:url('+bgimg+');'"></div>
        <router-view class="view" id="view" :bgimg.sync="bgimg" :item.sync="item"></router-view>
        <div v-show="!item" transition="flip" class="animated" id="about"><p>关于网站 / ABOUT SITE</p></div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                bgimg: '',
                item: false
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
    overflow: hidden

::-webkit-scrollbar
    width: 4px;
    height: 4px;
::-webkit-scrollbar-button
    width: 0;
    height: 0;
::-webkit-scrollbar-corner
    background: 0 0;
::-webkit-scrollbar-thumb
    background: #333;
    border: 0 #fff;
    border-radius: 0;
::-webkit-scrollbar-thumb:hover
    background: #333;
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
    margin: 60px 40px 0;
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
    height: 100%
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
    z-index: 2
    opacity: 1
    p
        padding: 5px 0;
        margin: 0;

@keyframes myFlipOutX {
  from {
    transform: translateX(-50%) perspective(400px);
  }

  30% {
    transform: translateX(-50%) perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: translateX(-50%) perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.myFlipOutX {
  backface-visibility: visible !important;
  animation-name: myFlipOutX;
}

@keyframes myFlipInX {
  from {
    transform: translateX(-50%) perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: translateX(-50%) perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: translateX(-50%) perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: translateX(-50%) perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: translateX(-50%) perspective(400px);
  }
}

.myFlipInX {
  backface-visibility: visible !important;
  animation-name: myFlipInX;
}
</style>