<template>
  <header
    id="header"
    :class="{ active:scrollTop}">
    <div class="inner">
      <!-- logo -->
      <h1 class="logo">
        <router-link to="/">
          <img 
            src="images/logo_baraboda.png">
          <span class="blind">바라보다</span>
        </router-link>
      </h1>
      <!-- Nav -->
      <nav class="nav">
        <ul class="nav_L">
          <li class="top_li">
            <router-link 
              to="/introduce" 
              class="top_li_a">
              바라보다
            </router-link>
            <ul class="buttom_ul">
              <li>
                <router-link to="/introduce">
                  소개
                </router-link>
              </li>
              <li>
                <router-link to="/introduce/menu">
                  메뉴안내
                </router-link>
              </li>
            </ul>
          </li>
          <li class="top_li">
            <router-link 
              to="/" 
              class="top_li_a">
              만나다
            </router-link>
            <ul class="buttom_ul">
              <li>
                <router-link to="/">
                  오시는 길
                </router-link>
              </li>
            </ul>
          </li>
          <li class="top_li">
            <router-link 
              to="/shopping/specialTea" 
              class="top_li_a">
              쇼핑하다
            </router-link>
            <ul class="buttom_ul">
              <li>
                <router-link to="/shopping/specialTea">
                  스페셜티
                </router-link>
              </li>
              <li>
                <router-link to="/shopping/coffeePack">
                  커피팩/선물세트
                </router-link>
              </li>
              <li>
                <router-link to="/shopping/paraphernalia">
                  커피용품
                </router-link>
              </li>
              <li>
                <router-link to="/shopping/goods">
                  바라보다 굿즈
                </router-link>
              </li>
            </ul>
          </li>
          <li class="top_li">
            <router-link 
              to="/" 
              class="top_li_a">
              마주보다
            </router-link>
            <ul class="buttom_ul">
              <li>
                <router-link to="/">
                  커피 매거진
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  질문과 답변
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  구매후기
                </router-link>
              </li>
            </ul>
          </li>
        </ul>

        <ul class="nav_R">
          <li class="top_li">
            <router-link 
              to="/" 
              class="top_li_a">
              정기배송
            </router-link>
          </li>
          <li class="top_li">
            <router-link 
              to="/" 
              class="top_li_a">
              공지사항
            </router-link>
          </li>
          <li class="top_li">
            <router-link 
              to="/" 
              class="top_li_a">
              이벤트
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- Sub nav -->
      <ul class="sub_nav">
        <li class="top_li">
          <router-link to="/">
            <img 
              src="images/mypage_icon.svg"
              alt="마이페이지">
          </router-link>
          <ul class="buttom_ul">
            <li>
              <router-link to="/">
                로그인
              </router-link>
            </li>
            <li>
              <router-link to="/">
                회원가입
              </router-link>
            </li>
          </ul>
        </li>
        <li class="top_li">
          <router-link to="/">
            <img 
              src="images/cart_icon.svg"
              alt="장바구니">
          </router-link>
        </li>
        <li class="top_li">
          <router-link to="/">
            <img 
              src="images/search_icon.svg"
              alt="검색">
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>

export default {
  data(){
    return{
      scrollTop: false,
      shoppingPage: ''
    }
  },
  created () {
  window.addEventListener('scroll', this.scroll);
  },
  methods: {
    scroll(){
      if(window.scrollY > 0){
        this.scrollTop = true
      }else{
        this.scrollTop = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "scss/_mixin.scss";

//전체 적용
@keyframes down_animation{
  from{
    opacity: 0;
    transform: translateY(-20px);
  }
  to{
    opacity: 1;
    transform: translateY(0px);
  }
}
#header{
  position: fixed;
  top: 0;
  width: 100%;
  padding-top: 60px;
  color: #333;
  font-weight: 400;
  transition: .8s;
  z-index: 1;
  animation-duration: 2s;
  animation-name: down_animation;
}
#header.active{
  padding-top: 0;
  box-shadow: 0 3px 7px rgb(0 0 0 / 10%);
  background-color: rgba(255,255,255,0.95);
}

.top_li:hover .buttom_ul{
  visibility: visible;
  opacity: 1;
  transition: .5s;
}
.buttom_ul{
  visibility: hidden;
  position: absolute;
  left: 50%;
  width: 120px;
  transform: translateX(-50%);
  border-radius: 5px;
  opacity: 0;
  font-size: 14px;
  font-weight: 500;
  li{
    padding: 2px 0;
    line-height: 24px;
  }
  li:first-child{
    margin-top: 10px;
  }
  li:last-child{
    margin-bottom: 10px;
  }
}
.inner{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  height: 80px;
  @include pc{
    padding: 0 5%
  }
}

//logo
.logo{
  img{
    width: 220px;
    height: 45px;
  }
}

//Nav
.nav{
  display: flex;
  .nav_R,
  .nav_L {
    display: flex;
    align-items: center;
    text-align: center;
  }
  .nav_L {
    font-size: 17px;
    @include pc {
      font-size: 16px;
    }
  }
  .nav_R {
    color: #888;
    font-size: 15px;
    @include pc {
      font-size: 14px;
    }
  }
  .nav_L::after {
    content: '';
    height: 20px;
    width: 2px;
    margin: 30px 22px;
    background: #999;
    opacity: .3;
  }
  .top_li {
    position: relative;
    margin: 0 14px;
    padding: 25px 0;
    white-space: nowrap;
  }
  .top_li_a{
    color: #888;
  }
  .buttom_ul {
    top: 55px;
    background: rgb(26, 26, 26);
    color: rgba(255,255,255,0.7);
    li:hover {
      background: #000;
      color: #fff;
    }
  }
}

//Sub_nav
.sub_nav{
  display: flex;
  justify-content: end;
  width: 220px;
  .top_li{
    position: relative;
    margin-left: 14px;
    text-align: center;
  }
  img{
    width: 22px;
    padding: 20px 10px;
  }
  .buttom_ul{
    top: 50px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 6px 0px;
    color: #888;
    li:hover{
      background: #eee;
      color: #000;
    }
  }
}
</style>
