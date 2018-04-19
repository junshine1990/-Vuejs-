
//实例化Vue对象
let app = new Vue({
    el: '#app',
    data: {

        message: 'Hello Junshine',
        job: 'Web开发!',
        website: 'https://junshine1990.github.io',
        websiteTag: '<a href="https://junshine1990.github.io">junshine</a>',
    },

    methods: {
        // this.data.job = this.job
        greet(msg){
            return `Good Junshine ${msg} 喜欢 ${this.job}`;
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
