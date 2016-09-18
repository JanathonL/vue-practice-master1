# 使用Vue.js进行单页面应用开发

练习项目

## 安装
1. 安装nodejs

2. 使用npm安装项目依赖（使用--registry指定国内package源或者先用npm安装cnpm）

使用`--registry`：进入项目目录后，在命令行下输入
```
npm install --registry=https://registry.npm.taobao.org
```

## 项目说明
`public`目录：静态网站所用到的所有文件，`data`目录用于存放网页数据，`static`目录存放css等静态资源以及打包后的js文件，`index.html`为网页入口

`src`目录：`main.js`为vue入口，包含路由配置；`App.vue`为主组件；`components`目录中为子组件

其他：使用`vue`语法编写模板，使用`vue-router`进行路由配置，`animate.css`和`jquery`实现动画效果，`jquery`进行部分DOM操作，使用stylus编写css（用原生css也可以）

（各个库的官方网站都有教程和文档

### 进入开发模式
进入项目目录在命令行下输入
```
npm run dev
```

之后打开localhost:8080，本地对vue文件的修改会直接反应在页面上（热重载）

（还没考虑过兼容性，最好用chrome/edge访问

### 生产模式

```
npm run build
```

编译.vue文件，打包混淆并压缩生成供网站使用的目标js文件（还没完全配置好
