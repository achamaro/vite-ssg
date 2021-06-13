<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div class="routes">
    <div><router-link to="/">Go to /</router-link></div>
    <div><router-link to="/test.html">Go to /test</router-link></div>
    <div><router-link to="/nest.html">Go to /nest</router-link></div>
    <div><router-link to="/nest/test.html">Go to /nest/test</router-link></div>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>

<style>
#app {
  margin-top: 60px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
