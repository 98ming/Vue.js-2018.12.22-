**Vue学习第二天**


1.v-if、v-else、v-else-if（控制流指令）

    <div v-if="role == 'admin' || role == 'super_admin'">
          你好管理员！
    </div>
    <div v-else-if="role == 'hr'">
          员工访问...
    </div>
    <div v-else>
        对不起，你没有权限访问
    </div>
 
2.Vue框架的计算属性

  例如，输入各门课的成绩，想要计算总分，平均分时
  
    computed:{
         sum : function () {
             return parseFloat(this.math) + parseFloat(this.physics) + parseFloat(this.English);
         },
         average : function () {
             return Math.round(this.sum / 3);
         },
       }
  
  computed是在js里面的元素，主要好处就是有缓存，不然的话直接在methods元素里写个sum()函数就OK了
  
  在html里调用的时候直接写{{sum}}就可以啦
  
    <tr>
      <td>总分</td>
      <td>{{sum}}</td>
    </tr>
    
 3.全局（component）及局部（components）组件
 
   把一段经常要用的东西封装成一个组件，就可以大大方方的去增加组件的功能，用的时候非常简单，只需要写一个标签就行了
   
   3.1全局组件
   
    Vue.component('alert_com',{
        template : '<button @click="on_click">弹弹弹</button>',
        methods:{
            on_click:function() {
                alert('Yi!');
            }
        }
    })
    
  第一个传参为组件在Vue里的名字，同时也是引用的标签，第二个参数为渲染内容
  
  在上面的全局组件中，组件名为'alert_com',内容为一个按钮，点击按钮会弹出一个事件
  
  脚下留心（全局组件应定义在Vue域（ new Vue() ）之前，否则组件是不会显示的）
  
  3.2局部组件
  
     new Vue({
         el: '#com1',
         components:{
             'alert-box':{
                 template : '<button @click="on_click">弹弹弹</button>',
                 methods:{
                     on_click:function() {
                         alert('Yi!');
                     }
                 }
             }
         }
     })
     
  'alert-box'是组件名称，且只能在com1域下引用
 
     <div id="com1">
         <alert_com></alert_com>
         <alert-box></alert-box>
     </div> 
     
   'alert_com'是不起作用的，只有'alert-box'起作用
   
 4.配置组件
 
    new Vue({
        el: '#com2',
        /*data:{
            like_count:10,
        },*/
        components:{
            'alert_like':{
                template: '<button :class="{liked : !liked}" @click="toggle_like()"> 👿 点赞{{like_count}}</button>',
                data: function () {
                    return {
                        like_count: 10,
                        liked:true, //是否可以点赞
                    }
                },
                methods:{
                    toggle_like: function () {
                        if(this.liked)
                            this.like_count++;
                        else
                            this.like_count--;
                        this.liked = !this.liked;
                    }
                }
            }
        }
    })
    
  实现了简单的点赞功能，注意组件里的数据保存在组件的data:function()里面的，template里可以写组件的id，注意用#修饰，在html页面可以用template标签使用（这个还不会使用！！很烦），当template里面内容越来越多的时候，可以用反引号（``）来断行