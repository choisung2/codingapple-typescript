// strict 옵션을 켜주고 타입스크립트로 HTML를 조작하면 에러가 난다

const title = document.getElementById('title')

title.innerHTML = '반가워요'
//에러 발생(개체가 'null'인 것 같습니다.ts(2531))



//------------------------



//해결 방안 1. narrowing
let title01 = document.getElementById('title')

if(title01 != null) {
  title01.innerHTML = '반가워요'
}


//해결 방안 2. instanceof 를 이용한 narrowing
let title02 = document.getElementById('title')

if(title02 instanceof HTMLElement) {
  title02.innerHTML = '반가워요'
}


//해결 방안 3. assertion
let title03 = document.getElementById('title') as HTMLElement
title03.innerHTML = '반가워요'


//해결 방안 4. optional chaining 을 이용한 narrowing
let title04 = document.getElementById('title')
if(title04?.innerHTML) {
  title04.innerHTML = '반가워요'
}


//해결 방안 5. strict 설정 끄기



//------------------------



//a 태그 href 변경하기
let link = document.querySelector('.link')

link.href = 'kakao.com'
//에러 발생(개체가 'null'인 것 같습니다.ts(2531))
//에러 발생('Element' 형식에 'href' 속성이 없습니다.ts(2339))


//해결 방안
// narrowing 을 사용하고, html 요소에 정확한 타입 명칭 달아주기
let link01 = document.querySelector('.link')

if(link01 instanceof HTMLAnchorElement) {
  link01.href = 'kakao.com'
}



//------------------------



//과제 1
const img = document.getElementById('image')

if(img instanceof HTMLImageElement) {
  img.src = 'new.jpg'
}



//과제 2
const naver = document.querySelectorAll('.naver')

naver.forEach(el => {
  if(el instanceof HTMLAnchorElement) {
    el.href = 'kakao.com'
  }
});
