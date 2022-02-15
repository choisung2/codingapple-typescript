//union Type: 하나의 변수에 여러 타입 지정 가능
let union1: number | string = 123
let union2: (number | string) = 123

//union - array(괄호 필수)
let unionArray: (number | string)[]  = [1, "hi", 3]
//📌 괄호가 없으면 number 또는 [string array] 라는 뜻이 된다

//union - Object
let unionObject: { a: string | number }  = { a: 123 }


//✅ union Type은 새로운 타입을 만드는 것이기 때문에 수학 연산 불가능
let age: string | number
age + 1
// 에러 발생('+' 연산자를 'string | number' 및 'number' 형식에 적용할 수 없습니다.ts(2365))
// string + 1(가능)
// number + 1(가능)
// string | number + 1(불가능)


//------------------------


//any Type: 모든 타입 허용
let any: any
any = 1
any = "hi"
any = {}

//✅ any를 사용하면 타입스크립트 쓸 이유가 없다. 비상시를 제외하고는 사용하지 말자


//------------------------


//unknown Type: 모든 타입 허용. any와 유사하지만, 조금 더 안전하다
let unknown: unknown
unknown = 1
unknown = "hi"
unknown = {}

//✅ unknown 이 any 보다 안전한 이유
let safe: any
safe = 1
safe = "hi"
safe = {}

let a :string = safe
//any - 에러 x

let safety: unknown
safety = 1
safety = "hi"
safety = {}

let b :string = safety
//unknown - 에러 발생('unknown' 형식은 'string' 형식에 할당할 수 없습니다.ts(2322))