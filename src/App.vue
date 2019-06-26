<template>
  <div id="app">
    <MainHeader></MainHeader>
    <router-view/>
  </div>
</template>

<script>
  import MainHeader from './components/main-header/MainHeader';
  export default {
      name: "App",
      components: {
          MainHeader
      }
  }
</script>

<style lang="scss" src="./App.scss"></style>
