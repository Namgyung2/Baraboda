<template>
  <div class="container">
    <div id="shopping">
      <h2>{{ categories[changePage] }}</h2>
      <ul class="category">
        <li 
          class="Roboto"
          :class="{ 'click' : i == changePage }"
          v-for="(category, i) in categories"
          :key="i">
          <router-link :to="`/shopping/${categoryData[i]}`">
            {{ category }}
          </router-link>
        </li>
      </ul>
      <div class="fliter_box Roboto">
        <p>총 <strong>{{ productData.length }}</strong>개의 상품이 등록되어 있습니다.</p>
        <ul class="filter">
          <li
            :class="{ 'filter_click' : f == selectFilter }"
            v-for="(filter, f) in Filters"
            :key="f">
            <a @click="selectfilter(f)">{{ filter }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="products">
      <Product 
        :product="productData"
        :productum="Num"
        v-for="(productLength ,Num) in productData" 
        :key="Num" />
    </div>
    <Paginate />
  </div>
</template>

<script>
import Product from 'components/Product'
import Paginate from 'components/etc/Paginate'
import {  mapState } from 'vuex'

export default {
  name: 'Shopping',
  components: { 
    Product,
    Paginate
  },
  computed:{
    ...mapState('product', {
      specialTea: 'specialTea',
      coffeePack: 'coffeePack',
      paraphernalia:'paraphernalia',
      goods:'goods'
    })
  },
  data(){
    return {
      categories:['스페셜티','커피팩/선물세트','커피용품','바라보다 굿즈'],
      categoryData: ['specialTea','coffeePack','paraphernalia','goods'],
      changePage: 0,
      Filters: ['신상품','상품명','낮은 가격','높은가격'],
      selectFilter: 0,
      productData: {}
    }
  },
  props:{
    shoppingPage : {
      type : Text,
      required: true
    }
  },
  methods: {
    urlChange(){
      let URL = this.$route.path
      let page = URL.split('/')
      this.change(this.categoryData.indexOf(page[2]))
    },
    change(i){
      this.changePage = i
      switch (this.changePage){
        case 0 :
          this.productData = this.specialTea
          break
        case 1 :
          this.productData = this.coffeePack
          break
        case 2 :
          this.productData = this.paraphernalia
          break
        case 3 :
          this.productData = this.goods
          break
      }
    },
    selectfilter(f){
      this.selectFilter = f
    }
  },
  mounted(){
    this.urlChange()
  },
  beforeUpdate(){
    this.urlChange()
  }
}
</script>

<style scoped lang="scss">
  #shopping{
    color: #333;
  }
  h2{
    font-size: 34px;
    text-align: center;
    margin: 65px 0 30px;
  }
  .click{
    color: #333;
    font-weight: 400;
  }
  .filter_click{
    color: #333;
    font-weight: bold;
  }
  .category{
    display: flex;
    justify-content: center;
    color: #aaa;
    font-size: 14px;
    font-weight: 300;
    li:not(:last-child)::after{
      display: inline-block;
      width: 1px;
      height: 9px;
      margin: 0 12px;
      background: #ddd;
      content: '';
    }
  }
  .fliter_box{
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    line-height: 2;
    font-size: 14px;
    font-weight: 300;
    .filter{
      display: flex;
    }
    li:not(:last-child)::after{
      display: inline-block;
      width: 1px;
      height: 9px;
      margin: 0 12px;
      background: #ddd;
      content: '';
    }
  }
  .products{
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(3, 30%);
    grid-template-rows: repeat(1, 1fr);
  }
</style>