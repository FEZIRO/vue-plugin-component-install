# Vue全局UI插件开发教程（notice通知组件为例子）

<br>
文件夹目录

``````
|-- components
    |-- notice
        |-- index.js					//配置安装方法
        |-- notice.vue        //组件编写
``````
<br>

在`notice/index.js`文件中实例化组件和配置调用插件方法

``````javascript
import NoticeComponent from './notice.vue';
import Vue from 'vue';


// 写法一
// const NoticeConstructor = Vue.extend(NoticeComponent);
// const noticeContainer = document.createElement('div');
// document.body.appendChild(noticeContainer);
// let noticeInstance = new NoticeConstructor().$mount(noticeContainer);

// 写法二
const NoticeConstructor = Vue.extend(NoticeComponent);
const noticeInstance = new NoticeConstructor({
  el: document.createElement('div'),
});
document.body.appendChild(noticeInstance.$el); 


const Notice = {
  //vue.use()方法会自动调用install方法进行组件控制方法注入
  install: function(Vue) {
    //注册全局notice组件api
    Vue.prototype.$Notice = (options) => {
      let { type, text, delay } = options;
      noticeInstance.show(type, text, delay);
    };
  },
};

export default Notice;
``````
<br>

`main.js` 全局注册
``````javascript
Vue.use(Notice);
``````
<br>

页面组件中使用
``````javascript
this.$Notice({
  type:'normal',
  text:'我是全局通知！',
  delay: 1500
})
``````
<br>
code by FEZIRO
