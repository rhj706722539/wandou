<!-- 选择弹出框组件 -->
<template>
  <transition name="ease">
    <div v-if="visible" class="wd-confirm">
      <div class="zs-bg"></div>
      <div class="zs-content" :style="{width:width}">
        <p>{{title}}</p>
        <slot name="footer">
             <div class="zs-btn">
                <a class="zs-boder" @click='$nextClick'>确定</a>
                <a @click="close">取消</a>
            </div>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'wd-confirm',
     props:{
      width:{
        type: String,
        default: '100px'
      },
      title:{
        type:String,
        default: '信息'
      },
      visible:{
        type:Boolean,
        default:false
      },
      closeVisible:{
        type:Boolean,
        default:true
      }
    },
    data(){
      return {

      }
    },
    methods:{
      close(){
        this.$emit('update:visible',false)
      },
      $nextClick(){
        this.$emit('nextClick')
    },
    }
  }
</script>

<style scoped lang='scss'>
  .ease-enter-active {
   -webkit-transform: scale(2);
    -moz-transform: scale(2);
    -ms-transform: scale(2);
    transform: scale(2);
    opacity: 0;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
  }
  .ease-leave-active {
    -webkit-transform: scale(2);
    -moz-transform: scale(2);
    -ms-transform: scale(2);
    transform: scale(2);
    opacity: 0;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
  }
  .zs-popup{
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index:99;
    transition: .2s ease-in-out;
    .zs-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: #000;
      opacity: 0.3;
      z-index: 99;
    }
    .zs-content {
      position: absolute;
      display: inline-block;
      top: 50%;
      left: 50%;
      background: #fff;
      transform: translate(-50%, -50%);
      width: 260px;
      min-width: 260px;
      z-index: 1999;
      border-radius: 15px;
      p {
        font-size: 16px;
        color: #333;
        line-height: 60px;
        text-align: center;
        border-bottom: 1px solid #e8e8e8;
      }
      .zs-btn a{
          width: 50%;
          height: 38px;
          float: left;
          font-size: 16px;
          color: #00D875;
          line-height: 36px;
          text-align: center;
      }
      .zs-boder{
          border-right: 1px solid #e8e8e8;
      }
    }
  }
</style>
