<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{ name }}
    111
    {{ $store.state.user.name }}
    <button @click="changeName">更改名字</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    changeName(){
      // this.$store.dispatch('changeName', 'aaaaaaa')
      this.$store.commit('change')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
