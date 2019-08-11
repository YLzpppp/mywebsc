/**
 *  第三方框架引入部分
 */
import './assets/fontawesome470/css/font-awesome.min.css';
import './scss/mybootstrap.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap';
/**
 *  首页资源引入部分
 */
import 'animate.css';
import './css/index.css';
import './css/myanimate.css';
/**
 *  Vue 以及 Vue组件引入部分
 */
import Vue from 'vue';
import Singlecard from './vuecomp/singlecard.vue';
import bg1 from './assets/img/01201907281920980bg.jpg';
import bg2 from './assets/img/02201907281920980bg.jpg';
import bg3 from './assets/img/03201907281920980bg.jpg';
import casesimg from './assets/img/casesimg.png';
import cssimg from './assets/img/cssimg.png';
import htmlimg from './assets/img/htmlimg.png';
import island from './assets/img/island1920980.jpg';
import javascriptimg from './assets/img/javascriptimg.png';
import rainbowlogo from './assets/img/rainbowlogo.png';

var vm = new Vue({

    mounted:function(){

        this.changebg();
    },
    el: '#ihead',
    data: {
        message: 'Hello Vue!',
        headarticle: {color: 'rgba(255,255,255,0.8)',zIndex:333},
        navcontenthstyle: {visibility  : 'visible'},
        navcontentclass: ['navcontent','animated'],
        navbgurl: {
            backgroundImage: bg1,
            backgroundSize:'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
        },
        indicatorstrip1:{backgroundColor : 'whitesmoke'},
        indicatorstrip2:{},
        indicatorstrip3:{}
        ,
        bglists: {
            1:bg1,
            2:bg2,
            3:bg3
        },
        whichpic: 1,
    },
    computed:{
        picsource:function () {
            switch (this.whichpic.toString()) {
                case "1":
                    return this.bglists["1"];

                case "2":
                    return this.bglists["2"];

                case "3":
                    return this.bglists["3"];

            }
        }
    },
    methods:{
        show(){
            alert(this.message)
        },
        changebg(){
            setInterval(()=>{
                this.whichpic++;
                if(this.whichpic >3){
                    this.whichpic = 1;
                }
                switch (this.whichpic) {
                    case 1 :
                        this.indicatorstrip1.backgroundColor = 'whitesmoke';
                        this.indicatorstrip2.backgroundColor = this.indicatorstrip3.backgroundColor = 'rgba(255,255,255,0.3)';
                        break;
                    case 2 :
                        this.indicatorstrip2.backgroundColor = 'whitesmoke';
                        this.indicatorstrip1.backgroundColor = this.indicatorstrip3.backgroundColor = 'rgba(255,255,255,0.3)';
                        break;
                    case 3 :
                        this.indicatorstrip3.backgroundColor = 'whitesmoke';
                        this.indicatorstrip2.backgroundColor = this.indicatorstrip1.backgroundColor = 'rgba(255,255,255,0.3)';
                }
            },13300)
        },
        togglenavcontent(){
            if(mediaflag === 0){
                //处于小屏状态下才可进一步执行调出navcontent动画
                if(this.navcontenthstyle.visibility === 'hidden'){
                    if(this.navcontentclass.length > 2){
                        this.navcontentclass.pop();
                    }
                    this.navcontentclass.push('fadeInLeft');
                    this.navcontenthstyle.visibility = 'visible';
                }else{
                    if(this.navcontentclass.length > 2){
                        this.navcontentclass.pop();
                    }
                    this.navcontentclass.push('fadeOut');
                    this.navcontenthstyle.visibility = 'hidden';
                }
            }
        },
    },

});


