<template>
  <div class="container">
    <div id="questions">
      <div class="title">
        <h2>질문과 답변</h2>
        <p class="Roboto">
          커피에 대해 궁금한 점을 남겨주세요.
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
        </tr>
        <tr 
          v-for="(question, q) in questions" 
          :key="q">
          <td class="no">
            {{ question.no }}
          </td>
          <td class="product">
            <a href="/">{{ question.product }}</a>
          </td>
          <td class="title">
            <a href="/">{{ question.title }}</a>
          </td>
          <td class="writer">
            {{ question.writer }}
          </td>
          <td class="date">
            {{ question.date }}
          </td>
          <td class="views">
            {{ question.views }}
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
  name: 'Questions',
  components:{
    Paginate,
    SearchBar
  },
   computed: {
    ...mapState('questions',[
        'questions'
      ])
  }
}
</script>

<style lang="scss" scoped>
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
  .date{
    text-align: center;
  }
  .product,
  .title {
    padding-left: 10px;
  }
}
</style>