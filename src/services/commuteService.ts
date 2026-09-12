import { CommuteResult } from '../types';
import { SAMPLE_COMMUTE_RESULTS } from '../data/commute';

export async function calculateCommute(
  jobId: string,
  userLat?: number,
  userLng?: number
): Promise<CommuteResult> {
  // Mock commute calculation
  // In production, this would call a real transit API (e.g., Kakao Map, Naver Map)
  return SAMPLE_COMMUTE_RESULTS[jobId];
}

export const commuteService = {
  calculateCommute,
};
