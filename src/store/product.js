export default {
  //module
  namespaced: true,
  //data
  state: ()=>({

    //스페셜티
    specialTea: [
      {
        name: '에디오피아 예가체프 게뎁 반코 고티티 GI 내추럴',
        shortNotice: '#플로럴 #망고 #쥬시 #복합성',
        price: 15000,
        discount: 0,
        sell: true,
        img: ['에디오피아 예가체프 게뎁 반코 고티티 GI 내추럴.jpg']
      },
      {
        name: '알산바도르 핀카 에스코시아 SL34 에어로빅 내추럴',
        shortNotice: '#짙은 시트러스 #견과류 #살구',
        price: 15000,
        discount: 0,
        sell: true,
        img: ['알산바도르 핀카 에스코시아 SL34 에어로빅 내추럴.jpg']
      },
      {
        name: '디카페인 콜롬비아 수프리모 산어거스틴',
        shortNotice: '#캐러멜 #꿀 #오렌지 #밀크초콜릿',
        price: 13000,
        discount: 0,
        sell: true,
        img: ['디카페인 콜롬비아 수프리모 산어거스틴.jpg']
      },
      {
        name: '인도네시아 수마트라 가요 쁘가싱 더블워시드',
        shortNotice: '#군고구 #오렌지 #초코바 #견과류 #부드러운 질감',
        price: 15000,
        discount: 0,
        sell: true,
        img: ['인도네시아 수마트라 가요 쁘가싱 더블워시드.jpg']
      },
      {
        name: '과테말라 우에우에테낭고 와이칸',
        shortNotice: '#바닐라 #초코 #몹시달다 #깨끗하다',
        price: 15000,
        discount: 0,
        sell: true,
        img: ['과테말라 우에우에테낭고 와이칸.jpg']
      },
      {
        name: '에티오피아 예가체프 아리차 GI 내추럴',
        shortNotice: '#크렌베리 #블루베리 #화사한 여운',
        price: 15000,
        discount: 0,
        sell: true,
        img: ['에티오피아 예가체프 아리차 GI 내추럴.jpg']
      },
    ],

    // 커피팩/선물세트
    coffeePack: [
      {
        name: '스페셜티 데일리팩',
        shortNotice: '30g x 7ea (다양한 스페셜티를 한박스 안에)',
        price: 18500,
        discount: 10,
        sell: true,
        img: ['스페셜티 데일리팩.jpg']
      },
      {
        name: '스페셜티 원두 선물세트',
        shortNotice: '200g x 2ea (선물박스포장)',
        price: 26000,
        discount: 0,
        sell: true,
        img: ['스페셜티 원두 선물세트.jpg']
      },
    ],

    //커피용품
    paraphernalia: [
      {
        name: '[칼라타] 102LD 도자기 드리퍼(브라운)',
        shortNotice: '2~4인용',
        price: 12800,
        discount: 0,
        sell: false,
        img: ['[칼라타] 102LD 도자기 드리퍼(브라운).jpg']
      },
      {
        name: '[칼리타] 101LD 도자기 드리퍼(브라운)',
        shortNotice: '1~2인용 브라운',
        price: 11800,
        discount: 0,
        sell: false,
        img: ['[칼리타] 101LD 도자기 드리퍼(브라운).jpg']
      },
      {
        name: '[폰타노] 우드 인덕션 드립포트 600ml',
        shortNotice: '',
        price: 18000,
        discount: 0,
        sell: true,
        img: ['[폰타노] 우드 인덕션 드립포트 600ml.jpg']
      },
      {
        name: '[폰타노] 우드 핸드밀 KH-3',
        shortNotice: [],
        price: 25900,
        discount: 0,
        sell: true,
        img: ['[폰타노] 우드 핸드밀 KH-3.jpg']
      },
      {
        name: '[칼리타] FP 104 필터 브라운',
        shortNotice: '7~12인용 100매',
        price: 8500,
        discount: 0,
        sell: true,
        img: ['[칼리타] FP 104 필터 브라운.jpg']
      },
      {
        name: '[칼리타] FP 103 필터 브라운',
        shortNotice: '4~7인용 100매',
        price: 6500,
        discount: 0,
        sell: true,
        img: ['[칼리타] FP 103 필터 브라운.jpg']
      },
      {
        name: '[칼리타] FP 102 필터 브라운',
        shortNotice: '2~4인용 100매',
        price: 4900,
        discount: 0,
        sell: true,
        img: ['[칼리타] FP 102 필터 브라운.jpg']
      },
      {
        name: '[칼리타] FP 101 필터 브라운',
        shortNotice: '1~2인용 100매',
        price: 4500,
        discount: 0,
        sell: true,
        img: ['[칼리타] FP 101 필터 브라운.jpg']
      },
    ],

    //바라보다 굿즈
    goods: []
  }),
  //computed (계산된 데이터)
  getters: {
  },
  //methods 
  mutations:'',
  actions:''
}