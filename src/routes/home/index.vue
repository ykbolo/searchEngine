<template>
  <div class="home">
    <div :class="{'container':true, 'sideleft':hasResult}">
      <div class="ntp-contents" :class="{collapse:hasResult}">
        <div class="logo">
          <img src="./images/logo.jpg" />
        </div>
        <div class="main-container">
          <div class="input-container d-flex">
            <div class="input-box">
              <input class="input" type="text" v-model="keywords" @keyup.enter="submit" placeholder="请输入关键字" />
            </div>
            <div class="search" @click="submit()">搜索</div>
          </div>
        </div>
      </div>
      <div class="block col-md-10 col-xs-12 col-lg-8 margin-t-2x margin-b-1x" v-if="total">
        共搜索到
        <em>{{totalText}}</em>条数据
        &nbsp;用时
        <em>{{time_take}}</em>
        ms
      </div>
      <div class="col-md-10 col-xs-12 col-lg-8">
        <app-result v-for="el in list" :title="el.highlight.title.join('') || el.highlight.keywords.join('') || el.highlight.body.join('')" :body="el.highlight.body.join('...')" :link="el._source.url" :key="el.url"></app-result>
      </div>
      <div class="pagination">
        <el-pagination v-if="hasResult" background layout="prev, pager, next" :total="total" :pageSize="10" @current-change="handleCurrentChange"></el-pagination>
      </div>
    </div>
  </div>
</template>
<script src="./component.js">

</script>

<style lang="scss" src="./style.scss" scoped>

</style>
title: this.json.highlight.title.join('') || this.json.highlight.keywords.join('') || this.json.highlight.body.join(''),
body: this.json.highlight.body.join('')
