<template>
  <div
    class="notification-wrapper"
    :class="[isShow?'notification-wrapper--down':'notification-wrapper--up', status]"
  >{{tips}}</div>
</template>

<script>
export default {
  name: 'Notice',
  data() {
    return {
      isShow: false,
      tips: '',
      noticeType: {
        success: 'success',
        normal: 'normal',
        error: 'error'
      },
      status: ''
    };
  },

  methods: {
    show(type = 'normal', tips = '', autoHide=1000) {
      this.isShow = true;
      this.tips = tips;
      this.status = this.noticeType[type];
      if(autoHide){
        setTimeout(() => {
          this.hide();
        }, autoHide);
      }
    },

    hide() {
      this.isShow = false;
    },
  }
};
</script>

<style lang="scss">
@import '../../assets/style/color.scss';
  .notification-wrapper{
    position: absolute;
    top: -200px;
    left: 50%;
    z-index: 999999;
    line-height: 18px;
    transform: translateX(-50%);
    padding: 10px 15px;
    font-weight: bold;
    font-size: 15px;
    text-align: center;
    border-radius: 10px;
    margin: 0 auto;
    color: #fff;
    background: $primaryColor;
    box-shadow: 0 10px 20px -5px rgba($successColor, 0.5);
    animation-timing-function: cubic-bezier(1, 0, 0, 1);
    transition: all 0.5s;

    &--down{
      animation: up-to-down 0.5s forwards;
    }

    &--up{
      animation: down-to-up 0.5s forwards;
    }
  }

  .normal{
    background: $primaryColor;
    box-shadow: 0 10px 20px -5px rgba($primaryColor, 0.5);
  }

  .success{
    background: $successColor;
    box-shadow: 0 10px 20px -5px rgba($successColor, 0.5);
  }

  .error{
    background: $errorColor;
    box-shadow: 0 10px 20px -5px rgba($errorColor, 0.5);
  }

  @keyframes up-to-down{
    from {
      top:-200px
    };

    to{
      top:15px;
      display: block;
    }
  }

  @keyframes down-to-up{
    from {
      top:15px
    };

    to{
      top:-200px;
      display: none;
    }
  }

</style>
