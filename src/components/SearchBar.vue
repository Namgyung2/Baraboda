<template>
  <form id="search_bar">
    <select 
      name="search_day" 
      id="search_day">
      <option value="one_week">
        일주일
      </option>
      <option value="one_month">
        한달
      </option>
      <option value="three_month">
        세달
      </option>
      <option value="whole">
        전체
      </option>
    </select>
    <select 
      name="search_key" 
      id="search_key">
      <option value="title">
        제목
      </option>
      <option value="content">
        내용
      </option>
      <option value="author">
        글쓴이
      </option>
      <option value="ID">
        아이디
      </option>
      <option value="nickname">
        별명
      </option>
      <option value="product_information">
        상품정보
      </option>
    </select>
    <input type="text">
    <button type="submit">
      SEARCH
    </button>
  </form>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#search_bar{
  text-align: center;
  font-weight: 300;
  font-size: 16px;
  color: #333;
  margin: 30px 0 0;
  color: #333;
}
select,
input,
button{
  border: 1px solid #e8e8e8;
  padding: 0 0 0 5px;
  margin: 0 2px 0 0;
}
select{
  height: 32px;
  width: 82px;
  font-size: 12px;
}
input{
  height: 30px;
  font-size: 12px;
}
button{
  width: 100px;
  height: 32px;
  padding: 0;
  border-radius: 5px;
  background: #888;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
}
</style>