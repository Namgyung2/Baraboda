<template>
  <div id="weekly_pick">
    <h2>Weekly Pick</h2>
    <div class="tit">
      바라보다가 추천합니다
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
#weekly_pick{
  padding: 90px 100px 80px;
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
</style>