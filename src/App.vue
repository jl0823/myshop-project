<template>
  <div>
    <h3 class="app">App组件</h3>
    <router-view /> <!-- 这是用于渲染路由匹配组件的地方 -->
  </div>
</template>

<script>
  export default {
    name : "App"
  }
</script>

<style lang="css" scoped>
.app{
  width: 80px;
  height: 80px;
  background: red;
}
</style>