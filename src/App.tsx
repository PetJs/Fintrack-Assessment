import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/DashBoard';
import { SummaryCards } from './components/SumaryCard';
import { TransactionTable } from './components/TransactionTable';
import { sampleTransactions, dashboardSummary } from "@/lib/data"

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeView, setActiveView] = useState<'overview' | 'transactions'>('overview');

  return (
    <div className="bg-[#fcfdfd] min-h-screen">
      <div className="px-12">
        {/* Header */}
        <Header />
        
        <div className="flex gap-12 min-h-[calc(100vh-84px)]">
          {/* Sidebar */}
          <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
          
          <div className="flex-1 min-w-0">
            {/* Dashboard Title Section */}
            <Dashboard
              activeView={activeView} 
              onViewChange={setActiveView} 
            />
            
            {/* Content based on active view */}
            {activeView === 'overview' && (
              <>
                {/* Summary Cards */}
                <SummaryCards summary={dashboardSummary} />
                
                {/* Transaction Table */}
                <TransactionTable transactions={sampleTransactions} />
              </>
            )}
            
            {activeView === 'transactions' && (
              <div className="py-7">
                <h2 className="text-[20px] font-bold text-[#1b2528] tracking-[-0.4px] leading-[24px] mb-6">
                  All Transactions
                </h2>
                <TransactionTable transactions={sampleTransactions} />
              </div>
            )}
          </div>
        </div>
        
        {/* Footer */}
        <div className="h-12 bg-[#fcfdfd]" />
      </div>
    </div>
  );
}