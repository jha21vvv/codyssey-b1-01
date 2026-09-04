# 포트폴리오 프로젝트 체크리스트
### 1.프로젝트 소개
- 순수 HTML, CSS, JavaScript만 사용해 제작한 반응형 포트폴리오 웹사이트
- 사용자 이벤트 처리, DOM 조작, 다크모드, 폼 유효성 검사, GitHub API 연동을 구현

### 2. 배포 링크 와 깃링크
https://jha21vvv.github.io/codyssey-b1-01/
https://github.com/jha21vvv/codyssey-b1-01

### 3. 기본 구조

```bash 
docs/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
└── README.md
```

### 4. 사용 기술
- HTML5
- CSS3
- JavaScript (ES6+)
- GitHub Pages
- GitHub REST API

### 5. 주요 기능
- 반응형 레이아웃
- 햄버거 메뉴
- 부드러운 스크롤
- 다크모드 토글 및 localStorage 저장
- 스크롤 탑 버튼
- 네비게이션 스크롤 배경 변경
- 스크롤 애니메이션 (Intersection Observer)
- Contact 폼 유효성 검사
- GitHub API를 활용한 프로젝트 목록 렌더링
- 로딩 / 에러 / 빈 상태 UI 처리

### 6. 스크린샷
![desktop](./images/02.png)
![desktop](./images/04.png)
![desktop](./images/03.png)

### 7. 페이지 구성
- Hero
- About
- Skills
- Projects
- Contact
- Footer

### 8.  반응형 기준
- Mobile First
- Tablet: 768px 이상
- Desktop: 1024px 이상

### 9. 기타 주요 사항
- 스크롤 탑 버튼 표시: 300px 이상 스크롤 시
- 네비게이션 배경 변경: 60px 이상 스크롤 시
- 스크롤 애니메이션 threshold: 0.2

### 10. GitHub API 연동
- 엔드포인트: https://api.github.com/users/{github-username}/repos
- fetch + async/await 사용
- 로딩, 성공, 에러, 빈 상태를 UI로 처리

### 11. 폼검증
- 이름, 이메일, 메시지 필수 입력
- 이메일 형식 정규식 검사
- 제출 시 기본 동작 방지
- 성공 메시지 표시

### 12. 체크리스트
- [O] index.html 만들기
- [O] css/style.css 연결
- [O] js/main.js defer 연결
- [O] images 폴더 만들기
- [O] Live Server 실행 확인

- [O] Header 만들기
- [O] Nav 만들기
- [O] Hero 섹션 만들기
- [O] About 섹션 만들기
- [O] Skills 섹션 만들기
- [O] Projects 섹션 만들기
- [O] Contact 섹션 만들기
- [O] Footer 만들기

- [O] CSS 변수 만들기
- [O] 모바일 퍼스트 작성
- [O] 768px 태블릿 대응
- [O] 1024px 데스크톱 대응
- [O] Nav Flexbox 적용
- [O] Projects Grid 적용

- [O] 햄버거 메뉴
- [O] 부드러운 스크롤
- [O] 스크롤 탑 버튼
- [O] 스크롤 시 nav 스타일 변경
- [O] 다크 모드 토글
- [O] localStorage 저장
- [O] 스크롤 애니메이션

- [O] 이름 검증
- [O] 이메일 검증
- [O] 메시지 검증
- [O] 에러 메시지 표시
- [O] 성공 메시지 표시

- [O] 로딩 상태 UI
- [O] 성공 상태 UI
- [O] 에러 상태 UI
- [O] 빈 상태 UI
- [O] 재시도 버튼 만들기

- [O] GitHub 저장소 업로드
- [O] GitHub Pages 배포
- [O] README 작성
- [O] 스크린샷 첨부


### 추가 게인적 정보 기록
# 1. 모바일 퍼스트란 점
 - @media (min-width: ...)로 기능/레이아웃을 추가
```bash 
.menu-toggle {
  display: block;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-text);
}

# 최소너비가 768px이상인, 즉 테블렛에선 토글이 안보인다는 내용
@media (min-width: 768px) {
  .menu-toggle {
    display: none;
  }
```
# 2. 주석 적는 방법
```bash 
# html주석
<!-- 주석 내용 -->
# CSS 주석
/* 주석 내용 */
# JavaScript
// 주석 내용

/* 
주석 내용
여러 줄 설명 가능
*/
```
시매틱 태그란? 이 부분이 어떤 역할인지 의미를 가진 태그 (ex) <header> : 페이지 윗부분
```bash 
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>나의 포트폴리오</title>

  <!-- CSS 연결 -->
  <!-- HTML에서 외부 파일을 연결 -->
  <link rel="stylesheet" href="./css/style.css" />
</head>
<body>
  <h1>포트폴리오 시작!</h1>
  <p>HTML, CSS, JavaScript 연결 테스트 중입니다.</p>

  <!-- JavaScript 연결 -->
  <!-- defer를 붙인이유: HTML을 먼저 읽고 그 다음 JS를 실행하게 하려고 -->
  <script src="./js/main.js" defer></script>
</body>
</html>
```