<template>
  <div id="app">
    <div class="notice-btn" @click="notice">点击通知</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    notice(){
      this.$Notice({
        type:'normal',
        text:'我是全局通知！',
        delay: 1500
      })
    },
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .notice-btn{
    padding: 30px;
    width: 100px;
    margin: 0 auto;
    margin-top: 100px;
    background: rgba(#000, 0.1);
    border-radius: 10px;
    cursor: pointer;
  }
}
</style>
