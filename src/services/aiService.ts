import { UserProfile, Job, CommuteResult, Policy, CultureActivity, BudgetBreakdown } from '../types';

export async function parseUserInput(input: string): Promise<Partial<UserProfile>> {
  // Mock parser for natural language input
  // In production, this would call an actual AI service

  return {
    age: 25,
    residence: '전주시 완산구',
    employmentStatus: 'job-seeker',
    major: '기계계열',
    desiredJobs: ['품질관리', '생산관리'],
    hasVehicle: false,
    maxCommuteTime: 60,
    monthlyRent: 450000,
    monthlyFoodCost: 500000,
    otherFixedCosts: 150000,
    culturalBudget: 200000,
    interestCategories: ['공연', '운동'],
  };
}

export async function generateActionPlan(
  job: Job,
  commute: CommuteResult,
  budget: BudgetBreakdown,
  policies: Policy[]
): Promise<{ recommendation: string; reasons: string[]; tasks: string[] }> {
  // Mock AI action plan generation
  // In production, this would call LangGraph.js or similar

  const reasons = [];
  const tasks = [];

  if (job.isJobMatch) {
    reasons.push('희망 직무와 일치합니다.');
  }

  if (commute.feasible) {
    reasons.push(`통근 시간 ${commute.durationMinutes}분으로 현실적입니다.`);
    tasks.push('면접일 이동경로 확인');
  }

  if (budget.availableAmount > 0) {
    reasons.push(`월 여유자금 ${Math.floor(budget.availableAmount / 10000)}만원이 있습니다.`);
  }

  if (policies.length > 0) {
    reasons.push(`관련 지원사업 ${policies.length}건이 있습니다.`);
    tasks.push('관련 지원사업 자격 확인');
  }

  return {
    recommendation: '현재 조건에서 가장 현실적인 선택입니다.',
    reasons,
    tasks: [
      '지원서 작성 및 제출 준비',
      ...tasks,
      '실제 생활비 재계산',
    ],
  };
}

// Placeholder for real AI integration later
export const aiService = {
  parseUserInput,
  generateActionPlan,
};
