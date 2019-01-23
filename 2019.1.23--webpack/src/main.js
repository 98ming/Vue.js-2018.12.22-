// 这是 main.js 是我们项目的js入口文件

// 1.导入 jquery
// import *** from *** 是ES6中导入模块的方式
// 由于 ES6的代码太高级了，浏览器解析不了，所以，这一行执行会报错
import  $ from 'jquery'
// const $ = require('jquery')

// 使用 import 语法，导入 css 样式表
import './css/index.css'
import './css/index.less'
import './css/index.scss'
// 注意：webpack 默认只能打包处理 js 类型的文件，无法处理其它的非 js 类型的文件
// 如果要处理非 js 类型的文件，我们需要手动安装一些合适的第三方 loader 加载器；
// 1. 如果想要打包处理 css 文件，需要安装 cnpm i style-loader css-loader -D
// 2. 打开 webpack.config.js 这个配置文件，在里面，新增一个配置节点，叫做 module ，它是一个对
// 象，在这个 module 对象身上，有个 rules 属性，这个 rules 属性是个数组，这个数组中，存放了所
// 有第三方文件的匹配和处理规则

// 注意： webpack 处理第三方文件类型的过程：
// 1. 发现这个要处理的文件不是 js 文件，然后就去配置文件中，查找有没有对应的第三方 loader 规则
// 2. 如果能找到对应的规则，就会调用对应的 loader 处理这种文件类型
// 3. 在调用 loader 的时候，是从后往前调用的
// 4. 当最后的一个 loader 调用完毕，会把处理结果，直接交给 webpack 进行打包合并，最终输出到 bundle.js 中去

$(function(){
    $('li:odd').css('backgroundColor','yellow')
    $('li:even').css('backgroundColor',function () {
        return '#' + 'D97634'
    })
})

// webpack可以做什么事情？
// 1. webpack 能够处理 js 文件的互相依赖关系
// 2. webpack 能够处理 js 的兼容问题，把高级的、浏览器不识别的语法，转为低级的、浏览器识别的语法

// 刚才运行的命令格式： webpack 要打包的文件路径 打包好的文件路径