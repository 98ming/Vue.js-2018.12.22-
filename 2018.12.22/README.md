**Vue学习第一天**


  1. v-show 和 v-if 用法
   
    <span v-show="name">你的名字是{{name}}</span><br>
   v-show：元素永远存在，只是显示不显示而已
   
   v-if  ：直接从dos里删除
   
  2.v-model用法
   
    <input type="text" v-model="age">
  v-model : 给v-model里面的元素传入值,实现数据的双向绑定
  
  3.v-for用法
  
    <li v-for="food in foodList">{{food.name}} ￥{{food.discount ? food.price * food.discount : food.price}}</li>

  动态迭代foodList，第一时间把foodList数据读取出来
  
  4.v-bind用法
  
    <a v-bind:class="{active : isActive}" v-bind:href="url">点我</a>
    
   实现数据和元素属性的绑定
   
   active : 你要添加的类
   
   值isActive ：是在data里面添加
   
   **实际操作中v-bind可以省略，属性前面加一个冒号（:）即**可
   
  5.v-on用法（用于绑定事件）
  
    <button v-on:click="onClick">点我</button>
    
   当点击按钮的时候，会执行onClick（是一个方法），方法定义在main.js的methods里面
   
   同时还可以给一个元素绑定多个事件 例如：
   
    <button v-on="{mouseenter:onEnter , mouseleave:onLeave}">点我点我</button>
    
   鼠标进入的时候触发onEnter方法，离开的时候触发onLeave方法
  
   也可以给表单绑定一个提交事件，例如：
  
    <form v-on:keyup.enter="isEnter()" v-on:submit.prevent="onSubmit()">
        <input type="text">
        <button type="submit">提交</button>
    </form>


   该表单阻止了提交，Vue提供了submit.prevent方法
  
   该表单该可以监听输入的是不是回车，若是回车则会触发isEnter方法
  
   实际应用中，'v-on:'可替换为@ （注意单独的v-on不可以替换）
  
    <button @click="onClick">
    
  6.v-model的3个修饰符
  
   6.1 lazy（惰性更新，等用户输入完，才会绑定）
   
      <input type="text" v-model.lazy="name">
     
   不会实时更新name值，只有输入完成鼠标离开文本框之后，单击鼠标，才会更新，事实上它是触发了change事件
   
   6.2 trim（删除用户输入的空格）
   
     <input type="text" v-model.trim="name">

   6.3 number（用于所有用数字表示的东西）
   
     <input type="text" v-model.number="name">
     
  7.v-model在其他元素及类型上的用法
  
   7.1在单选radio上的用法
   
     <input type="radio" value="male" v-model="sex">
     <input type="radio" value="female" v-model="sex">

   7.2在多选checkbox上的用法
   
     <input type="checkbox" value="篮球" v-model="hobby">
     <input type="checkbox" value="台球" v-model="hobby">
     
   7.3在文本区域textarea上的用法
   
     <textarea v-model="article"></textarea>
     
   7.4在下拉框select上的用法
   
     <select  v-model="from">
         <option value="1">山西</option>
         <option value="2">上海</option>
         <option value="3">北京</option>
     </select>    
      
   7.5在下拉框select上可以选择多个的用法(按住ctrl多选你要选择的东西)
   
      <select v-model="dest" multiple>
         <option value="1">山西</option>
         <option value="2">上海</option>
         <option value="3">北京</option>
         <option value="4">广州</option>
     </select>
     
   


  
   