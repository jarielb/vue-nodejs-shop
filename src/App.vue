<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    appNavbar: Navbar,
  },
};
</script>

<style>
  body {
    font-family: "Helvetica Neue",
    Helvetica,"PingFang SC",
    "Hiragino Sans GB",
    "Microsoft YaHei",
    Arial,s
    ans-serif;
  }
</style>
