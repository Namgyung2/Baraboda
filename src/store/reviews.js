export default {
	//module
	namespaced: true,
	//data
	state: ()=>({
		reviews: [
      {
        no: 1,
        prduct: '',
        title: '후기 테스트',
        writer: '바라보다',
        date: '2021-01-26 17:33:40',
        views: '0',
        rating: 2.5
      },
      {
        no: 2,
        prduct: '',
        title: '후기',
        writer: '김남경',
        date: '2021-09-15 17:33:40',
        views: '0',
        rating: 5
      }
    ]
  })
}
