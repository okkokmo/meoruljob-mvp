import { Job } from '../types';
import { SAMPLE_JOBS } from '../data/jobs';

export async function searchJobs(userProfile: any): Promise<Job[]> {
  // Mock job search
  // In production, this would query a real job database
  return SAMPLE_JOBS;
}

export async function getJobDetails(jobId: string): Promise<Job | null> {
  return SAMPLE_JOBS.find((job) => job.id === jobId) || null;
}

export const jobService = {
  searchJobs,
  getJobDetails,
};
