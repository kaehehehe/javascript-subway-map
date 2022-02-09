# 🚇 지하철 노선도 미션
우아한테크코스의 [지하철 노선도 미션](https://github.com/woowacourse/javascript-subway-map-precourse)을 구현했습니다.<br />
결과물은 여기서 확인할 수 있습니다. 👉 [보러 가기](https://kaehehehe.github.io/javascript-subway-map/)<br />
회고록 👉 [보러 가기](https://pinnate-snapper-b4a.notion.site/80d58870c459443e91aebb4417db373a)

<br />

## 🚀 기능 요구사항

### 지하철 역 관련 기능
- [x] 지하철 역을 등록하고 삭제할 수 있다.
   - [x] (단, 노선에 등록된 역은 삭제할 수 없다)
- [x] 중복된 지하철 역 이름이 등록될 수 없다.
- [x] 지하철 역은 2글자 이상이어야 한다.
- [x] 지하철 역의 목록을 조회할 수 있다.

### 지하철 노선 관련 기능
- [x] 지하철 노선을 등록하고 삭제할 수 있다.
- [x] 중복된 지하철 노선 이름이 등록될 수 없다.
- [x] 노선 등록 시 상행 종점역과 하행 종점역을 입력받는다.
- [x] 상행 종점역과 하행 종점역은 같은 역을 입력받을 수 없다.
- [x] 지하철 노선의 목록을 조회할 수 있다.

### 지하철 구간 추가 기능
- 지하철 노선에 구간을 추가하는 기능은 노선에 역을 추가하는 기능이라고도 할 수 있다.
- 역과 역사이를 구간이라 하고 이 구간들의 모음이 노선이다.
- [x] 하나의 역은 여러개의 노선에 추가될 수 있다.
- [x] 역과 역 사이에 새로운 역이 추가 될 수 있다.
- [x] 노선에서 갈래길은 생길 수 없다.

### 지하철 구간 삭제 기능
- [x] 노선에 등록된 역을 제거할 수 있다.
- [x] 종점을 제거할 경우 다음 역이 종점이 된다.
- [x] 노선에 포함된 역이 두개 이하일 때는 역을 제거할 수 없다.

### 지하철 노선에 등록된 역 조회 기능
- [x] 노선의 상행 종점부터 하행 종점까지 연결된 순서대로 역 목록을 조회할 수 있다.

<br />

## ✅ 프로그래밍 요구사항

### 메뉴 버튼
- [x] 역 관리 button 태그는 `#station-manager-button` id값을 가진다.
- [x] 노선 관리 button 태그는 `#line-manager-button` id값을 가진다.
- [x] 구간 관리 button 태그는 `#section-manager-button` id값을 가진다.
- [x] 지하철 노선도 출력 관리 button 태그는 `#map-print-manager-button` id값을 가진다.

### 지하철 역 관련 기능
- [x] 지하철 역을 입력하는 input 태그는 `#station-name-input` id값을 가진다.
- [x] 지하철 역을 추가하는 button 태그는 `#station-add-button` id값을 가진다.
- [x] 지하철 역을 삭제하는 button 태그는 `.station-delete-button` class값을 가진다.

### 지하철 노선 관련 기능
- [x] 지하철 노선의 이름을 입력하는 input 태그는 `#line-name-input` id값을 가진다.
- [x] 지하철 노선의 상행 종점을 선택하는 select 태그는 `#line-start-station-selector` id값을 가진다.
- [x] 지하철 노선의 하행 종점을 선택하는 select 태그는 `#line-end-station-selector` id값을 가진다.
- [x] 지하철 노선을 추가하는 button 태그는 `#line-add-button` id값을 가진다.
- [x] 지하철 노선을 삭제하는 button 태그는 `.line-delete-button` class값을 가진다.

### 지하철 구간 추가 기능
- [x] 지하철 노선을 선택하는 button 태그는 `.section-line-menu-button` class값을 가진다.
- [x] 지하철 구간을 설정할 역 select 태그는 `#section-station-selector` id값을 가진다.
- [x] 지하철 구간의 순서를 입력하는 input 태그는 `#section-order-input` id값을 가진다.
- [x] 지하철 구간을 등록하는 button 태그는 `#section-add-button` id값을 가진다.
- [x] 지하철 구간을 제거하는 button 태그는 `.section-delete-button` class값을 가진다.

### 지하철 노선도 출력 기능
- [x] 지하철 노선도 출력 버튼을 누르면 `<div class="map"></div>` 태그를 만들고 해당 태그 내부에 노선도를 출력한다.

### 기존 요구사항
- [x] 사용자가 잘못된 입력 값을 작성한 경우 `alert`을 이용해 메시지를 보여주고, 재입력할 수 있게 한다.
- [x] 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
- [ ] **자바스크립트 코드 컨벤션을 지키면서 프로그래밍** 한다
  - [https://google.github.io/styleguide/jsguide.html](https://google.github.io/styleguide/jsguide.html)
  - [https://ui.toast.com/fe-guide/ko_CODING-CONVENSION/](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
- [x] **indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용**한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
- [ ] **함수(또는 메소드)의 길이가 15라인을 넘어가지 않도록 구현한다.**
  - 함수(또는 메소드)가 한 가지 일만 잘 하도록 구현한다.
- [x] 변수 선언시 `var` 를 사용하지 않는다. `const` 와 `let` 을 사용한다.
  - [const](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const)
  - [let](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let)
- [x] `import` 문을 이용해 스크립트를 모듈화하고 불러올 수 있게 만든다.
  - [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import)
- [x] `template literal`을 이용해 데이터와 html string을 가독성 좋게 표현한다.
  - [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)

### 추가된 요구사항
- [x] [data](https://developer.mozilla.org/ko/docs/Learn/HTML/Howto/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%86%8D%EC%84%B1_%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)속성을 활용하여 html 태그에 역, 노선, 구간의 유일한 데이터 값들을 관리한다. 
- [x] [localStorage](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)를 이용하여, 새로고침하더라도 가장 최근에 작업한 정보들을 불러올 수 있도록 한다.
