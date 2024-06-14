# 회원제 지출 관리 프로젝트

배포링크: https://expense-login-five.vercel.app/

### 1. 프로젝트 소개
사용자가 월별 지출을 추적할 수 있게 해주는 회원제 지출 관리 웹 애플리케이션입니다.
주요 기능은 지출 내역의 CRUD(작성, 조회, 수정, 삭제)와 월별 지출 조회 기능을 포함합니다. 

### 2. 프로젝트 기간
2024.06.10 ~ 2024.06.14

### 3. 개발환경
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
,tanstack queary, thunder client ,axios

### 4. 기능

- 로그인, 회원가입  
- 날짜, 항목, 금액, 설명과 같은 세부 사항을 포함한 새로운 지출 추가(C)
- 월별 지출 내역을 조회(R)
- 로컬 스토리지를 활용하여 사용자가 마지막으로 작업하던 월을 기억해 지속적인 사용 편의성을 제공
- 상세 페이지에서 본인의 지출만 수정 및 삭제 (U,D)
- 프로필 페이지에서 닉네임과 프로필 사진 수정기능 

### 5. 사용한 기술 

- React: 컴포넌트 기반 UI 라이브러리로, 프로젝트의 전반적인 구조를 구성하는 데 사용되었습니다.
- styled-components: 스타일링을 위해 사용되었습니다. 컴포넌트에 스타일을 적용하고, props를 통해 조건부 스타일링을 구현했습니다.
- react-router-dom: 페이지 간 이동을 관리하는 데 사용되었습니다. 지출 항목의 상세 페이지로의 이동 등을 구현했습니다.
- jwt, thunder client: jwt 토큰을 이용한 인증/인가
- axios, Tanstack Query, json-server: 지출 데이터 관리 


로그인/회원가입 페이지


<img width="516" alt="스크린샷 2024-06-14 오전 9 32 07" src="https://github.com/hyejinleeee/expense-login/assets/159586671/cbf6c801-1c89-4bf6-9dcd-2f02346ed85d">
<img width="516" alt="스크린샷 2024-06-14 오전 9 32 16" src="https://github.com/hyejinleeee/expense-login/assets/159586671/61d72cd8-3943-4c67-aaf7-cd35007721c9">

홈페이지
<img width="1269" alt="스크린샷 2024-06-14 오전 9 33 06" src="https://github.com/hyejinleeee/expense-login/assets/159586671/f5cf5404-9400-46da-9f9a-5f8efc4e1178">

상세페이지
<img width="1269" alt="스크린샷 2024-06-14 오전 9 33 43" src="https://github.com/hyejinleeee/expense-login/assets/159586671/81fc4d90-a8ac-4aaa-b9f5-c5bd1b21adf9">

프로필페이지
<img width="1269" alt="스크린샷 2024-06-14 오전 9 33 53" src="https://github.com/hyejinleeee/expense-login/assets/159586671/859f8c14-4351-48ab-bf3f-1c6f23fcd27a">
