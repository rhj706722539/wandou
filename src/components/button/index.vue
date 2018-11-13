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
  name: 'wdButton',
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

<style scoped>
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
    -webkit-appearance:none;
    -moz-appearance:none;
    appearance:none;
    cursor:pointer;
    outline:0;
    text-decoration:none;
    transition:all .2s ease;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    vertical-align:middle;
    white-space:nowrap;
}
.wd-button:focus{
    box-shadow:0 0 0 .1rem rgba(87,85,217,.2);
}
.wd-button:active {
    color: #fff;
    background-color: #D9D9D9;
    border: 1px solid #eeeeee;
}
.default {
    color: #333;
    background-color: #fff;
    border: 1px solid #e5e5e5;
}
.primary {
    color: #fff;
    background-color: #32b643;
    border: 1px solid #2da23c;
}
.primary:hover {
    color: #fff;
    background-color: #30ae40;
    border: 1px solid #2da23c;
}
.primary:active {
    color: #fff;
    background-color: #2a9a39;
    border: 1px solid #278e34;
}
.danger {
    color: #fff;
    background-color: #e85600;
    border: 1px solid #d95000;
}
.danger:hover {
    color: #fff;
    background-color: #de5200;
    border: 1px solid #cf4d00;
}
.danger:active {
    color: #fff;
    background-color: #c44900;
    border: 1px solid #b54300;
}
.normal {
    padding: 0 15px;
    font-size: 14px;
}
</style>
