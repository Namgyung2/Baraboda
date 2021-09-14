<template>
  <div id="paginate">
    <button type="button">
      <i class="fas fa-angle-double-left" />
    </button>
    <button type="button">
      <i class="fas fa-chevron-left" />
    </button>
    <div class="page">
      <a class="click_page">1</a> 
    </div>
    <button type="button">
      <i class="fas fa-chevron-right" />
    </button>
    <button type="button">
      <i class="fas fa-angle-double-right" />
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  #paginate{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60px 0;
  }
  .page{
    display: flex;
    align-items: center;
    margin: 0 25px;
    a{
      display: block;
      width: 40px;
      height: 40px;
      padding: 10px 0;
      text-align: center;
      box-sizing: border-box;
    }
    .click_page{
      background: #f5f5f5;
      border-radius: 50%;
    }
  }
  button{
    border-collapse: collapse;
    width: 34px;
    height: 34px;
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: #888;
    background: #fff;
    border: 1px solid #ddd;
  }
</style>