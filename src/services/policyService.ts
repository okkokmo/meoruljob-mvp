import { Policy } from '../types';
import { SAMPLE_POLICIES, getPoliciesForJob } from '../data/policies';

export async function getPolicies(jobId: string): Promise<Policy[]> {
  // Mock policy matching
  // In production, this would match user profile with actual policies
  return getPoliciesForJob(jobId);
}

export async function getAllPolicies(): Promise<Policy[]> {
  return SAMPLE_POLICIES;
}

export const policyService = {
  getPolicies,
  getAllPolicies,
};
