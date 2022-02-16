// Narrowing
//애매한 타입(union type)을 가지고 있을 때, 추가적인 타입 체크나 할당을 이용해 변수의 타입을 작은 범위로 좁혀주는 것(정해주는 것)을 뜻한다

function sum(x :number | string) {
  if(typeof x === 'string') {
    return x + '1'
  } else {
    return x + 1
  }
}

sum(123)
//함수 안에서 if문을 쓸 때 마지막에 else가 없으면 에러가 날 수 있다
//"noImplicitReturns": false 를 tsconfig.js 파일에 추가하면 에러 방지 가능


//------------------------


// Assertion
//narrowing 간소화(?) 버전으로, 하나의 타입으로 확정하고 싶을 때 사용한다
function array(x :number | string) {
  let arr :number[] = []
  arr[0] = x as number
	//"x는 숫자다!" 라고 주장하는 것이기 때문에 무슨 타입이 들어올지 알아야 사용 가능하다
}

array(1)

//as는 간편하지만, 정확히 코드를 작성하기 위해서는 narrowing을 사용해야 한다
//as는 타입 체크 기능을 임시로 해제하는 것과 마찬가지기 때문이다
//✅ as는 왜 타입 에러가 일어났는지 모를 때 비상용으로 사용하자


//------------------------


//과제 1
function clear(x: (string | number)[]) {
  let setClear: number[] = []

  x.forEach((e) => {
    if(typeof e === "string") {
      setClear.push(Number(e))
    } else {
      setClear.push(e)
    }
  })
}

clear([1,2,'3']);


//과제 2
let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }


function sub(x: {subject : string | string[]} ) {
  if(Array.isArray(x.subject) === true) {
    console.log(x.subject[x.subject.length - 1])
  } else {
    console.log(x.subject)
  }
}

sub(철수쌤)

//쌤 이름을 넣는게 아니라 obj를 넣는 거였다 ㄴㅇㄱ..? 그래도 똑같지 않나?!
