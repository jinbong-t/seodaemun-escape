// ============================================================
//  🔥 Firebase 설정 파일
// ============================================================
//  아래 firebaseConfig를 본인 Firebase 프로젝트 값으로 교체하세요.
//
//  📋 설정 방법 (5분이면 끝납니다!):
//  1. https://console.firebase.google.com 접속 (구글 계정 필요)
//  2. "프로젝트 추가" 클릭 → 이름 입력 → 생성
//  3. 왼쪽 메뉴 "Firestore Database" → "데이터베이스 만들기"
//     → "테스트 모드로 시작" 선택 → 위치: asia-northeast3 (서울)
//  4. 프로젝트 설정 (⚙️) → "내 앱" → "</>" 웹 아이콘 클릭
//  5. 앱 닉네임 입력 후 등록 → 아래 설정값 복사해서 붙여넣기
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyDtDGuNKlcLEvzMCj2jCWA-9W1zoFzkRzU",
  authDomain: "seodaemun-escape.firebaseapp.com",
  projectId: "seodaemun-escape",
  storageBucket: "seodaemun-escape.firebasestorage.app",
  messagingSenderId: "996754565811",
  appId: "1:996754565811:web:9d4f9e08fe303bc3c51ec6",
  measurementId: "G-Q65JBQJBMS"
};

// ============================================================
//  ℹ️  Firebase 미설정 시 자동으로 localStorage 모드로 작동합니다.
//     테스트 시에도 활동지 작성이 가능합니다.
// ============================================================
