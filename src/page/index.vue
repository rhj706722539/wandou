<template>
  <div class="homeIndex">
    <div class="nav">
        <ul>
            <li>首页</li>
        </ul>	
    </div>
    <!--外侧框架 除头部都包住-->
	<section class="m-wrap-big">
        <router-view/>
	</section>	
    <section>
        <div class="footer">
            <ul>
                <li @click="home">首页</li>
                <li @click="todo">待办</li>
                <li @click="channel">渠道</li>
                <li class="no-repost" @click="myperson">我的</li>
            </ul>
        </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name:'HomeIndex',
  data() {
    return {
        msg:'hello'
    }
  },
  methods: {
      home(){
          this.$router.push({ path: '/homeIndex' })
      },
      todo(){
          this.$router.push({ path: '/homeIndex/todo' })
      },
      channel(){
          this.$router.push({ path: '/homeIndex/page' })
      },
      myperson(){

      }
  }
}
</script>

<style scoped lang="scss">
.m-wrap-big {
    overflow: hidden;
}
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    float: left;
    width: 100%;
    height: 1.877rem;
    line-height: 1.877rem;
    background: #fff;
    border-top: 1px solid #e6e6e6;
    li {
        width: 25%;
        float: left;
        text-align: center;
        color: #666;
        font-size: 0.597rem;
        border-right: 1px solid #666;
    }
    .no-repost {
        border-right: none
    }
}
</style>
