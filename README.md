# 💱 Exchange Rate App (환율 정보 조회 앱)

시니어 개발자 스타일의 관심사 분리(SoC)를 적용한 환율 정보 크롤러/API 클라이언트 프로젝트입니다. 단순히 동작하는 코드를 넘어, 유지보수와 보안을 고려한 아키텍처를 지향합니다.

## 📂 Project Structure
- `src/api/`: 외부 API 통신 전담 (Data Layer).
- `src/services/`: 비즈니스 로직 전담 (Service Layer).
- `src/index.js`: 애플리케이션 진입점 (Entry Point).

## 🚀 Progress (진행 단계)
- [x] Step 1: 프로젝트 폴더 생성 및 초기화
- [x] Step 2: `package.json` 설정 (ES Modules 활성화)
- [x] Step 3: 필수 의존성 설치 (`axios`)
- [x] Step 4: 시니어급 폴더 구조 설계 및 생성
- [x] Step 5: API 통신 로직 구현 (`src/api/`)
- [x] Step 6: 데이터 가공 및 서비스 로직 구현 (`src/services/`)
- [x] Step 7: 애플리케이션 실행 및 로그 확인 (`src/index.js`)

## 💡 Knowledge Base (상세 학습 로그)

### 1. 데이터의 기본 단위: 변수와 객체
- **변수 (Variable)**: 단일 데이터를 저장하는 최소 단위입니다. (예: `base = 'USD'`)
- **객체 (Object)**: 연관된 여러 변수를 하나로 묶은 데이터 꾸러미입니다.
  - **JS 객체 vs Java Map**: 자바스크립트의 일반 객체(`{}`)는 Java의 **`Map` (HashMap)**과 역할이 같습니다.
  - **문법의 차이 (핵심!)**: Java는 `get()`, `put()` 메서드를 호출하지만, JS는 **`[]` (대괄호)** 문법을 통해 직접 접근합니다.
    - **Read (Get)**: `obj["key"]`
    - **Write (Put)**: `obj["key"] = value`
- **저장 방식의 차이 (핵심!)**:
  - **직접 저장 (Value)**: 문자열이나 숫자 같은 단일 정보는 변수에 값이 직접 담깁니다.
  - **주소 저장 (Reference)**: 객체는 메모리에 생성되며, 변수는 그 객체의 **'주소(리모컨)'**를 담고 있습니다.
- **객체 중첩 (Nested Object)**: 객체 내부 속성으로 또 다른 객체를 담아 데이터를 계층화합니다. (예: `result.rates`)

### 2. ES Modules 및 Import 규칙
- **`type: module`**: Node.js에서 최신 표준 문법(`import/export`)을 사용하기 위한 필수 설정입니다.
- **확장자 필수**: ES Modules 환경에서는 `import` 시 반드시 **`.js` 확장자**를 명시해야 합니다.

### 3. 호이스팅(Hoisting)과 안전한 설계
- **`function` vs `const`**: `const` 화살표 함수는 호이스팅을 방지하여 코드가 반드시 선언된 이후에만 사용되도록 강제합니다. 이는 예측 가능한 안전한 코드를 만드는 시니어의 기술입니다.

### 4. 매개변수 설계와 하드코딩 지양
- **Default Parameter**: 인자가 없을 때를 대비한 안전장치이며, 서비스 로직 내부에 값을 고정하지 않고 매개변수로 노출하여 **재사용성**을 확보합니다.

### 5. 변수 선언 전략 및 객체/배열 다루기
- **`const` vs `let` (쇼핑 카트 비유)**: `const`는 주소를 고정합니다. 내부 수정(카트 안 물건 변경)은 가능하지만 재할당(카트 자체 교체)은 금지됩니다.
- **구조 분해 할당 (Destructuring)**:
  - **객체 구조 분해**: `const { rates } = result;` (이름으로 추출)
  - **배열 구조 분해**: `const [key, value] = ["KRW", 1400];` (순서대로 추출)
- **객체 반복 처리 (Object.entries)**: 객체(Map 방식)를 배열(`[[K,V]]`)로 변환하여 반복문에서 다룰 수 있게 해줍니다.
- **객체 접근법**: 정적 접근은 `Dot(.)`, 변수를 이용한 동적 접근은 `Bracket([])`을 사용합니다.

### 6. 데이터 통신의 원리 (JSON & Axios)
- **직렬화/역직렬화**: 인터넷은 전송용 문자열(JSON)만 나르며, `axios`는 이를 자동으로 객체로 복원(역직렬화)해줍니다.
- **API Exploration**: 코드를 짜기 전 반드시 `console.log`로 실제 데이터의 모양을 확인해야 합니다.

### 7. 네트워크 보안 (CORS & CSRF)
- **CORS**: 서버가 제시한 허용 명패를 브라우저가 확인하여 데이터를 차단하는 보안 정책입니다.
- **CSRF**: 브라우저의 쿠키 자동 전송 특성을 악용한 공격입니다. 서버 간 통신은 상대적으로 안전합니다.
- **인터셉터 (Interceptors)**: 요청/응답의 관문으로, 결과를 뒤바꿀 수 있는 강력한 권한을 가집니다.

## 📝 How to Run
```bash
npm install
node src/index.js
```
