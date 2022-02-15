# codingapple-typescript

TypeScript 설치 및 세팅

1. nodejs설치
2. 터미널에서 타입스크립트 설치 👉 npm install -g typescript 👈
3. .ts 파일 생성
4. tsconfig.json 파일 생성 후 세부 설정 해주기

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs"
  }
}
```

5. 터미널에 js 자동 변환해주는 코드 입력 👉 tsc-w 👈 (.ts 파일은 브라우저가 읽지 못하니, js로 변환해야 사용 가능)
6. 타입스크립트에 작성 후 저장하면 js 파일 생성되면서 자동 변환 (= 컴파일한다)
