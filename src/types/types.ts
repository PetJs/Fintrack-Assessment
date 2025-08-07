export interface Transaction {
  id: string;
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: 'Credit' | 'Debit';
}

export interface DashboardSummary {
  totalBalance: number;
  totalCredits: number;
  totalDebits: number;
  transactionCount: number;
  balanceChange: number;
  creditsChange: number;
  debitsChange: number;
  transactionChange: number;
}

export type SortField = 'date' | 'remark' | 'amount' | 'currency' | 'type';
export type SortDirection = 'asc' | 'desc';

export interface TableHeaderProps {
  label: string;
  field: SortField;
  sortField: SortField | null;
  sortDirection: SortDirection;
  onSort: (field: SortField) => void;
}

export interface SummaryCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
}

export interface SummaryCardsProps {
  summary: DashboardSummary;
}

export interface TransactionTableProps {
  transactions: Transaction[];
}

