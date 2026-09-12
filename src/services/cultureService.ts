import { CultureActivity } from '../types';
import { SAMPLE_CULTURE_ACTIVITIES } from '../data/culture';

export async function getCultureActivities(userInterests?: string[]): Promise<CultureActivity[]> {
  // Mock culture activity search
  // In production, this would filter by user interests and location
  return SAMPLE_CULTURE_ACTIVITIES;
}

export const cultureService = {
  getCultureActivities,
};
