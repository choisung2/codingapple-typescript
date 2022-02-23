// object의 경우
//1. type 과
type Square = { color : string, width : number }

let square: Square = { color : 'red', width : 100 }

//2. interface로 타입을 지정할 수 있다
interface Square01 { color : string, width : number }

let square01: Square01 = { color : 'red', width : 100 }


//------------------------


//interface
//1. extends로 interface 복사 가능
interface Student {
  name : string
}

interface Teacher extends Student {
  age : number
}

let student: Student = { name : 'kim' }
let teacher: Teacher = { name : 'kim', age : 20 }


//속성이 중복될 경우, 에러 발생
interface Student01 {
  name : string
}

interface Teacher01 extends Student01 {
  name : number
}

let teacher01: Teacher01 = { name : 'kim' }
//에러 발생('string' 형식은 'number' 형식에 할당할 수 없습니다.ts(2322))


//* type도 extends와 유사한 기능이 있다 : &
type Student02 = { name : string }
type Teacher02 = { age : number } & Student


//interface도 & 사용 가능
interface Student03 { name : string }
interface Teacher03 { age : number } 

let teacher03: Teacher03 & Student03 = { name : 'kim', age : 20 }
//차이점: extends는 복사, &는 두 타입을 모두 만족하는 것


//2. 중복선언 가능 = 자동 extends가 된다
interface Student04 {
  name : string
}

interface Student04 {
  age : number
}
//= interface Student { name : string, age : number }


//* type은 중복 선언이 불가능하다
type Student05 = { name : string }

type Student05 = { age : number }
//에러 발생('Student05' 식별자가 중복되었습니다.ts(2300))


//✅ type 은 엄격하고 interface 는 유연하기 때문에, 다른 사람이 코드를 이용하는 상황이라면 interface를 사용하자
//(일반적인 상황일 때는 type 사용)


//------------------------


//과제 1
interface Product {
  brand : string,
  serialNumber : number,
  model : string[]
}

let 상품: Product = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }


//과제 2 & 과제 3
interface Cart {
  product : string,
  price : number
}

interface NewCart extends Cart {
  card?: boolean
}

let 장바구니: NewCart[] = [ { product : '청소기', price : 7000, card : false }, { product : '삼다수', price : 800 } ] 


//과제 4
interface Calcul {
  plus: (x: number, y: number) => number,
  minus: (x: number, y: number) => number
}

let calcul: Calcul = {
  plus(x, y) {
    return x + y
  },
  minus(x, y) {
    return x - y
  }
}
