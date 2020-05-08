import NoticeComponent from './notice.vue';
import Vue from 'vue';

//将notice实例挂载到页面上

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

const notice = (options) => {
  let { type, text, delay } = options;
  noticeInstance.show(type, text, delay);
};

const Notice = {
  install: function(Vue) {
    //通过vue.use()注册全局notice组件api
    Vue.prototype.$Notice = notice;
  },
};

export default Notice;
