//*narrowing은 모호한 타입(union type)을 가지고 있을 때, 추가적인 타입 체크를 이용해 타입을 작은 범위로 좁혀주는 것을 뜻한다
//narrowing 할 때 주로 typeof를 사용하는데, 이것으로 부족할 경우가 생기게 된다


//narrowing 심화


//1. && 연산자 사용
//undefined 또는 null 타입 체크 시 typeof를 사용하면 코드가 길어지는데, 
function func(x: string | undefined) {
  if(typeof x === 'string') {

  } else {

  }
}

//&& 연산자를 사용해 코드를 줄일 수 있다
//참고: && 연산자는 첫 번째 falsy를 찾는다
function func01(x: string | undefined) {
  if(x && typeof x === 'string') {
    
  }
}
//x가 undefined면 if문이 실행되지 않는다(조건식 안에 falsy 값이 남으면 if문은 실행되지 않는다)
//x가 string이면 if문이 실행된다



//2. in 사용
//: 해당 객체 안에 특정 키가 있는지 확인할 때 사용

//서로다른 속성을 가지고 있는 object 자료형을 narrowing 할 때 사용된다

type Fish = {swim: string}
type Bird = {fly: string}

function func02(animal: Fish | Bird) {
    animal.swim
}
//에러 발생 ('Fish | Bird' 형식에 'swim' 속성이 없습니다. 'Bird' 형식에 'swim' 속성이 없습니다.ts(2339))

function func03(animal: Fish | Bird) {
  if('swim' in animal) {
    animal.swim
  }
}



//3. instanceof 사용
//: 해당 객체가 어떤 생성자 함수를 사용하여 생성되었는지 여부(boolean) 반환

//어떠한 class로부터 new 키워드로 생성된 object 들이 비슷할 때, 부모 class로 narrowing이 가능하다

let date = new Date()

if(date instanceof Date) {
  // date가 Date로부터 생성된 object 일 때 실행해 줘
}



//------------------------



//비슷한 object 타입일 경우(배타적인 속성이 없을 때), literal type을 강제로 부여하면 도움된다

type Car = {
  wheel: '4개', 
  color: string
}

type Bike = {
  wheel: '2개',
  color: string
}

function func04(x: Car | Bike) {
  if(x.wheel === '4개') {
    console.log('x는 Car 타입');
  }
}


//📌 결론
//어떤 타입인지 특정지을 수 있으면 narrowing으로 인정해준다
