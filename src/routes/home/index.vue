<template>
  <div class="home">
    <div class="container">
      <div class="ntp-contents">
        <div class="logo">
          <img src="./images/logo.jpg" />
        </div>
        <div class="main-container">
          <div class="input-container d-flex">
            <div class="input-box">
              <input
                class="input"
                type="text"
                v-model="keywords"
                @keyup.enter="submit"
                placeholder="请输入关键字"
              />
            </div>
            <div class="search" @click="submit">搜索</div>
          </div>
        </div>
      </div>
      <div class="block"></div>
      <div class="col-8">
        <app-result v-for="el in hits.slice(0,5)" :json="el" :key="el.url"></app-result>
      </div>
      <div style="margin-top:15px">
      <el-pagination background layout="prev, pager, next" :total="50" :pageSize=5></el-pagination>
      </div>
    </div>
  </div>
</template>
<script src="./component.js">

</script>

<style lang="scss" src="./style.scss" scoped>

</style>
