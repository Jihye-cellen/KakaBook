## 배경

React와 Node.js 학습 후, 실제 서비스 개발 경험을 쌓고자 Kakao API를 활용하여 책 쇼핑몰을 제작했습니다. 

Naver API와 달리, Kakao API는 책 검색 기능에 특화되어 있습니다. 이에 Kakao API의 책 검색 기능만으로 쇼핑몰의 핵심 기능을 얼마나 구현할 수 있는지를 중점적으로 탐구하고, 책 쇼핑몰의 가능성과 한계를 확인하고자 했습니다.
<br>
<br>

## 프로젝트 요약 설명

책의 상세 설명과 구매자의 리뷰를 자세히 확인할 수 있으며, 도서 구매에 최적화된 React/Node.js 기반 쇼핑몰
<br>
<br>

## 프로젝트 설명

![KERD](https://github.com/user-attachments/assets/39d53d77-44b7-489a-8a5b-32c54e4901c5)
![023](https://github.com/user-attachments/assets/0d173350-4099-411c-9eb9-50c1592c182a)
![024](https://github.com/user-attachments/assets/8623c334-8b64-4656-bfcc-8be864a90051)
![025](https://github.com/user-attachments/assets/43bfe961-5c96-47b4-bca6-05fea69d28dc)
![026](https://github.com/user-attachments/assets/b84796f1-4aa7-4735-9cf7-d2b8063a9a2d)
![027](https://github.com/user-attachments/assets/d2ffc52a-86b1-45a6-9a0d-91e872bc8a9f)


<br>
<br>

### 목표

React와 Node.js을 활용한 웹 애플리케이션 개발 역량 강화

Kakao API를 활용한 실제 서비스 개발 경험 축적

관리자 및 사용자 페이지 설계 및 구현

<br>

### 주요 제공 서비스

- 책 관련 정보 및 구매, 좋아요 기능, 장바구니, 책 리뷰
- 책 상품 정보 검색 및 상품목록 구성, 주문관리 (관리자용 페이지)
- 게시판, 댓글

<br>

## 기술스택

**Frontend:** React.  Javascript, css

**Backend:** Node.js

**Database:** MySql

**API:** Kakao API

**Tool:** Visual Studio Code

<br>


## 역할 및 기능

- 로그인(회원가입, 아이디중복, 비밀번호변경)
- 사용자 페이지(쇼핑몰 메인 페이지, 상품 바로 구매, 장바구니, 선택 주문하기, 좋아요 기능, 상품 리뷰)
- 관리자 페이지(Kakao API를 활용한 쇼핑하기 API이용, 상품 목록 관리, 상품검색 기능)
- 게시판(전체 게시판 CRUD, 댓글 기능)

<br>


## 어려웠던 점/해결방안

| 어려웠던 점  | 해결방안 |
| --- | --- |
| 책에 대한 이미지 수정 | API에서 제공되는 이미지는 thumbnail이었기 때문에 해상도가 낮음. 책 정보 수정 시, 이미지를 직접 넣어주는 방식을 선택하여 구성하고, 데이터베이스 저장되게끔 구성  |
| 모달 창 구성(컴포넌트 기반 이해) | 모달 창에 컴포넌트를 마운트하면서 props를 통해 전달되는 함수를 인식하지 못해, 컴포넌트 내부의 상태 업데이트 불가. 부모 컴포넌트에서 자식 컴포넌트로 직접 변수를 전달하여 데이터 바인딩을 수행. |

<br>


## 회고

- React의 컴포넌트 기반 개발에 대한 이해도를 심화시켰습니다. 재사용 가능한 컴포넌트를 만들고 관리하는 방법을 익혔습니다.
- 다양한 프로그래밍 언어를 경험하며, 문법은 다르지만 기본적인 쇼핑몰 체계는 공통된다는 것을 확인했으며, React 개발에 적용하며 더욱 유연하고 효율적인 코드를 작성할 수 있었습니다.
