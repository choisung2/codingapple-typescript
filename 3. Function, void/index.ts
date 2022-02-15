//함수는 함수와 파라미터의 타입 지정이 가능하다
function multi(x: number) :number {
  return x * 2
}

multi(3)

multi('3')
//에러 발생('string' 형식의 인수는 'number' 형식의 매개 변수에 할당될 수 없습니다.ts(2345))


//✅ 파라미터에 타입을 지정하면 필수 파라미터가 된다
function multi2(x: number) :number {
  return x * 2
}

multi2()
//에러 발생(1개의 인수가 필요한데 0개를 가져왔습니다.ts(2554))


//✅ 파라미터를 선택 사항으로 두고 싶다면?
function multi3(x?: number) :number {
  return x * 2
}

multi3()
 //? 의 정확한 뜻은 | undefined와 같다


//------------------------


//void: return할 자료가 없을 때 사용
function multi4(x: number) :void {
  return x * 2
}

//return이 있기 때문에 바로 에러 발생('number' 형식은 'void' 형식에 할당할 수 없습니다.ts(2322))


//과제 1
function prac(x?: string) :void {
  if(x) {
    console.log('안녕하세요.' + x + '입니다.')
  } else {
    console.log('이름이 없습니다')
  } 
}

prac('홍길동')


//과제 2
function prac1(x: string | number) :number {
  return x = x.toString().length
}


//과제 3
function prac2(x: number, y: boolean, z: string): string | void {
  let score: number = x

  if(y === true) {
    score = score + 500
  }
  
  if(z === '상') {
    score = score + 100
  }

  if(score >= 600) {
    return ('결혼 가능')
  }
}
//함수 타입 지정 못 했다! 결혼 가능을 리턴할 때 string, 아무 것도 리턴되지 않을 때 void