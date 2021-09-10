<template>
  <div id="magazine">
    <h2>Braboda Coffee Magazine</h2>
    <div class="tit">
      바라보다 커피 매거진
    </div>
    <div class="boxs">
      <div class="box">
        <a class="view_more">view more<span><i class="fas fa-angle-right" /></span></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
#magazine{
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