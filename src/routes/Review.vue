<template>
  <div class="container">
    <div id="questions">
      <div class="title">
        <h2>구매후기</h2>
        <p class="Roboto">
          우리는 커피를 사랑하는 사람들과 함께 성장합니다.<br><br>
          바라보다와 함께 한 당신의 이야기를 들려주세요.
        </p>
      </div>
      <table class="Roboto">
        <tr>
          <th scope="col" width="90px">
            번호
          </th>
          <th scope="col" width="230px">
            상품정보
          </th>
          <th scope="col" width="auto">
            제목
          </th>
          <th scope="col" width="130px">
            작성자
          </th>
          <th scope="col" width="130px">
            작성일
          </th>
          <th scope="col" width="90px">
            조회
          </th>
          <th scope="col" width="90px">
            평점
          </th>
        </tr>
        <tr 
          v-for="(reviews, r) in reviews" 
          :key="r">
          <td class="no">
            {{ reviews.no }}
          </td>
          <td class="product">
            <a href="/">{{ reviews.product }}</a>
          </td>
          <td class="title">
            <a href="/">{{ reviews.title }}</a>
          </td>
          <td class="writer">
            {{ reviews.writer }}
          </td>
          <td class="date">
            {{ reviews.date }}
          </td>
          <td class="views">
            {{ reviews.views }}
          </td>
          <td class="rating">
            <img 
              :style="`clip: rect(0, ${reviews.rating*15}px, 13px, 0)`"
              src="images/rating.png" 
              :alt="`평점${reviews.rating}`">
          </td>
        </tr>
      </table>
      <Paginate />
      <SearchBar />
    </div>
  </div>
</template>

<script>
import Paginate from 'components/etc/Paginate'
import SearchBar from 'components/SearchBar'
import {  mapState } from 'vuex'

export default {
  name: 'Review',
  components:{
    Paginate,
    SearchBar
  },
   computed: {
    ...mapState('reviews',[
        'reviews'
      ])
  }
}
</script>

<style lang="scss" scoped>

$star_1: 15px;
$star_2: 30px;
$star_3: 45px;
$star_4: 60px;
$star_5: 75px;

#questions{
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
table{
  width: 100%;
  border-top: 1px solid #e8e8e8;
  font-size: 14px;
  line-height: 21px;
  th{
    border-bottom: 1px solid #e8e8e8;
    padding: 14px 0;
    background: #fafafa;
    color: #999;
  }
  td{
    border-bottom: 1px solid #e8e8e8;
    padding: 18px 0;
    color: #333;
  }
  .date{
    font-size: 11px;
  }
  .no,
  .writer,
  .views,
  .date {
    text-align: center;
  }
  .product,
  .title {
    padding-left: 10px;
  }
  .rating{
    position: relative;
    img{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
    }
  }
}
</style>