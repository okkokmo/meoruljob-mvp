# 머물JOB MVP - 전북 청년을 위한 생성형 AI 기반 생활가능성 분석 서비스

**일자리를 넘어, 전북에서의 삶까지 계산합니다.**

이 프로젝트는 전주국제영화제 해커톤에서 "경제적·사회적 지속가능성"을 주제로 개발된 MVP입니다.

## 🎯 프로젝트 개요

전북에 정착하려는 청년들이 단순히 "일자리"를 찾는 것이 아니라, 그 지역에서 **"실제로 살 수 있는지"**를 종합적으로 판단할 수 있도록 돕는 서비스입니다.

### 주요 기능

#### 🏢 JOB - 일자리 정보
- 청년의 전공과 희망 직군에 맞는 일자리 추천
- 직무 적합도 및 자격요건 매칭
- 월급 정보

#### 🚌 MOVE - 통근 가능성 분석
- 거주지→근무지 통근 시간 계산
- 대중교통 환승 횟수 및 도착 시간 확인
- 실제 통근 가능 여부 판단
- MapLibre GL을 통한 시각화

#### 💰 MONEY - 생활비 계산
- 월급에서 생활비 제외 후 실제 가용금액 계산
- 월세, 식비, 교통비, 기타 고정비 반영
- 청년 지원사업 지원금 자동 포함
- 현실적인 월 생활 가용금액 제시

#### 🎭 LIFE - 문화생활 정보
- 월 가용금액 내에서 즐길 수 있는 문화활동 제시
- 영화, 공연, 스포츠, 전시 등 다양한 카테고리
- 근무 시간 후 참석 가능 여부 확인

#### 📋 ACTION PLAN - AI 생활계획서
- 위 모든 정보를 종합한 AI 생활계획
- 현실성 있는 추천 사유
- 이번 주 실천 과제
- 추가 확인 필요사항

## 🛠 기술 스택

### Frontend
- **React 18** + **TypeScript** - 타입안전 UI 개발
- **React Router** - 페이지 라우팅
- **Tailwind CSS** - 유틸리티 CSS 스타일링
- **Vite** - 초고속 개발 서버
- **MapLibre GL** - 오픈소스 지도 라이브러리

### 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 React 컴포넌트
│   ├── Header.tsx
│   ├── JobCard.tsx
│   ├── MapView.tsx
│   ├── MoneyBreakdown.tsx
│   ├── CultureCard.tsx
│   ├── ActionPlan.tsx
│   └── ScoreBadge.tsx
├── pages/              # 페이지 컴포넌트
│   ├── HomePage.tsx
│   ├── ProfileConfirmPage.tsx
│   ├── JobsPage.tsx
│   ├── SimulationPage.tsx
│   └── ActionPlanPage.tsx
├── services/           # API 및 비즈니스 로직
│   ├── aiService.ts
│   ├── jobService.ts
│   ├── commuteService.ts
│   ├── policyService.ts
│   └── cultureService.ts
├── utils/              # 유틸리티 함수
│   ├── calculateBudget.ts
│   └── evaluateCommute.ts
├── data/               # 샘플 데이터
│   ├── jobs.ts
│   ├── commute.ts
│   ├── policies.ts
│   └── culture.ts
├── types/              # TypeScript 타입 정의
│   └── index.ts
├── App.tsx             # 라우팅 설정
├── main.tsx            # 진입점
└── index.css           # 글로벌 스타일
```

## 🚀 실행 방법

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 빌드
```bash
npm run build
```

## 📊 User Flow

1. **홈페이지** → 자연어로 현재 상황 입력
2. **프로필 확인** → 입력된 정보 검토 및 생활비 조정
3. **일자리 목록** → AI가 분석한 일자리 리스트 확인
4. **생활가능성 분석** → 선택한 일자리에 대한 JOB/MOVE/MONEY/LIFE 분석
5. **AI 생활계획** → 현실성 있는 생활계획 및 실천 과제

## 💡 핵심 기능 구현

### 자연어 입력 파싱
현재는 Mock 구현. 추후 LangChain, LangGraph.js 등을 통해 실제 AI 기반 파싱 예정.

```typescript
// services/aiService.ts
export async function parseUserInput(input: string): Promise<Partial<UserProfile>> {
  // 실제 구현 시: OpenAI API + LangChain 연결
}
```

### 통근 시간 계산
현재는 Mock 데이터. 추후 Kakao Map API, Naver Map API 등 실제 대중교통 정보 API 연결 예정.

```typescript
// services/commuteService.ts
export async function calculateCommute(jobId: string): Promise<CommuteResult> {
  // 실제 구현 시: 지도 API 연결
}
```

### 정책 매칭
현재는 간단한 룰 기반 매칭. 추후 실제 전북 청년 정책 DB 연결 및 복잡한 조건 매칭 로직 추가 예정.

```typescript
// services/policyService.ts
export async function getPolicies(jobId: string): Promise<Policy[]> {
  // 실제 구현 시: 정책 DB 조회
}
```

## 🔮 향후 개선 사항

### Phase 2
- [ ] 실제 OpenAI API 연결 (자연어 처리)
- [ ] Kakao Map / Naver Map API 연결 (통근 정보)
- [ ] 전북 지방자치단체 청년정책 DB 통합
- [ ] 실제 일자리 데이터베이스 연결 (공공데이터)

### Phase 3
- [ ] 사용자 계정 및 히스토리 관리
- [ ] 생활계획 저장 및 공유 기능
- [ ] 커뮤니티 기능 (같은 직군 청년 간 정보 공유)
- [ ] 모바일 앱 개발

### Phase 4
- [ ] 머신러닝 기반 일자리 추천 고도화
- [ ] 실시간 대중교통 정보 통합
- [ ] 지역별 문화시설/식당 정보 통합
- [ ] 청년 정착 성공 사례 공유

## 📝 라이선스

MIT License

## 👥 팀

- 기획/전략: [팀원]
- 개발: [팀원]
- 디자인: [팀원]

## 📧 문의

프로젝트에 대한 질문이나 제안사항이 있으시면 이슈를 통해 남겨주세요.
