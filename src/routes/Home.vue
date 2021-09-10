<template>
  <div id="home">
    <Slide />
    <BrandStory />
    <BsetItems />
    <Magazine />
    <Video />
    <WeeklyPick />
  </div>
</template>

<script>
import Slide from 'components/Home/Slide'
import BrandStory from 'components/Home/BrandStory'
import BsetItems from 'components/Home/BsetItems'
import Magazine from 'components/Home/Magazine'
import Video from 'components/Home/Video'
import WeeklyPick from 'components/Home/WeeklyPick'

export default {
  components:{
    Slide,
    BrandStory,
    BsetItems,
    Magazine,
    Video,
    WeeklyPick
  }
}
</script>

<style lang="scss">
.view_more{
  display: block;
  width: 100px;
  margin: 12px auto 0;
  font-size: 10px;
  transition: .5s;
  text-align: center;
  span{
    display: inline-block;
    transform: translateY(2px);
    margin-left: 3px;
    color: #ccc;
    font-size: 14px;
  }
}
.view_more:hover{
  transform: translateX(7px);
}
</style>