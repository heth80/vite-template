<template>
  <router-link to="/">Frank1</router-link> |
  <router-link to="/frank2">Frank2</router-link>
  <hr>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
body {
  #app, a, a:active {
    color: #000;
  }
}
.router-link-active  {
  color: red;
}
</style>
