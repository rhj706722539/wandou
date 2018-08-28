<template>
  <div class="page">
      <wd-button @click="ande">{{msg}}</wd-button>
      <wd-button type="primary">{{msg2}}</wd-button>
      <wd-button type="danger">{{msg3}}</wd-button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
    name:'Page',
    data() {
        return {
            msg:'默认按钮',
            msg2:'提交按钮',
            msg3:'告警按钮'
        }
    },
    methods: {
        ande(){
            alert(this.msg);
        }
    }
}
</script>

<style scoped lang="scss">

</style>
