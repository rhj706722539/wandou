<template>
    <button class="wd-button" :class="[type,size,{'is-disabled':disabled}]"
     @click="$emit('click')">
        <span><slot></slot></span>
    </button>
</template>

<script type="text/ecmascript-6">
/**
 *  disabled作为非props传入组建的根节点
 *  type 默认值为primary，可供选择的指为danger
 *  size 默认值为normal，可供选择的值为large,small
 */
export default {
  name: 'wd-button',
  props:{
    disabled:Boolean,
    
    type:{
      type:String,
      default:'default',
      validator(value){
        return ['default','primary','danger'].indexOf(value)>-1;
      }
    },
    
    size:{
      type:String,
      default:'normal',
      validator(value){
        return ['large','normal','small'].indexOf(value)>-1;
      }
    }
  }
}
</script>

<style scoped lang="scss">
.wd-button {
    position: relative;
    padding: 0;
    display: inline-block;
    height: 44px;
    line-height: 42px;
    border-radius: 3px;
    box-sizing: border-box;
    font-size: 16px;
    text-align: center;
    -webkit-appearance: none;
    -webkit-text-size-adjust: 100%;
}
.default {
    color: #333;
    background-color: #fff;
    border: 1px solid #e5e5e5;
}
.primary {
    color: #fff;
    background-color: #00ce6d;
    border: 1px solid #00ce6d;
}
.danger {
    color: #fff;
    background-color: #f55e36;
    border: 1px solid #f55e36;
}
.normal {
    padding: 0 15px;
    font-size: 14px;
}
</style>
