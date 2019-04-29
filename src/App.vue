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
import { mapGetters, mapState, mapActions, mapMutations } from 'vuex'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState({name: state => state.user.name}),
    // ...mapGetters(['name']),
    // ...mapActions(['changeName']),
    
  },
  mounted(){
    this.changeName('aaaaaaa')
  },
  methods: {
  ...mapMutations(['changeName']),
  //   changeName(){
  //     // this.$store.dispatch('changeName', 'aaaaaaa')
  //     this.$store.commit('change')
  //   }
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
