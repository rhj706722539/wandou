<!-- 轻提示弹窗组件 -->
<template>
  <transition name="fade">
    <div class="zs-toast" v-if="isShow">
      {{message}}
    </div>
  </transition>
</template>

<script type="text/javascript">
  export default {
    name: 'zs-toast',
    data () {
      return {
        message: '',
        time: 1000,
        isShow: true
      }
    },
    mounted () {
      this.close()
    },
    methods: {
      close () {
        var that = this
        window.setTimeout(function() {
          that.isShow = false
        }, this.time);
      }
    }
  }
</script>

<style type="text/css">
  .zs-toast {
    position: fixed;
    padding: 10px;
    color: #fff;
    font-size: 16px;
    background-color: #5F6161;
    border-radius: 4px;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99999
    
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
</style>