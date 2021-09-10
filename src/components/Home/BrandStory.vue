<template>
  <section id="breand_story">
    <div class="story">
      <h2>Baraboda Brand Story</h2>
      <div class="tit">
        사람과 기억 <br> 그리고 커피, 모두가 <br>추억이 되는 곳
      </div>
      <p class="Roboto">
        커피와 일상이 만나는 방법에 대해 오랫동안 고민해 온 우리는 <br>
        2016년 어느날, 나무가 있고 바람이 기분좋게 부는 곳에서 시작되었습니다. <br>
        그리고 더 가까이에서 바라보기 위해 바라보다 스페셜티를 온라인에서 선보입니다. <br>
        처음 시작했던 설레는 그 마음을 담아 오늘도 당신을 만나러 갑니다. <br>
      </p>
      <a class="view_more">view more <span><i class="fas fa-angle-right" /></span></a>
    </div>
    <div class="link">
      <a
        class="link_box"
        v-for="link in links"
        :key="link">
        <img :src="link.img">
        <div class="tit">
          {{ link.tit }}
        </div>
        <p class="Roboto">{{ link.text }}</p>
        <a class="view_more">view more<span><i class="fas fa-angle-right" /></span></a>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      links: [
        { tit:'MEET BARABODA' ,text:'카페 바라보다의 위치를 확인하세요', img:'images/info_1.png'},
        { tit:'BARABODA AT HOME' ,text:'바라보다의 스페셜티를 이제 홈카페에서 즐겨보세요', img:'images/info_2.png'},
        { tit:'MORE SPECIAL' ,text:'스페셜티를 더 스페셜하게 맞춤 로스팅 해드립니다.', img:'images/info_3.png'}
      ]
    }
  }
}
</script>

<style scoped lang="scss">
#breand_story{
  color: #333;
}

//스토리 
.story{
  padding: 100px 0;
  text-align: center;
  font-weight: 300;
  h2{
    font-size: 12px;
    font-weight: 400;
  }
  .tit{
    padding: 10px 0;
    font-size: 34px;
    line-height: 1.6;
  }
  p{
    color: #888;
    line-height: 1.7;
  }
}
//링크 3개
.link{
  display: flex;
  max-width: 1580px;
  width: 100% -200px;
  padding: 0 100px;
  margin: 0 auto 100px;
  font-weight: 300;
  line-height: 1.6;
  .link_box{
    text-align: center;
  }
  img{
    width: 100%;
    transition: .3s;
  }
  img:hover{
    opacity: .7;
  }
  .tit{
    margin-top: 25px;
    font-size: 23px;
  }
  p{
    color: #888;
    margin-top: 5px;
  }
}
</style>