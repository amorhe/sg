<template>
  <div id="app">
    <router-view />
    <foot v-show="$route.meta.navShow"></foot>
  </div>
</template>

<script>
import '../static/iconfont/iconfont.css'
import foot from './components/public/foot'
export default {
  components:{
    foot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #101010;
  font-size: 14px;
  background: rgb(250,250,250);
}
  * {
    margin: 0;
    padding: 0;
  }
  ul,li{list-style-type: none}
  a {
    text-decoration: none;
    color: #101010;
  }
  .fontSm {
    font-size: 12px;
  }
  .nowrap {
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .colorY {
    color: #ff9800;
  }
  button {
    outline: none;
    border: none;
  }
  .emptys {
    height: 48px;
  }
</style>

