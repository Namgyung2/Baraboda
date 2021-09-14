<template>
  <div id="product">
    <router-link to="/">
      <img 
        :src="`images/products/${product[productum].img[0]}`" 
        :alt="product[productum].name">
    </router-link>
    <p class="name">
      <router-link to="/">{{ product[productum].name }}</router-link> <a class="magnify"><i class="fas fa-search" /></a>
    </p>
    <p class="shortNotice Roboto">
      {{ product[productum].shortNotice }}
    </p>
    <p class="price Roboto">
      {{ product[productum].price }} 원
    </p>
  </div>
</template>

<script>
export default {
  name : 'Product',
  props : {
    product: {
      type : Array,
      required: true
    },
    productum : {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  #product{
    text-align: center;
    font-weight: 300;
    font-size: 16px;
    color: #333;
    margin: 30px 0;
    img{
      width: 100%;
    }
  }
  .magnify{
    margin-left: 5px;
    font-size: 14px;
  }
  .shortNotice{
    color: #999;
    margin: 13px 0;
  }
</style>