import React from 'react';
import { formatCurrency } from '../utils/calculateBudget';
import { BudgetBreakdown } from '../types';

interface MoneyBreakdownProps {
  budget: BudgetBreakdown;
}

export function MoneyBreakdown({ budget }: MoneyBreakdownProps) {
  const items = [
    { label: '월급여', amount: budget.salary, color: 'text-green-600' },
    { label: '월세', amount: -budget.rent, color: 'text-red-600' },
    { label: '식비', amount: -budget.food, color: 'text-red-600' },
    { label: '교통비', amount: -budget.transport, color: 'text-red-600' },
    { label: '기타 고정비', amount: -budget.otherCosts, color: 'text-red-600' },
    { label: '지원금', amount: budget.supportAmount, color: 'text-blue-600' },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5">
      <h3 className="font-semibold text-gray-900 mb-4">MONEY - 월 생활비 계산</h3>

      <div className="space-y-3 mb-6">
        {items.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-b-0">
            <span className="text-gray-700">{item.label}</span>
            <span className={`font-semibold ${item.color}`}>
              {item.amount >= 0 ? '+' : '-'}{formatCurrency(Math.abs(item.amount))}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
        <div className="text-sm text-gray-600 mb-1">월 가용금액</div>
        <div className={`text-3xl font-bold ${budget.availableAmount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {formatCurrency(budget.availableAmount)}
        </div>
        <div className="text-xs text-gray-600 mt-2">
          {budget.availableAmount >= 0
            ? '이 금액으로 문화생활, 여행, 저축을 할 수 있습니다.'
            : '생활비가 부족합니다. 다른 일자리를 검토해주세요.'}
        </div>
      </div>
    </div>
  );
}
