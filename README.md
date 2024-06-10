# 지출 관리 프로젝트

### 1. 프로젝트 소개
사용자가 월별 지출을 추적할 수 있게 해주는 개인 지출 관리 웹 애플리케이션입니다.
주요 기능은 지출 내역의 CRUD(작성, 조회, 수정, 삭제)와 월별 지출 조회 기능을 포함합니다. 각 기능은 props-drilling, context API, redux 순으로 상태 관리를 구현했습니다.

### 2. 프로젝트 기간
2024.05.20 ~ 2024.05.29

### 3. 개발환경
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)

#### 4. 브랜치구조

- props-drilling: 상태 관리를 위해 props를 하위 컴포넌트로 전달하는 방식을 사용했습니다.
- context: React의 Context API를 사용하여 전역 상태 관리를 구현했습니다.
- redux: Redux Toolkit을 사용하여 상태 관리를 구현했습니다.

#### 5. 기능

- 날짜, 항목, 금액, 설명과 같은 세부 사항을 포함한 새로운 지출 추가(C)
- 월별 지출 내역을 조회(R)
- 로컬 스토리지를 활용하여 사용자가 마지막으로 작업하던 월을 기억해 지속적인 사용 편의성을 제공
- 상세 페이지에서 지출 수정 및 삭제 (U,D)

#### 6. 사용한 기술 

- React: 컴포넌트 기반 UI 라이브러리로, 프로젝트의 전반적인 구조를 구성하는 데 사용되었습니다.
- styled-components: 스타일링을 위해 사용되었습니다. 컴포넌트에 스타일을 적용하고, props를 통해 조건부 스타일링을 구현했습니다.
- react-router-dom: 페이지 간 이동을 관리하는 데 사용되었습니다. 지출 항목의 상세 페이지로의 이동 등을 구현했습니다.
- useState, useEffect, useRef: 상태 관리와 생명주기 관리를 위해 사용되었습니다. useRef는 특히 지출 수정 화면에서 입력 값을 관리하는 데 사용되었습니다.
- uuid: 지출 항목의 고유 ID 생성을 위해 사용되었습니다.



홈화면

<img width="947" alt="스크린샷 2024-05-29 오전 9 44 23" src="https://github.com/hyejinleeee/Account-book-project/assets/159586671/5aaa4faf-6970-4bf9-8e5d-c3282bda19cd">


상세화면

<img width="824" alt="스크린샷 2024-05-29 오전 9 44 43" src="https://github.com/hyejinleeee/Account-book-project/assets/159586671/dcd6488a-7615-480c-8eea-a0e7818dc547">
