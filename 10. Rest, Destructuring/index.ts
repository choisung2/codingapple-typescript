//rest 파라미터 타입 지정
//rest 파라미터는 항상 array 안에 담겨오기 때문에, 타입도 array와 똑같이 지정 해주면 된다
function num(...a: number[]) {
  console.log(a);
}

num(1,5,3,5,6,6)

//string, number 타입을 동시에 지정하고 싶을 때는 Union type 사용
function num01(...a: (number | string)[]) {
  console.log(a);
}

num01(1,5,3,5,6,'안녕')


//✅ rest는 spread와 다르다
//...spread는 array, object 자료 왼쪽에, ...rest는 함수 선언시 소괄호 안에서 사용된다

//*spread
//배열이나 객체를 펼칠 때 사용, 새로운 객체를 만들 때 사용
let arr = [1, 2, 3]
let arr2 = [4, 5]
let arr3 = [...arr, ...arr2]

console.log(arr3);
// [1,2,3,4,5]


//------------------------


//destructuring
//array, object 안에 있는 데이터를 변수로 만들고 싶을 때 사용

//object destructuring 은 object 속성 명을 그대로 작명해야 편리하고, 
let per = { stu : true, ag : 20 }

let stu01 = per.stu
let age01 = per.ag

// ===

let { stu, ag } = { stu : true, ag : 20 }


//array destructuring 은 자유롭게 작명해도 된다
let [a1, a2] = ['안녕', 100]

console.log(a1);
//'안녕'



//destructuring 타입 지정
//destructuring 문법도 함수 파라미터에 사용 가능하며, array, object와 똑같이 타입 지정 해주면 된다
let person = { student : true, age : 20 }

function member({ student, age }: { student: boolean, age: number }): void{
  console.log(student, age) 
}
member(person) //true, 20

//or

interface Person {
  student: boolean,
  age: number
}

let person01: Person = { student : true, age : 20 }

function member01({student, age}: Person): void{
  console.log(student, age)
}
member01(person01) //true, 20


//------------------------



//과제 1
function maxNum(...x: number[]) {
  let result = 0
  x.forEach((i) => {
    if(result < i) {
      result = i
    }
  })
  console.log(result);
}

maxNum(6,3,7,2,8)


//과제2
interface Mem {
  user: string,
  comment: number[],
  admin: boolean
}

let mem: Mem = { user: 'kim', comment: [3,5,4], admin: false }

function member03({user, comment, admin}: Mem): void {
  console.log(user, comment, admin);
}

member03(mem)


//과제3
type Age = (number | string | boolean)[]

let age: Age = [40, 'wine', false]

function wineAge([x, y, z]: Age): void {
  console.log(x, y, z);
}

wineAge(age)