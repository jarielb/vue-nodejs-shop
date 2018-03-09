<template>
  <div class="products">
    <h2>Products</h2>
    <el-row>
      <el-col :span="6" v-for="(product, index) in products" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="'http://localhost:3000/' + product.image" class="image">
          <div style="padding: 14px;">
            <span>{{ product.name }}</span>
            <div class="bottom clearfix">
              <time class="time">${{ product.price }}</time>
              <time class="time"></time>
              <el-button type="text" class="button">Add to cart</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      products: 'products',
    }),
  },
  mounted: function () { // eslint-disable-line
    this.$store.dispatch('LOAD_PRODUCTS');
  },
};
</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
  .el-col {
    padding: 1rem;
  }
</style>