var cards = [
    {
        'id':'Html',
        'cdstyleurl':`background: url('${htmlimg}');background-size: contain;`,
        'cdtitle': '文本标记语言',
        'description':'HTML、HTML5所有标签的介绍以及常用标签的详解、练习'
    },
    {
        'id':'Css',
        'cdstyleurl':`background: url('${cssimg}');background-size: contain;`,
        'cdtitle': '层叠样式表',
        'description':'CSS、CSS3的所有相关属性的介绍和重要API的详解, tricks of css'
    },
    {
        'id':'Javascript',
        'cdstyleurl':`background: url('${javascriptimg}');background-size: contain;`,
        'cdtitle': 'javascript',
        'description':'javascript的基础知识，重要API的详解 以及 es6的语法拓展'
    },
    {
        'id':'Cases',
        'cdstyleurl':`background: url('${casesimg}');background-size: contain;`,
        'cdtitle': '单页网页应用demo',
        'description':'前端技术的综合使用，各种网页应用项目的预览，源码以及分析'
    }
]

var svcards = [
    {
        'id':'Spring',
        'cdstyleurl':"background: url('https://ylzpppp.github.io/Myweb/imgs/springframeworkimg.png');background-size: contain;",
        'cdtitle': 'Spring',
        'description':'Inversion of Control,Dependency Inject ,Aspect Oriented Programming'
    },
    {
        'id':'Spring MVC',
        'cdstyleurl':"background: url('https://ylzpppp.github.io/Myweb/imgs/springmvcimg.png');background-size: contain;",
        'cdtitle': 'Spring MVC',
        'description':'一个 Model-View-Control(MVC)模式的Web框架,核心在于DispatcherServlet'
    },
    {
        'id':'Mybatis',
        'cdstyleurl':"background: url('https://ylzpppp.github.io/Myweb/imgs/mybatisimg.png');background-size: contain;",
        'cdtitle': 'Mybatis',
        'description':'支持定制化SQL,免了几乎所有的 JDBC 代码和手动设置参数以及获取结果集'
    },
    {
        'id':'Nodejs',
        'cdstyleurl':"background: url('https://ylzpppp.github.io/Myweb/imgs/nodejsimg.png');background-size: contain;",
        'cdtitle': 'Node.js',
        'description':'一个基于 Chrome V8 引擎的 JavaScript 运行环境。介绍node的重要api以及使用方式'
    },
    {
        'id':'Computer Network',
        'cdstyleurl':"background: url('https://ylzpppp.github.io/Myweb/imgs/internetimg.png');background-size: contain;",
        'cdtitle': '计算机网络',
        'description':'详解osi参考模型的每层模型，从物理层、链路层一直到应用层。重点介绍TCP/IP 和HTTP协议'
    }
]

var ve = new Vue({
    el: '#imain',
    data: {
        cardlists : cards,
        servercardlists : svcards,
    },
    computed: {
      totalnums : function () {
          return cards.length
      },
      servertotalnums : function () {
          return svcards.length
      }
    },
    components:{
        'singlecard':Singlecard,
    }

})

/**
 *
 * @type {number}
 * 监听两个media查询事件，
 *      当触发小于768的事件时将flag设为0
 *      当触发大于768的事件时将flag设为1
 *
 */
var mediaflag = 0;

const maxql = window.matchMedia("(max-width: 768px)"); //小于768时触发
const minql = window.matchMedia("(min-width: 768px)"); //大于768时触发
//通过调用函数，将媒体监听查询的结果实时返回给mediaflag
maxqlCallback(maxql);
minqlCallback(minql);
//添加监听器，使监听函数生效
maxql.addEventListener("change",maxqlCallback);
minql.addEventListener("change",minqlCallback);

function maxqlCallback(mql){

    if(mql.matches){
        console.log('屏幕宽度小于768像素的临界值，进入到小屏模式');
        mediaflag = 0;
        vm.navcontenthstyle.visibility = 'hidden';

        console.log(mediaflag);
    }
}
function minqlCallback(mql){
    if(mql.matches){
        console.log('屏幕宽度大于768像素的临界值，进入到大屏模式');
        mediaflag = 1;
        if(vm.navcontentclass.length>2){
            vm.navcontentclass.pop();
        }
        vm.navcontenthstyle.visibility = 'visible';
        console.log(mediaflag);
    }
}




