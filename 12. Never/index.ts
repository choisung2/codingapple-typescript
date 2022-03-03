//Never 타입은 함수 return 값에 붙일 수 있는 타입이다

//1. return 값이 없어야 하고,
//2. 함수 실행이 끝나지 않아야 한다(=endpoint가 없어야 한다)

function a() :never{
  while ( true ) {
    console.log(123)
  }
}
//* while 은 소괄호의 조건식이 true일 경우 계속 내부 코드를 실행한다 👉 무한 실행


function b() :never{
  throw new Error('에러메세지')
}
//* throw new Error( )는 강제로 에러를 발생시킨다


//* 함수 내부에서 코드 실행이 끝나는 함수는 never를 붙일 수 없다
function c(){
  console.log(123)
}


//* 모든 함수는 return undefined 를 가지고 있다(return이 없는데 함수가 실행되는 이유)


//return하고 싶지 않을 때는 보통 void 타입을 사용한다. => never 타입은 쓸 일이 없다는 뜻이다.
//그럼에도 알아둬야 하는 이유는 코드를 잘 못 짰을 때 자동으로 등장하기 때문이다


//------------------------


//never 타입이 등장하는 경우

//1. 어딘가 이상한 narrowing
//: parameter가 string 타입 밖에 없는데 else를 사용했을 때 never가 등장한다
function d(parameter: string) {
  if(typeof parameter === "string"){
    console.log(parameter)
  } else {
    console.log(parameter) 
  }
}
//(parameter) parameter: never



//2. 어떤 함수 표현식
//: 아무것도 return 하지 않고, 끝나지도 않을 경우 never 타입이 자동으로 할당된다
let e = function (){
	throw new Error()
}
//let e: () => never



//📌 결론
//: never가 보이는 경우 코드를 수정하자!
