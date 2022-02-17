//Literal Type(리터럴 타입)
//특정 글자나 숫자 같은 정확한 값을 지정할 수 있다
//더 엄격한 타입 지정이 가능하다

let last: 'choi'

last = 'kim'
//에러 발생('"kim"' 형식은 '"choi"' 형식에 할당할 수 없습니다.ts(2322))

//or도 가능
let me: 'choi' | 'sung2'
me = 'choi'


//리터럴 타입은 함수에서 강점을 보인다
function hi(a: 'hello'): 1 | 0{
  return 1
}

hi('hello')
//지정 값만 파라미터로 넣을 수 있고, 지정 값만 return 할 수 있게 해 준다


//Q
function RPS(x: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[]{
  return ['가위', '보'] 
}


//------------------------


//리터럴 타입의 문제점
let member = {
  name: 'kim'
}

function mem(x: 'kim') {

}

mem(member.name)
//에러 발생('string' 형식의 인수는 '"kim"' 형식의 매개 변수에 할당될 수 없습니다.ts(2345))
//member.name은 string타입이고, kim은 'kim' 타입이기 때문에 에러가 발생한다


//해결 방안에는 1. object에 타입을 추가하거나 2. assertion 사용, 3. 또는 as const를 활용해라

let memberPrac = {
  name: 'kim'
} as const

function memb(x: 'kim') {

}

memb(memberPrac.name)


// 📌 as const 기능
// - object의 value로 타입을 변경해준다
// - object의 모든 속성을 readonly로 변경해준다
