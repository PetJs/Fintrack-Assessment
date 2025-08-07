import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Transaction, SortField, SortDirection, TableHeaderProps, TransactionTableProps } from '@/types/types';

function TableHeader({ label, field, sortField, sortDirection, onSort }: TableHeaderProps) {
  const isActive = sortField === field;
  
  return (
    <button
      onClick={() => onSort(field)}
      className="flex items-center justify-start px-0 py-1 w-full gap-2 hover:bg-gray-50 transition-colors"
    >
      <span className="text-[13px] font-medium text-[#15272d9e] leading-[16px]">
        {label}
      </span>
      <ChevronDown 
        className={`size-6 text-[#15272d9e] transition-transform ${
          isActive && sortDirection === 'desc' ? 'rotate-180' : ''
        }`} 
      />
    </button>
  );
}

function TransactionRow({ transaction }: { transaction: Transaction }) {
  const isCredit = transaction.type === 'Credit';
  
  return (
    <tr className="border-t border-[#49656e33]">
      <td className="px-0 py-[18px]">
        <span className="text-[15px] font-normal text-[#1b2528] tracking-[-0.075px] leading-[20px]">
          {transaction.date}
        </span>
      </td>
      <td className="px-0 py-[18px]">
        <span className="text-[15px] font-normal text-[#1b2528] tracking-[-0.075px] leading-[20px]">
          {transaction.remark}
        </span>
      </td>
      <td className="px-0 py-[18px]">
        <span className="text-[15px] font-normal text-[#1b2528] tracking-[-0.075px] leading-[20px]">
          {transaction.amount >= 0 ? '' : '-'}${Math.abs(transaction.amount).toLocaleString()}
        </span>
      </td>
      <td className="px-0 py-[18px]">
        <span className="text-[15px] font-normal text-[#1b2528] tracking-[-0.075px] leading-[20px]">
          {transaction.currency}
        </span>
      </td>
      <td className="px-0 py-[18px]">
        <div className="bg-[#34616f17] rounded-2xl px-2 py-1 inline-flex items-center gap-2">
          <div 
            className={`size-1.5 rounded-full ${
              isCredit ? 'bg-[#087A2E]' : 'bg-[#C6381B]'
            }`}
          />
          <span className="text-[15px] font-medium text-[#1b2528] leading-[20px]">
            {transaction.type}
          </span>
        </div>
      </td>
    </tr>
  );
}

export function TransactionTable({ transactions }: TransactionTableProps) {
  const [sortField, setSortField] = useState<SortField | null>('date');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedTransactions = [...transactions].sort((a, b) => {
    if (!sortField) return 0;
    
    let aValue = a[sortField];
    let bValue = b[sortField];
    
    if (sortField === 'date') {
      aValue = new Date(aValue as string).getTime();
      bValue = new Date(bValue as string).getTime();
    }
    
    if (sortField === 'amount') {
      aValue = Math.abs(aValue as number);
      bValue = Math.abs(bValue as number);
    }
    
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div className="bg-[#fcfdfd] py-7 w-full overflow-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">
              <TableHeader
                label="Date"
                field="date"
                sortField={sortField}
                sortDirection={sortDirection}
                onSort={handleSort}
              />
            </th>
            <th className="text-left">
              <TableHeader
                label="Remark"
                field="remark"
                sortField={sortField}
                sortDirection={sortDirection}
                onSort={handleSort}
              />
            </th>
            <th className="text-left">
              <TableHeader
                label="Amount"
                field="amount"
                sortField={sortField}
                sortDirection={sortDirection}
                onSort={handleSort}
              />
            </th>
            <th className="text-left">
              <TableHeader
                label="Currency"
                field="currency"
                sortField={sortField}
                sortDirection={sortDirection}
                onSort={handleSort}
              />
            </th>
            <th className="text-left">
              <TableHeader
                label="Type"
                field="type"
                sortField={sortField}
                sortDirection={sortDirection}
                onSort={handleSort}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedTransactions.map((transaction) => (
            <TransactionRow key={transaction.id} transaction={transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
}