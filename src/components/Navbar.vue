<template>
  <el-header>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"

    >
      <el-menu-item index="0"><span class="app-title">vShopping</span></el-menu-item>
      <el-menu-item class="login-button" index="1">Login</el-menu-item>
    </el-menu>
  </el-header>

</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style>
  .el-menu {
    color: #333;
    line-height: 60px;
    width: 100%;
  }
  .app-title {
    font-size: 1.3rem;
  }
  .el-header{
    padding: 0;
  }
  .login-button {
    position: absolute;
    right: 0;
  }
</style>
