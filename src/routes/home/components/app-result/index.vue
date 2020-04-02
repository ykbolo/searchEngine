<template>
  <div class="app-result">
    <h4 class="title">
      <a
        :href="json._source.url"
        v-html="json.highlight.title.join('')"
      >{{title}}</a>
    </h4>
    <div class="main" v-html="body">{{body}}</div>
  </div>
</template>
<script src="./component.js">

</script>
<style lang="scss">
.app-result{
  padding:15px;
em {
  color:red;
}
}
</style>