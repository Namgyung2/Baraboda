<template>
  <div class="container">
    <div id="magazine">
      <div class="title">
        <h2>바라보다 커피 매거진</h2>
        <p class="Roboto">Baraboda Coffee Magazine</p>
      </div>
      <div class="magazines">
        <div class="magazin_box">
          <router-link 
            to=""
            v-for="(magazine, magazineNum) in magazines" 
            :key="magazineNum">
            <div class="title_img" :style="`background: url(images/${magazines[magazineNum].img}) center / cover no-repeat`"/>
            <p>{{ magazines[magazineNum].title }}</p>
            <p><span>{{ magazines[magazineNum].writer }}</span><span>{{ magazines[magazineNum].Date }}</span></p>
          </router-link>
        </div>
      </div>
    </div>
    <Paginate />
  </div>
</template>

<script>
import Paginate from 'components/etc/Paginate'
import {  mapState } from 'vuex'

export default {
  name: 'Magazine',
  components:{
    Paginate
  },
  computed: {
    ...mapState('magazine',[
        'magazines'
      ])
  }
}
</script>

<style lang="scss" scoped>
#magazine{
  color: #333;
  font-weight: 300;
}
.title{
  h2{
    margin: 65px 0 30px;
    font-size: 34px;
    text-align: center;
    font-weight: 400;
  }
  p{
    margin: 14px 0 40px;
    font-size: 14px;
    text-align: center;
  }
}
.magazines{
  margin: 10px 0 120px;
}
.magazin_box{
  display: flex;
  justify-content: space-between;
  a{
    display: block;
    width: calc(100%/4 - 2%);
  }
  .title_img{
    width: 100%;
    padding-bottom: 100%;
  }
  p{
    text-align: center;
    font-size: 18px;
  }
  p:nth-child(2){
    margin: 23px 0 0;
  }
  p:last-child{
    margin: 10px 0 10px;
  }
  span{
    color: #999;
    font-size: 12px;
  }
  span:last-child::before{
    display: inline-block;
    width: 1px;
    height: 7px;
    background: rgb(232,232,232);
    margin: 0 10px;
    content: '';
  }
}
</style>