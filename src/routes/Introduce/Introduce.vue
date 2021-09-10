<template>
  <div class="container">
    <div id="introduce">
      <div 
        class="hidden" 
        :class="{'show':show_1}">
        <p class="eng">
          CAFE.BARABODA
        </p>
        <h2>바라보다 소개</h2>
        <p class="Roboto">
          커피와 당신 사이에, 서로를 바라볼 수 있는 공간이 있습니다.<br>
          커피를 향한 우리의 마음은 카페 바라보다의 공간 속에서 향기로 전해집니다.<br>
          미스터콩의 좋은 로스팅 원두와 어울리는 카페 레시피로 당신을 만나는 카페 바라보다 입니다.
        </p>
      </div>
      <img
        class="hidden" 
        :class="{'show':show_2}"
        src="images/바라보다소개_0.jpg">
      <div 
        class="hidden" 
        :class="{'show':show_3}">
        <h3>
          커피를 바라보다
        </h3>
        <p class="Roboto">
          '바라보다'가 제공하는 좋은 원두가 아름다운 공간에서<br>
          향기로운 커피 한잔과 함께 당신에게 소중한 추억이 될 수 있기를 바라봅니다.
        </p>
      </div>
      <div class="box">
        <img
          class="hidden"
          :class="{'show':show_4}"
          src="images/바라보다소개_1.jpg">
        <div 
          class="hidden" 
          :class="{'show':show_5}">
          <h3>
            우리의 시작은 미스터였지만<br>그것의 완성은 마스터 입니다
          </h3>
          <p class="Roboto">
            단순히 좋은 원두와 커피용품을 소개하고<br>
            제공하는 것을 넘어 그 이상을 원하기 때문입니다.<br>
            커피를 향한 관심과 사랑이 있는 문화를 우리가 앞장 서 모두에게 제안하려 합니다.<br>
            맛과 향, 품질, 제공 이것의 다음으로 우리는<br>
            경험과 이야기 추억과 낭만, 인연과 공간을 나누기를 바라봅니다.<br>
          </p>
        </div>
      </div>
      <img
        class="hidden"
        :class="{'show':show_6}"
        src="images/바라보다소개_2.jpg">
      <p
        :class="{'show':show_7}"
        class="Roboto hidden">
        언제부턴가 우리의 일상 속 작은 부분부터 특별한 순간에 이르기까지 많은<br>
        부분을 함께하고 있는 커피. 모두들 다양한 삶의 방식 만큼이나 다양한 방법과 언어, 시간,<br>
        그리고 공간으로 커피를 만나게 됩니다.<br>
        이곳 바라보다에서 커피와 함께하는 순간들이<br>
        좀더 즐거워지고 여유롭고 설레는 시간이 되면 좋겠습니다.
      </p>
      <img
        class="hidden"
        :class="{'show':show_8}"
        src="images/바라보다소개_3.jpg">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show_1: false,
      show_2: false,
      show_3: false,
      show_4: false,
      show_5: false,
      show_6: false,
      show_7: false,
      show_8: false,
    }
  },
  mounted () {
    this.scroll()
    window.addEventListener('scroll', this.scroll);
  },
  methods: {
    scroll(){
      let innerH = window.scrollY + window.innerHeight
      if(innerH > 0){
        this.show_1=true
        this.show_2=true
      }
      if(innerH > 1100){
        this.show_3=true
      }
      if(innerH > 1500){
        this.show_4=true
      }
      if(innerH > 1900){
        this.show_5=true
      }
      if(innerH > 2300){
        this.show_6=true
      }
      if(innerH > 2700){
        this.show_7=true
      }
      if(innerH > 3000){
        this.show_8=true
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .hidden.show{
    opacity: 1;
    transform: translateY(0px);
  }
  .hidden{
    opacity: 0;
    transform: translateY(20px);
    transition: 2s;
  }
  #introduce{
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
  h3{
    padding: 3px 0;
    font-size: 30px;
    line-height: 1.4;
  }
  .box{
    position: relative;
    text-align:start ;
    h3{
      position: absolute;
      left: 20%;
      bottom: 215px;
    }
    p{
      position: absolute;
      left: 20%;
      bottom: 55px;
    }
  }
</style>