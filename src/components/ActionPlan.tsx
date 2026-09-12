import React from 'react';
import { ActionPlan, Job } from '../types';

interface ActionPlanProps {
  job: Job;
  recommendation: string;
  reasons: string[];
  tasks: string[];
  confirmationNeeds: string[];
}

export function ActionPlanComponent({
  job,
  recommendation,
  reasons,
  tasks,
  confirmationNeeds,
}: ActionPlanProps) {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{job.company}에 취업한다면?</h3>
        <p className="text-gray-700 font-medium">{recommendation}</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <h4 className="font-semibold text-gray-900 mb-4">추천 이유</h4>
        <ul className="space-y-2">
          {reasons.map((reason, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-0.5">✓</span>
              <span className="text-gray-700">{reason}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <h4 className="font-semibold text-gray-900 mb-4">이번 주 해야 할 일</h4>
        <ol className="space-y-2">
          {tasks.map((task, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="font-bold text-gray-400 flex-shrink-0">{idx + 1}.</span>
              <span className="text-gray-700">{task}</span>
            </li>
          ))}
        </ol>
      </div>

      {confirmationNeeds.length > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
          <h4 className="font-semibold text-gray-900 mb-4">추가 확인이 필요한 정보</h4>
          <ul className="space-y-2">
            {confirmationNeeds.map((need, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold mt-0.5">!</span>
                <span className="text-gray-700">{need}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
