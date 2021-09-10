<template>
  <footer id="footer">
    <div class="top">
      <div class="wrap">
        <ul class="footer_nav same_form">
          <li>
            <router-link to="/">
              홈
            </router-link>
          </li>
          <li>
            <router-link to="/">
              회사소개 
            </router-link>
          </li>
          <li>
            <router-link to="/">
              이용약관
            </router-link>
          </li>
          <li>
            <router-link to="/">
              개인정보처리방침
            </router-link>
          </li>
          <li>
            <router-link to="/">
              이용안내
            </router-link>
          </li>
        </ul>
        <div class="contact same_form">
          <h5>문의 및 안내</h5>
          <p class="call">
            {{ call }}
          </p>
          <p class="open_date">
            평일 10:00 ~ 16:00 / 점심 12:00 ~ 13:00
          </p>
          <p class="open_date">
            (토,일,공휴일 무휴)
          </p>
          <div class="sns">
            <a href="http://www.instagram.com">
              <img
                src="images/Instagram_icon.png"
                alt="인스타그램 링크">
            </a>
            <a href="http://www.facebook.com">
              <img
                src="images/Facebook_icon.png"
                alt="페이스북 링크">
            </a>
          </div>
        </div>
        <div class="account same_form">
          <h5>입금 계좌 정보</h5>
          <p>하나 102-910032-53404</p>
          <p>국민 807501-04-253019</p>
          <p>농협 355-0039-6724-13</p>
          <p class="acount_name">
            예금주 : 주식회사 미스터콩
          </p>
        </div>
      </div>
    </div>
    <div class="bottom">
      <ul class="inner">
        <li><span>상호명</span>주식회사 미스터콩</li>
        <li><span>대표자</span>권영석</li>
        <li><span>사업자등록번호</span>120-87-97585</li>
        <li><span>통신판매업신고번호 </span> 제2018-진건퇴계원-0185호 [사업자정보확인]</li>
        <li><span>고객센터</span>031-575-1171</li>
        <li><span>주소</span>12139 경기도 남양주시 진건읍 진건우회로19번 11 미스터콩</li>
        <li><span>개인정보보호책임자</span></li>
        <li class="warning">
          바라보다에서 제공하는 모든 컨텐츠는 저작권법에 보호받는 저작물로서, 무단으로 복제, 배포하는 경우에는 저작권법에 의하여 처벌을 받을 수 있습니다.
        </li>
        <li class="copy">
          Copyright © 2020 바라보다. All rights reserved.
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "scss/_mixin";
  #footer{
    font-weight: 300;
    border-top: 1px solid #f0f0f0;
  }

   //상단
  .top{
    background:#fff;
    width: 100%;
    h5{
      margin-bottom: 12px;
    }
    .wrap{
      display: flex;
      justify-content: center;
      height: 270px;
      padding: 65px 0;
    }
    .same_form{
      text-align: center;
      width: 327px;
      line-height: 1.6;
      &:nth-child(2){
        border-left: 1px solid #f0f0f0;
        border-right: 1px solid #f0f0f0;
        background-image: url();
      }
      p{
        white-space: nowrap;
      }
    }
    .footer_nav{
      color: #777;
      font-size: 15px;
      font-weight: 400;
      li{
        padding-bottom: 4px;
      }
      li:nth-child(4){
        color: #333;
      }
    }
    .contact{
      color: #333;
      .call{
        font-weight: 400;
        font-size: 20px;
      }
      .open_date{
        font-family: 'Roboto','Noto Sans KR', sans-serif;
        font-size: 14px;
      }
    }
    .account{
      color: #333;
      p{
        font-size: 14px;
        font-family: 'Roboto','Noto Sans KR', sans-serif;
      }
      .acount_name{
        margin-top: 8px;
        color: #AAA;
      }
    }
    .sns{
      display: flex;
      justify-content: center;
      margin-top: 8px;
      a{
        transition: .3s;
      }
      a:hover{
        opacity: .5;
      }
      img{
        display: block;
        height: 16px;
        margin: 0 4px;
      }
    }
  }
  //하단
  .bottom{
    background: #f9f9f9;
    width: 100%;
    font-family: 'Roboto','Noto Sans KR', sans-serif;
    font-size: 13px;
    padding: 45px 0;
    .inner{
      display: flex;
      height: 100px;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
      li{
        margin: 0 6px;
        white-space: nowrap;
      }
      span{
        color: #AAA;
        margin-right: 4px;
      }
      .warning{
        color: #AAA;
      }
      .copy{
        width: 80%;
        text-align: center;
        color: #AAA;
        margin-top: 8px;
      }
    }
  }
</style>