var app = new Vue({
    el: '#app',
    data:{
        role : "admin",
        math : 80,
        physics : 90,
        English : 60,
    },
    computed:{
      sum : function () {
          return parseFloat(this.math) + parseFloat(this.physics) + parseFloat(this.English);
      },
      average : function () {
          return Math.round(this.sum / 3);
      },
    },
})

/*Vue.component('alert_com',{
    template : '<button @click="on_click">弹弹弹</button>',
    methods:{
        on_click:function() {
            alert('Yi!');
        }
    }
})*/
var com1 = new Vue({
    el: '#com1',
    components:{
        'alertbox':{
            template :
                `<button @click="on_click">
                    弹弹弹
                 </button>`,
            methods:{
                on_click:function() {
                    alert('Yi!');
                }
            }
        }
    }
})
Vue.component('alert_like',{
    template: `<div>
                    <button :class="{liked : !liked}" @click="toggle_like()">
                        👿 点赞{{like_count}}
                    </button>
            </div>`,
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
})
var com2 = new Vue({
    el: '#com2',
    /*data:{
        like_count:10,
    },*/
   /* components:{
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
    }*/
})


