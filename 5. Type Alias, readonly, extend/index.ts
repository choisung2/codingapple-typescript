//Type Alias
//복잡한 타입을 간단하게, 재사용하기 위해 타입을 변수에 담는 것을 뜻한다

type A = string | number | undefined

let a: A

//object의 경우, 자주 활용된다
type Member = { name : string, age : number }

let member: Member = {name: 'kim', age: 20}
//✅ 타입 변수 명은 대문자로 시작해야 한다(일반 변수와 차별을 두기 위해)


//------------------------


//readonly
//특정 속성을 변경할 수 없게 한다
type Myname = {
  readonly name: string
}

const myname: Myname = { 
  name : 'sung2'
}

myname.name = 'sung3'
//에러 발생(읽기 전용 속성이므로 'name'에 할당할 수 없습니다.ts(2540))
//타입스크립트에서만 에러가 난다(js 파일을 보면 에러 없이 sung3으로 변경되어있다)


//------------------------


//extend
//OR 연산자를 이용해 Union type 을 만들 수 있다
type Name = string
type Age = number
type Person = Name | Age // string | number

//& 연산자를 이용해 Object 타입을 합칠 수 있다
type PositionX = { x: number }
type PositionY = { y: number }

type Position = PositionX & PositionY // { x: number, y: number }

let position: Position = { x: 10, y: 20 }


//✅ type 키워드는 재정의가 불가능하다
//✅ Type alias + Type alias 만 가능한 게 아니라 Type alias + { name : string } 도 가능하다


//------------------------


//과제 1
type PoX = { x: number }

type PoY = { x: number, y: number }

type Po = PoX & PoY
// type Po = { x: number } & { x: number, y: number }

let po: Po = { x: 10, y: 20 }
//오류 없음!


//과제 2
type prac = { 
  color?: string,
  size: number,
  readonly position : number[]
}


//과제3
type UU = {
  name: string,
  phone: number,
  email: string
}


//과제4
type User = UU & { adult: boolean }

let prac1: User = {
  name: 'sung2',
  phone: 123456,
  email: '123@123.456',
  adult: true
}
