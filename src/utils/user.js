let user={
  username:"张三",
  age:18,
  getUserInfo(){
    return this.username+this.age;
  },
  deleteUserInfo() {
    return "删除用户信息";
  }
}
export default user;
