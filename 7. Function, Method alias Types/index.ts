//function alias types
//함수 타입도 type alias로 저장해서 쓸 수 있다
//⭐화살표 함수를 사용해야 한다

type Func = (x: string) => number
// ❌ function func: Func () {} ❌
//선언식으로는 alias를 사용할 수 없고, 표현식을 통해서만 가능하다

let func: Func = function (x) {
  return 10
}


//------------------------


//📌 object에도 함수가 들어갈 수 있다
let member00 = {
  name: 'choi',
  plus() {}
}

member00.plus()



//함수 포함 object 타입 지정 예시
//과제1

type Member = {
  name: string,
  plus: (x: number) => number,
  changeName: () => void
}

let member: Member = {
  name: 'choi',
  plus(x) {
    return x + 1
  },
  changeName: () => {
    console.log('Hi')
  }
}

member.plus(1)
member.changeName()



//과제2
type CutZero = (x: string) => string

let cutZero: CutZero = function(x) {
  if(x[0] === '0') {
    return x.substring(1)
  }
}

cutZero('0cutZero')


type RemveDash = (x: string) => number
let removeDash: RemveDash = function(x) {
  if(typeof x === 'string') {
    return Number(x.replace(/-/g, ''))
  } else {
    return Number(x)
  } 
}

removeDash('11-1111-111-11')
//코딩애플님은 if문을 사용하지 않고 그냥 replace+정규표식으로 작성하셨다.

//type CutType = (x :string) => string

// let cutZero :CutType = function (x){
//     let result = x.replace(/^0+/, "");
//     return result
// }
// function removeDash(x :string) :number{
//     let result = x.replace(/-/g, "");
//     return parseFloat(result)
// }

//이게 더 깔끔한 것 같다!




//과제3(과제2와 이어진다)
type Prac = (
  x: string,
  y: CutZero,
  z: RemveDash
) => number

let prac: Prac = function(x, y, z) {
  return z(y(x))
}

prac('010-1111-2222', cutZero, removeDash)
