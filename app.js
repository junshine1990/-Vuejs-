
//实例化Vue对象
let appOne = new Vue({
    el: '#app',
    data: {

        persons: ['jjx','hjl','xjy','hhh'],
        users:[
            {name: 'jjx', age: 20},
            {name: 'hjl', age: 21},
            {name: 'xjy', age: 22},
            {name: 'hhh', age: 23}
        ],

        show: false,
        x: 0,
        y: 0,

        msg: '',

        age: 30,

        message: 'Hello Junshine',
        job: 'Web开发!',
        website: 'https://junshine1990.github.io',
        websiteTag: '<a href="https://junshine1990.github.io">junshine</a>',
    },

    methods: {
        // this.data.job = this.job
        greet(msg){
            return `Good Junshine ${msg} 喜欢 ${this.job}`;
        },
        add(inc){
            return this.age = this.age+inc;
        },
        substract(dec){
            return this.age = this.age-dec;
        },
        updateXY(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }

})

//el element需要获取的元素，一定是html中的根容器 表示vue需要一个根容器

//data 用于数据的存储，
// methods 用于存储各种方法。

//在方法中访问data中的数据 直接（this是当前的vue实例）通过 this.属性 即可
//在方法中访问method中的方法 直接（this是当前的vue实例）通过 this.方法名 即可

//属性绑定 v-bind 将data中的数据绑定到标签中的某个属性中
//  <a v-bind:href="website">junshine1990.github.io</a>
//  <a :href="website">junshine1990.github.io</a>

//监听事件 v-on:事件名 = 事件方法
//  v-on:事件名 = “vue中的方法名(参数以及括号为可选)”
// 事件 v-on:事件名 简写为 @事件名


// 双向的数据绑定 一定与input 、textarea 、select 有关
// v-model="dataName" dataName 是data数据中需要绑定的值

// 指令v-if：
// 指令v-for：可以循环数组，也可以循环对象

let appTwo = new Vue({
    el: '#app-two',
    data: {
        msg: '我是App-Two',
    },
    methods: {
        greet(){
            return '我是第二个Vue的实例';
        },
        changeMsg(){
            return appOne.message = '我被第二Vue实例给改名了';
        }
    },
    computed:{
        say(){
            return '我是第二个Vue的计算属性';
        }
    }

})
