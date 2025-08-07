import { ChevronDown, MoreHorizontal } from 'lucide-react';
import imgUser1 from "@/assets/img/A professional-looking individual with short dark hair and glasses smiling at the camera in a modern office..png";
import imgUser2 from "@/assets/img/A professional-looking individual with short dark hair wearing a smart casual outfit, smiling and facing the camera..png";
import imgUser3 from "@/assets/img/A young adult woman with shoulder-length brown hair wearing a casual blue shirt smiling at the camera..png";
import imgUser4 from "@/assets/img/A professional individual with short dark hair wearing a business casual shirt looking at a digital device..png";

interface DashboardProps {
  activeView: 'overview' | 'transactions';
  onViewChange: (view: 'overview' | 'transactions') => void;
}

export function Dashboard({ activeView, onViewChange }: DashboardProps) {
  const userAvatars = [imgUser1, imgUser2, imgUser3, imgUser4];

  return (
    <div className="bg-[#fcfdfd] py-7 space-y-7">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <h1 className="text-[34px] font-bold text-[#1b2528] tracking-[-0.68px] leading-[40px]">
              Wallet Ledger
            </h1>
            <ChevronDown className="size-6 text-[#1B2528]" />
          </div>
          <div className="bg-[rgba(52,97,111,0.09)] px-2 py-1 rounded-2xl flex items-center gap-2">
            <div className="size-1.5 rounded-full bg-[#087A2E]" />
            <span className="text-[15px] font-medium text-[#1b2528] leading-[20px]">
              Active
            </span>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <button className="bg-[#4b8b9f] px-[18px] py-2 rounded-2xl text-[15px] font-medium text-[#020303] leading-[20px] hover:bg-[#3a6c7b] transition-colors">
            Share
          </button>
          <button className="bg-[#fcfdfd] border border-[rgba(73,101,110,0.2)] p-2 rounded-2xl hover:bg-gray-50 transition-colors">
            <MoreHorizontal className="size-5 text-[#1B2528]" />
          </button>
        </div>
      </div>

      {/* User avatars section */}
      <div className="flex items-center gap-3">
        <div className="flex -space-x-1.5">
          {userAvatars.map((avatar, index) => (
            <div 
              key={index}
              className="size-8 rounded-full overflow-hidden border-2 border-[#fcfdfd] relative"
            >
              <img
                src={avatar}
                alt={`User ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="text-[15px] font-normal text-[#15272d9e] tracking-[-0.075px] leading-[20px]">
          <span>Ava, Liam, Noah </span>
          <span>+12 others</span>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="border-b border-[rgba(73,101,110,0.2)]">
        <div className="flex">
          <button
            onClick={() => onViewChange('overview')}
            className={`px-7 py-3 text-[15px] font-medium leading-[20px] border-b-1.5 ${
              activeView === 'overview'
                ? 'text-[#437d8e] border-[#4b8b9f]'
                : 'text-[rgba(21,39,45,0.62)] border-transparent hover:text-[#437d8e]'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => onViewChange('transactions')}
            className={`px-7 py-3 text-[15px] font-medium leading-[20px] border-b-1.5 ${
              activeView === 'transactions'
                ? 'text-[#437d8e] border-[#4b8b9f]'
                : 'text-[rgba(21,39,45,0.62)] border-transparent hover:text-[#437d8e]'
            }`}
          >
            Transactions
          </button>
        </div>
      </div>
    </div>
  );
}