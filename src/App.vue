<template>
  <div id="app">
<!--    <div>-->
<!--      我是god<br>-->
<!--      <a href="/index">我是首页</a><br>-->
<!--      <a href="/userInfo">我是个人中心</a><br>-->
<!--    </div>-->
<!--    <button @click="clickMe">点我</button>-->
<!--    {{message}}-->
<!--    <el-rate v-model="value1"></el-rate>-->
    <router-view/>
  </div>
</template>

<script>
  import user from "./utils/user";
  import {deleteUserInfo} from "./utils/u";
export default {
  name: 'App',
  data(){
    return{
      value1: null,
      message:"www"
    }
  },
  methods:{
clickMe(){
  console.log(user.getUserInfo());
  console.log(user.deleteUserInfo());
}
  },
  created() {
  }
}
</script>

<style lang="scss">
  html,body,#app {
    width: 100%;
    height: 100%;
  }
  *{
    padding: 0;
    margin:0;
  }
</style>
