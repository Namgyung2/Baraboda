<template>
  <div class="container">
    <div
      id="menu"
      class="show">
      <p class="eng">
        CAFE.BARABODA
      </p>
      <h2>바라보다 메뉴 안내</h2>
      <p class="Roboto">
        세계 각국의 신선한 원두, 6명의 커피 전문가들이 <br>
        최신 로스팅 시설로 연구하고 테스트한 커피를 제공합니다. <br>
        대중들이 선호하는 로스팅 포인트와 블렌딩으로 깊이 있는 맛과 향을 <br>
        바라보다에서 즐기세요. 
      </p>
      <img
        class="menu_img"
        src="images/메뉴판.jpg"
        alt="메뉴판 (모든 메뉴가 디카페인으로 변경 가능합니다.)">
      <p class="blind">
        커피
        에스프레소 Hot 5천원
        아메리카노 Hot or Ice 6천원
        카푸치노 Hot or Ice 7천원 ...
      </p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.show{
  animation-duration: 2s;
  animation-name: show;
}
#menu{
  padding-top: 70px;
  text-align: center;
  color: #333;
  font-weight: 400;
  p{
    padding: 8px 0;
    font-size: 17px;
    font-weight: 300;
    line-height: 1.7;
  }
  img{
    width: 100%;
    margin: 55px 0;
  }
}
.eng{
  padding: 3px;
  font-size: 14px;
  letter-spacing: .3rem;
  line-height: 1.4;
}
h2{
  font-size: 42px;
  line-height: 1.4;
  padding: 3px 0;
  &::after{
    display: block;
    width: 12px;
    height: 1px;
    margin: 20px auto;
    background: rgb(153,153,153);
    content: '';
  }
}
@keyframes show {
  from{
    opacity: 0;
    transform: translateY(20px);
  }
  to{
    opacity: 1;
    transform: translateY(0px);
  }
}

</style>