export default {
	//module
	namespaced: true,
	//data
	state: ()=>({
		grinding: [
			{ value: '*', text:'[필수] 옵션을 선택해 주세요'},
			{ value: '**', text:'-------------------------'},
			{ value: '분쇄안함 (홀빈)', text:'분쇄안함 (홀빈)'},
			{ value: '아주굵게분쇄 (프렌치 프레이스)', text:'아주굵게분쇄 (프렌치 프레이스)'},
			{ value: '굵게분쇄 (핸드드립/커피메이커)', text:'굵게분쇄 (핸드드립/커피메이커)'},
			{ value: '중간분쇄 (더치커피)', text:'중간분쇄 (더치커피)'},
			{ value: '곱게분쇄 (모카포트)', text:'곱게분쇄 (모카포트)'},
			{ value: '아주곱게분쇄 (에스프레소)', text:'아주곱게분쇄 (에스프레소)'}
		],
		roasting: [
			'기본 로스팅',
			'조금 더 쓴맛'
		],
		weight: [
			{ value: '*', text:'[필수] 옵션을 선택해 주세요'},
			{ value: '**', text:'-------------------------'},
			{ value: '200g', text: '200g'},
			{ value: '500g (+17,000원)', text: '500g (+17,000원)'},
			{ value: '1kg (+30,000원)', text: '1kg (+30,000원)'}
		]
	}),
	//computed (계산된 데이터)
	getters:{
		
	},
	//methods 
	mutations:'',
	actions:''
}