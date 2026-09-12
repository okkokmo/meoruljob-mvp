import React from 'react';
import { formatCurrency } from '../utils/calculateBudget';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
  commuteFeasible: boolean;
  commuteTime: number;
  policyCount: number;
  onClick: () => void;
}

export function JobCard({
  job,
  commuteFeasible,
  commuteTime,
  policyCount,
  onClick,
}: JobCardProps) {
  return (
    <div
      className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{job.company}</h3>
          <p className="text-sm text-gray-600 mt-1">{job.title}</p>
        </div>
        {job.demoLabel && (
          <span className="ml-2 inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
            {job.demoLabel}
          </span>
        )}
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">위치</span>
          <span className="font-medium text-gray-900">{job.location}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">급여</span>
          <span className="font-medium text-gray-900">{formatCurrency(job.salary)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">근무시작</span>
          <span className="font-medium text-gray-900">{job.startTime}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
        <div className={`p-2 rounded ${job.isJobMatch ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-700'}`}>
          <div className="font-medium">JOB</div>
          <div>{job.isJobMatch ? '적합' : '부적합'}</div>
        </div>
        <div className={`p-2 rounded ${commuteFeasible ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          <div className="font-medium">MOVE</div>
          <div>{commuteTime}분 {commuteFeasible ? '✓' : '✗'}</div>
        </div>
      </div>

      <div className="flex justify-between items-center text-xs">
        <span className="text-gray-600">관련 지원: {policyCount}건</span>
        <button className="text-blue-600 hover:text-blue-700 font-medium">생활가능성 보기 →</button>
      </div>
    </div>
  );
}
