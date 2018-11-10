<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <wd-button>默认按钮</wd-button>
    <wd-button type="primary">提交按钮</wd-button>
    <wd-button type="danger">告警按钮</wd-button>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script type="text/ecmascript-6">
import wdButton from '../../../src/components/button'
export default {
  components: {
    wdButton
  },
  data() {
    return {
      content: `
          <wd-button>默认按钮</wd-button>
        <wd-button type="primary">提交按钮</wd-button>
        <wd-button type="danger">告警按钮</wd-button>
      `.replace(/^ {8}/gm, '').trim()
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
</style>
