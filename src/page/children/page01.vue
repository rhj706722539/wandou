<template>
  <div class="home">
      <div class="m-menu">
        <ul class="bd-rt" @click="hello">
            <li class="bt-bd">0</li>
            <li>01</li>
        </ul>
        <ul class="bd-rt">
            <li class="bt-bd">1</li>
            <li>02</li>
        </ul>
        <ul class="bd-rt">
            <li class="bt-bd">2</li>
            <li>03</li>
        </ul>
        <ul class="bd-rt">
            <li class="bt-bd">3</li>
            <li>04</li>
        </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name:"Home",
  data() {
    return {

    }
  },
  methods: {
      hello(){
          this.$router.push({ name: 'HelloWorld' })
      }
  }
}
</script>

<style scoped lang="css">
.m-menu {
    float: left;
    padding-bottom: 0.597rem;
    width: 100%;
    height: auto;
    background: #fff;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
}
.m-menu .bd-rt {
    border-right: 1px solid #e8e8e8;
}
.m-menu ul {
    float: left;
    margin: 0.597rem 0 0;
    width: 25%;
}
.m-menu ul .bt-bd {
    width: 1.7rem;
    height: 1.7rem;
    margin: 0 auto;
    margin-bottom: 0.21rem;
    border: 1px solid #e1dedb;
    border-radius: 0.59rem;
    line-height: 1.7rem;
    font-size: 0.768rem;
    color: #fca51b;
}
.m-menu ul li {
    width: 100%;
    text-align: center;
    color: #666;
    font-size: 0.597rem;
}
</style>
