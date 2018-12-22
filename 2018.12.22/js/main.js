var app = new Vue({
   el : '#app',
   data :{
       name : null,
       age : null,
       sex : 'male',
       url :'http://baidu.com',
       isActive:true,
       hobby:[],
       from: 1,
       dest:[],
       article:'为什么用Vue？很简单，顺心。 在目前的三大前端框架中（Vue，Angular，React）Vue怕是最好上手的框架了，然而其核心功能和其他两者也竟然不相伯仲，那有什么理由不先学它呢？看不到。 人生如此苦短，Vue会使我们的开发过程变得更像是一种享受。对于中小型项目及个人和小型团队简直是不二之选。',
       foodList :[
           {
               name :'苹果',
               price:15,
               discount:.5
           },
           {
               name:'香蕉',
               price:10,
               discount:.5
           },
           {
               name:'柚子',
               price:20
           }
       ]

   },
   methods:{
       onClick:function () {
           console.log('click');
       },
       onEnter:function () {
           console.log('mouse enter');
       },
       onLeave:function () {
           console.log('mouse leave');
       },
       onSubmit:function () {
           console.log('submitted');
       },
       isEnter:function () {
           console.log('enter');
       },
   }

});