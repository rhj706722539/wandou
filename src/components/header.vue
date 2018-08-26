<template>
  <header class="zs-header">
    <div class="zs-header-button is-left">
      <slot name="back" v-if="back">
        <zs-icon icon="icon-xiangzuojiantou1" @click.native='$bButtonClick'></zs-icon>
      </slot>
      <slot name="home" v-if="home">
        <zs-icon icon="icon-shouyefangzi" @click.native='$hButtonClick'></zs-icon>
      </slot>
    </div>
    <span class="zs-header-title">{{title}}</span>
    <div class="zs-header-button is-right" @click='$rButtonClick'  v-if="share">
      <slot name="share">
        <zs-icon icon="icon-sandianheng"></zs-icon>
      </slot>
    </div>
  </header>
</template>

<script>

  /**
   * 
   */
  
export default {
  name: 'zs-header',
  props:{
    title: String,
    home:{
      type:Boolean,
      default:false
    },
    back:{
      type:Boolean,
      default:false
    },
    share:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    $rButtonClick(){
      this.$emit('rButtonClick')
    },
    $bButtonClick(){
      this.$emit('bButtonClick')
    },
    $hButtonClick(){
      this.$emit('hButtonClick')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  .zs-header{
    height: 43px;
    text-align: center;
    line-height: 43px;
    background: #ffffff;
    color: #333;
    border-bottom: 1px solid #e8e8e8;
    position: relative;
    font-size: 18px;
    .is-right{
      position:absolute;
      top:0;
      right:20px;
      height:40px;
    }
    .is-left{
      position:absolute;
      top:0;
      left:20px;
      height:40px;
    }

  }
</style>
