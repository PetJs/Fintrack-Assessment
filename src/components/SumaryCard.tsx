import { MoreHorizontal } from 'lucide-react';
import type { SummaryCardProps, SummaryCardsProps } from '@/types/types';

function SummaryCard({ title, value, change, changeType }: SummaryCardProps) {
  return (
    <div className="bg-[rgba(52,97,111,0.09)] rounded-[20px] p-[28px] flex-1 min-w-0">
      <div className="flex items-center justify-between mb-[18px]">
        <h3 className="text-[17px] font-bold text-[#1b2528] tracking-[-0.085px]">
          {title}
        </h3>
        <button className="p-1 hover:bg-gray-200 rounded transition-colors">
          <MoreHorizontal className="size-6 text-[#1B2528]" />
        </button>
      </div>
      <div className="space-y-1">
        <div className="text-[34px] font-bold text-[#1b2528] tracking-[-0.68px] leading-[40px]">
          {value}
        </div>
        <div className={`text-[13px] font-medium leading-[16px] ${
          changeType === 'positive' ? 'text-[#3e7383]' : 'text-[#3e7383]'
        }`}>
          {change}
        </div>
      </div>
    </div>
  );
}

export function SummaryCards({ summary }: SummaryCardsProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatChange = (change: number) => {
    const sign = change >= 0 ? '+' : '';
    return `${sign}${change}%`;
  };

  return (
    <div className="bg-[#fcfdfd] py-3">
      <div className="mb-[18px]">
        <h2 className="text-[20px] font-bold text-[#1b2528] tracking-[-0.4px] leading-[24px]">
          Summary
        </h2>
      </div>
      <div className="flex gap-7 w-full">
        <SummaryCard
          title="Total Balance"
          value={formatCurrency(summary.totalBalance)}
          change={formatChange(summary.balanceChange)}
          changeType={summary.balanceChange >= 0 ? 'positive' : 'negative'}
        />
        <SummaryCard
          title="Total Credits"
          value={formatCurrency(summary.totalCredits)}
          change={formatChange(summary.creditsChange)}
          changeType={summary.creditsChange >= 0 ? 'positive' : 'negative'}
        />
        <SummaryCard
          title="Total Debits"
          value={formatCurrency(summary.totalDebits)}
          change={formatChange(summary.debitsChange)}
          changeType={summary.debitsChange >= 0 ? 'positive' : 'negative'}
        />
        <SummaryCard
          title="Transactions"
          value={summary.transactionCount.toString()}
          change={formatChange(summary.transactionChange)}
          changeType={summary.transactionChange >= 0 ? 'positive' : 'negative'}
        />
      </div>
    </div>
  );
}