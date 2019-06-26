<template>
  <div id="app">
    <MainHeader></MainHeader>
    <router-view/>
  </div>
</template>

<script>
  import MainHeader from './components/main-header/MainHeader';
  import {actionNames} from "./store/modules/dogs/actions";
  import {mapActions} from "vuex";

  export default {
      name: "App",
      components: {
          MainHeader
      },
      methods: {
          ...mapActions('dogs', [actionNames.GET_ALL_BREEDS])
      },
      mounted() {
        this[actionNames.GET_ALL_BREEDS]()
      }
  }
</script>

<style lang="scss" src="./App.scss"></style>
