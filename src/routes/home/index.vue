<template>
  <div class="home">
    <div class="container">
      <div class="ntp-contents" :class="{collapse:hasResult}">
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
            <div class="search" @click="submit()">搜索</div>
          </div>
        </div>
      </div>
      <div class="block col-md-10 col-xs-12 col-lg-8" v-if="total">
        共搜索到
        <em>{{total}}</em>条数据
      </div>
      <div class="col-md-10 col-xs-12 col-lg-8">
        <app-result v-for="el in list" :json="el" :key="el.url"></app-result>
      </div>
      <div style="margin-top:15px">
        <el-pagination
          v-if="hasResult"
          background
          layout="prev, pager, next"
          :total="50"
          :pageSize="5"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script src="./component.js">

</script>

<style lang="scss" src="./style.scss" scoped>

</style>
