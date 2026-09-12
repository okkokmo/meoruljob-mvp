export function calculateBudgetBreakdown(
  salary: number,
  rent: number,
  food: number,
  transportCost: number,
  otherCosts: number,
  supportAmount: number
) {
  const totalExpenses = rent + food + transportCost + otherCosts;
  const availableAmount = salary - totalExpenses + supportAmount;

  return {
    salary,
    rent,
    food,
    transport: transportCost,
    otherCosts,
    supportAmount,
    availableAmount,
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
    minimumFractionDigits: 0,
  }).format(amount);
}

export function formatTime(timeString: string): string {
  const [hours, minutes] = timeString.split(':');
  return `${hours}:${minutes}`;
}
