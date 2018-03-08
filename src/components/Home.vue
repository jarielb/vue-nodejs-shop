<template>
  <div id="app">
    <el-main>
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="grid-content bg-purple">
            <app-products></app-products>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <app-orders></app-orders>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import Navbar from './Navbar';
import Products from './Products';
import Orders from './Orders';

export default {
  components: {
    appNavbar: Navbar,
    appProducts: Products,
    appOrders: Orders,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
