import React from 'react';

interface ScoreBadgeProps {
  label: string;
  status: 'success' | 'warning' | 'error' | 'neutral';
  value?: string | number;
}

const statusColors = {
  success: 'bg-green-100 text-green-800 border-green-300',
  warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  error: 'bg-red-100 text-red-800 border-red-300',
  neutral: 'bg-gray-100 text-gray-800 border-gray-300',
};

export function ScoreBadge({ label, status, value }: ScoreBadgeProps) {
  return (
    <div className={`inline-block px-3 py-2 rounded-lg border ${statusColors[status]}`}>
      <div className="text-xs font-medium">{label}</div>
      {value && <div className="text-sm font-bold mt-1">{value}</div>}
    </div>
  );
}
