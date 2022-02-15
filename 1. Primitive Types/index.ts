// 타입스크립트는 다양한 기본 타입(12가지)을 제공한다
// String, Number, Boolean, Null, Undefined, Array, Object, Any, Void, Never, Tuple, Enum

let str: string = 'choi'
let age: number = 20
let cute: boolean = true
let money: null = null
let food: undefined = undefined

//array
let pepole: string[] = ['choi', 'sung2']
let person: Array<string> = ['choi', 'sung2']

//object
let members: {
	member1 : string,
	member2 : string
} = {
	member1 : 'choi',
	member2 : 'sung2'
}

//📌
//모든 변수에 타입 지정을 하지 않아도 된다
//대부분 변수 생성 시 타입스크립트가 알아서 타입을 자동으로 부여해주기 때문이다
//간단한 변수들은 타입 명시를 생략하도록 하자
