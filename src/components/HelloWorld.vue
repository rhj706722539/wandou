<template>
  <div class="hello">
    <h1>{{ message.split('').reverse().join('') }}</h1>
    <p>old:{{message}}</p>
    <p>new:{{reversedMessage}}</p>
    <h2>Essential Links</h2>
    <h2>Ecosystem</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      message: 'Hello'
    }
  },
  computed:{
    reversedMessage:function () {
      return this.message.split('').reverse().join('');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
