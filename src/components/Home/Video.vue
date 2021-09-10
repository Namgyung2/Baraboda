<template>
  <div id="video">
    <h2>Braboda Coffee Review</h2>
    <div class="tit">
      마주보다
    </div>
    <p>
      우리는 커피를 사랑하는 사람들과 함께 성장합니다. <br>
      바라보다와 함께한 당신의 이야기를 들려주세요.
    </p>
    <a class="view_more">view more <span><i class="fas fa-angle-right" /></span></a>
    <div class="video_box">
      <iframe
        src="https://www.youtube.com/embed/YaiaVsAUZ5M?rel=0&loop=1&playlist=YaiaVsAUZ5M&autoplay=1&mute=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
#video{
  position: relative;
  padding: 90px 0 390px;
  margin-bottom: 180px;
  background: #f6f8fb;
  text-align: center;
  font-weight: 400;
  color: #333;
}
h2{
  font-size: 12px;
  letter-spacing: 0.12em;
}
.tit{
  color: #41556b;
  font-size: 34px;
  font-weight: 300;
  line-height: 1.6;
}
p{
  margin-top: 12px;
  line-height: 1.6;
  font-weight: 300;
}

.video_box{
  position: absolute;
  top: 284px;
  left: 50%;
  transform: translateX(-50%);
  height: 531px;
  width: 1180px;
  overflow-y: hidden;
  scrollbar-width: none;
  &::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
  iframe{
    height: 700px;
    width: 1180px;
    transform: translateY(-60px);
  }
}
</style>