<template>
  <div id="best_items">
    <h2>baraboda Specialy Coffee</h2>
    <div class="tit">
      커피를 바라보다
    </div>
    <div class="tag">
      <div class="special_tea">
        <span>#</span>스페셜티 베스트
      </div>
      <div class="coffee_supplies">
        <span>#</span>커피용품
      </div>
    </div>
    <div class="special_tea_item">
      <div class="best_1" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  #best_items{
    padding: 90px 100px 80px;
    background: #f9f1e9;
    color: #333;
    text-align: center;
    font-weight: 400;
  }
  h2{
    font-size: 12px;
    letter-spacing: 0.12em;
  }
  .tit{
    font-size: 34px;
    font-weight: 300;
    line-height: 1.6;
    &::after{
      content: '';
      display: block;
      width: 14px;
      height: 1px;
      margin: 18px auto 24px;
      background: #aaa;
    }
  }
  .tag{
    display: flex;
    justify-content: center;
    font-size: 18px;
    div{
      margin: 0 10px;
      cursor: pointer;
      color: #999;
    }
    span{
      margin-right: 4px;
    }
    div.active{
      color: #333;
      cursor: default;
    }
  }
</style>