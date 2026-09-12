import { CommuteResult } from '../types';

export function evaluateCommute(
  commuteResult: CommuteResult,
  maxCommuteTime: number
): { feasible: boolean; reason: string } {
  if (!commuteResult.feasible) {
    return {
      feasible: false,
      reason: commuteResult.reason || '출퇴근이 불가능합니다.',
    };
  }

  if (commuteResult.durationMinutes > maxCommuteTime) {
    return {
      feasible: false,
      reason: `예상 통근시간 ${commuteResult.durationMinutes}분이 최대 통근시간 ${maxCommuteTime}분을 초과합니다.`,
    };
  }

  return {
    feasible: true,
    reason: `${commuteResult.durationMinutes}분 내에 출근 가능합니다.`,
  };
}
