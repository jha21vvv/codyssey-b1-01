//메뉴 토글
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// 나이트모드
const themeToggle = document.querySelector('.theme-toggle');

const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

if (savedTheme === 'dark') {
  themeToggle.textContent = '☀️';
} else {
  themeToggle.textContent = '🌙';
}

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');

  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = '🌙';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = '☀️';
  }
});

//페이지 위로
const scrollTopBtn = document.querySelector('.scroll-top-btn');
//헤더 그림자 효과용
const siteHeader = document.querySelector('.site-header');

//버튼 나오게 하는 부분
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }

  //그림자효과
  if (window.scrollY > 60) {
    siteHeader.classList.add('scrolled');
  } else {
    siteHeader.classList.remove('scrolled');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// 스크롤 애니메이션

const revealElements = document.querySelectorAll('.reveal');
//Intersection Observer: 특정 섹션이 화면내에 들어오자 발동되는 애니메이션으로 나타나는 효과 만들어 놓은것
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});
///threshold는 비율
// 어떤 션섹이 화면에 들어올때 반응할지 보기위해, 반응할 세션 리스트를 만듬.
revealElements.forEach((element) => {
  observer.observe(element);
});

// 폼 확인 작업
//변수 받아서
const contactForm = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const successMessage = document.querySelector('#form-success');

// 에러 상황을 띄우는 함수
const showError = (input, message) => {
  const formGroup = input.parentElement;
  const errorText = formGroup.querySelector('.error-message');

  formGroup.classList.add('error');
  errorText.textContent = message;
};

// 에러 상황해결시에 에러 메시지 지우는 구간
const clearError = (input) => {
  const formGroup = input.parentElement;
  const errorText = formGroup.querySelector('.error-message');

  formGroup.classList.remove('error');
  errorText.textContent = '';
};

// 이메일 확인
// 함수 이름= (입력값) => {조건 리턴에 트루 폴스 나오는 구조}
// /:정규식의 시작과 끝
// ^: 문자열 시작
// $: 문자열의 끝
// []: 문자 집합
//[^]: ~가 아닌 문자
// \s: 공백문자
// +: 1개 이상 반복
// .: 아무문자 1개
// \.: . 그대로 의미
// 공백 없이 문자들@문자들.문자들 형식인지 검사
// 공백이나 골뱅이가 아닌 1개이상의 문자 골뱅이 공백이나 골뱅이 아닌 문자 1개이상 . 공백이나 골뱅이가 아닌 문자
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

//trim: 문자열 앞뒤의 공백을 제거한다
const validateName = () => {
  const value = nameInput.value.trim();
// 빈칸이면 에러 띄우고, 폴스로 나오고, 고쳐서 클린 에러 되면 트루로 띄운다.
  if (value === '') {
    showError(nameInput, '이름을 입력해주세요.');
    return false;
  }

  clearError(nameInput);
  return true;
};


const validateEmail = () => {
  const value = emailInput.value.trim();

  if (value === '') {
    showError(emailInput, '이메일을 입력해주세요.');
    return false;
  }
// ! 붙어서 유효한 이메일이면 {}가 실행이 안되고 
  if (!isValidEmail(value)) {
    showError(emailInput, '올바른 이메일 형식을 입력해주세요.');
    return false;
  }

  clearError(emailInput);
  return true;
};

const validateMessage = () => {
  const value = messageInput.value.trim();

  if (value === '') {
    showError(messageInput, '메시지를 입력해주세요.');
    return false;
  }

  clearError(messageInput);
  return true;
};

//인풋에 값을 입력시 마다 검사하는 코드
//사용자가 제출 버튼 누르기 전에도 바로바로 에러를 확인할 수 있게 하려
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);

// 제출시 해당함수 실행
// 폼에서 서브밋시에 즉시 자동으로 기본 동작인 페이지 이동/새로고침/데이터 전송을 해버림. 
// 그러니 preventDefault();로 일단 해당 행동 중단후 검사후에 보내도록함. 
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  successMessage.textContent = '';

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();

  const isFormValid = isNameValid && isEmailValid && isMessageValid;
// 전부 테스트 통과후 제출
  if (isFormValid) {
    successMessage.textContent = '메시지가 성공적으로 전송되었습니다!';
    contactForm.reset();
  }
});

//깃 api연결
const projectsContainer = document.querySelector('.projects-list');

const fetchGitHubRepos = async () => {
  try {
    projectsContainer.textContent = '로딩 중...';

    const response = await fetch('https://api.github.com/users/jha21vvv/repos');

    if (!response.ok) {
      throw new Error('GitHub API 요청 실패');
    }

    const repos = await response.json();

    if (repos.length === 0) {
      projectsContainer.textContent = '표시할 프로젝트가 없습니다.';
      return;
    }

    const repoCards = repos.map((repo) => {
      return `
        <article class="project-card">
          <h3>${repo.name}</h3>
          <p>${repo.description ?? '설명이 없습니다.'}</p>
          <p>주 언어: ${repo.language ?? '미정'}</p>
          <a href="${repo.html_url}" target="_blank">GitHub 보기</a>
        </article>
      `;
    });

    projectsContainer.innerHTML = repoCards.join('');
  } catch (error) {
    projectsContainer.innerHTML = `
      <p>프로젝트를 불러올 수 없습니다.</p>
      <button class="retry-btn">다시 시도</button>
    `;
  }
};

fetchGitHubRepos();