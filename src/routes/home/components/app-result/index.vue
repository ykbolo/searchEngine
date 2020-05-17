<template>
  <div class="app-result margin-t-1x">
    <h4 class="title">
      <a></a><span>{{index+1}}.</span></a>
      <a :href="link" target="_blank" v-html="title">{{title}}</a>
    </h4>
    <div class="link"><img style="width: 16px;margin-right:10px;" src="../../images/连接.svg">{{link}}</div>
    <div class="main" v-html="body">
    </div>
  </div>
</template>
<script src="./component.js">

</script>
<style lang="scss" src="./style.scss">


</style>
<style lang="scss">
  .active {
    background-color: #8c0000 !important;
  }

</style>
