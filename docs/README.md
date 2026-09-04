# 포트폴리오 프로젝트 체크리스트

## 1. 기본 구조
- [O] index.html 만들기
- [O] css/style.css 연결
- [O] js/main.js defer 연결
- [O] images 폴더 만들기
- [O] Live Server 실행 확인

## 2. HTML 섹션
- [O] Header 만들기
- [O] Nav 만들기
- [O] Hero 섹션 만들기
- [O] About 섹션 만들기
- [O] Skills 섹션 만들기
- [O] Projects 섹션 만들기
- [O] Contact 섹션 만들기
- [O] Footer 만들기

## 3. 반응형 스타일
- [ ] CSS 변수 만들기
- [ ] 모바일 퍼스트 작성
- [ ] 768px 태블릿 대응
- [ ] 1024px 데스크톱 대응
- [ ] Nav Flexbox 적용
- [ ] Projects Grid 적용

## 4. 인터랙션
- [ ] 햄버거 메뉴
- [ ] 부드러운 스크롤
- [ ] 스크롤 탑 버튼
- [ ] 스크롤 시 nav 스타일 변경
- [ ] 다크 모드 토글
- [ ] localStorage 저장
- [ ] 스크롤 애니메이션

## 5. 폼 기능
- [ ] 이름 검증
- [ ] 이메일 검증
- [ ] 메시지 검증
- [ ] 에러 메시지 표시
- [ ] 성공 메시지 표시

## 6. GitHub API
- [ ] 로딩 상태 UI
- [ ] 성공 상태 UI
- [ ] 에러 상태 UI
- [ ] 빈 상태 UI
- [ ] 재시도 버튼 만들기

## 7. 배포
- [ ] GitHub 저장소 업로드
- [ ] GitHub Pages 배포
- [ ] README 작성
- [ ] 스크린샷 첨부


# 1. 기본 구조

```bash 
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
└── README.md
```
(사진 01)

### 추가 게인적 정보 기록
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

```bash 

```

```bash 

```

```bash 

```