import React from 'react';
import { CultureActivity } from '../types';
import { formatCurrency } from '../utils/calculateBudget';

interface CultureCardProps {
  activity: CultureActivity;
  budgetFeasible: boolean;
}

export function CultureCard({ activity, budgetFeasible }: CultureCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-gray-900">{activity.name}</h4>
        {activity.demoLabel && (
          <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">샘플</span>
        )}
      </div>

      <p className="text-sm text-gray-600 mb-3">{activity.category}</p>

      <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
        <div>
          <div className="text-xs text-gray-600">위치</div>
          <div className="font-medium text-gray-900">{activity.location}</div>
        </div>
        <div>
          <div className="text-xs text-gray-600">가격</div>
          <div className="font-medium text-gray-900">{formatCurrency(activity.price)}</div>
        </div>
        <div>
          <div className="text-xs text-gray-600">시간</div>
          <div className="font-medium text-gray-900">
            {activity.startTime} - {activity.endTime}
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-600">귀가가능</div>
          <div className={`font-medium ${activity.returnPossible ? 'text-green-600' : 'text-red-600'}`}>
            {activity.returnPossible ? '가능' : '어려움'}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" id={activity.id} className="rounded" />
        <label
          htmlFor={activity.id}
          className={`text-sm ${budgetFeasible ? 'text-gray-700 cursor-pointer' : 'text-gray-400'}`}
        >
          {budgetFeasible ? '예산 내에서 가능' : '예산 초과'}
        </label>
      </div>
    </div>
  );
}
