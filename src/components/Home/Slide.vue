<template>
  <section id="slide">
    <div class="inner">
      <div
        class="slide_box"
        :class="`slide_box_${i}`"
        v-for="(slide,i) in slides"
        :key="i">
        <img
          class="slide_img"
          :class="`slide_img_${i}`"
          :src="`images/${slide.src}`">
        <div class="text">
          <p v-html="slide.text" />
          <span>Baraboda Coffee and Roaster</span>
        </div>
      </div>
      <div class="slide_btn">
        <button
          @click="slideBtnClick(b)"
          v-for="(btn,b) in slides"
          :key="b"
          :class="`btn_${b}`" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      slideNum: [0,0],
      run: true,
      slideTime: 5000,
      click:'',
      slides:[
        {src: 'slide_1.png', text:'바라보다 스페셜티 커피와 함께 <br> 좀 더 여유롭고 설레는 <br> 하루를 바라보게 되기를'},
        {src: 'slide_2.png', text:'바라보다 스페셜티 커피와 함께 <br> 좀 더 여유롭고 설레는 <br> 하루를 바라보게 되기를'},
        {src: 'slide_3.png', text:'사람과 기억 그리고 커피 <br> 모두가 추억이 되는 그 곳 바라보다'}
      ]
    }
  },
  methods: {
    swiper(){
      document.querySelector(`.slide_box_${this.slideNum[1]}`).classList.add('show')
      document.querySelector(`.btn_${this.slideNum[1]}`).classList.add('click')
      setInterval(() => {
        if(this.run == true){
          if(this.slideNum[1] > this.slideNum.length-1){
            this.slideNum.push(0)
          }else{
            this.slideNum.push(this.slideNum[1] + 1)
          }
          this.slideNum.shift()
          document.querySelector(`.btn_${this.slideNum[1]}`).classList.add('click')
          document.querySelector(`.slide_box_${this.slideNum[1]}`).classList.add('show')
          document.querySelector(`.btn_${this.slideNum[0]}`).classList.remove('click')
          document.querySelector(`.slide_box_${this.slideNum[0]}`).classList.remove('show')
        }
      }, this.slideTime);
    },
    slideBtnClick(b){
      this.run = false
      this.slideNum.push(b)
        this.slideNum.shift()
        if(this.slideNum[0] !== this.slideNum[1]){
          document.querySelector(`.btn_${this.slideNum[1]}`).classList.add('click')
          document.querySelector(`.slide_box_${this.slideNum[1]}`).classList.add('show')
          document.querySelector(`.btn_${this.slideNum[0]}`).classList.remove('click')
          document.querySelector(`.slide_box_${this.slideNum[0]}`).classList.remove('show')
        }
      setTimeout(() => {
        this.run = true
      }, this.slideTime);
    }
  },
  mounted(){
    this.swiper()
  }
}
</script>

<style lang="scss" scoped>
#slide{
  background: #f9f1e9;
  .slide_img_0{
    position: relative;
    padding: 0 100px 80px;
  }
  .slide_box{
    opacity: 0;
    visibility: hidden;
    transition: 1s;
  }
  .slide_box.show{
    visibility: visible;
    opacity: 1;
  }
}
.inner{
  position: relative;
}
.slide_img{
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  max-width: 1780px;
  width: 100%;
  padding: 0 100px 80px;
  box-sizing: border-box;
  margin: auto;
}
.text{
  position: absolute;
  width: 100% -200px;
  top: 40%;
  padding: 0 100px 0;
  font-size: 24px;
  line-height: 1.6;
  box-sizing: border-box;
  p{
    display: block;
  }
  span{
    display: block;
    opacity: 0.4;
    font-size: 12px;
  }
}
.slide_box_0 .text{
  left: 10%;
}
.slide_box_1 .text{
  right: 10%;
  text-align: end;
}
.slide_box_2 .text{
  right: 10%;
  text-align: end;
}

//슬라이드 버튼
.slide_btn{
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  margin: 0 0 50px;
  button{
    width: 11px;
    height: 11px;
    padding: 0;
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 50%;
    margin: 0 4px;
    background: transparent;
    cursor: pointer;
  }
  button.click{
    background: rgb(59, 59, 59);
  }
}
</style>