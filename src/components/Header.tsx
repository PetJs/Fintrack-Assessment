import { Search, Menu, Grid3X3 } from 'lucide-react';
import Logo from "@/assets/logomark.svg";
import Image from "@/assets/img/A professional-looking individual with short dark hair and glasses smiling in a modern office setting..png";


export function Header() {
  return (
    <div className="bg-[#fcfdfd] flex items-center justify-between px-0 py-3 w-full border-b border-gray-100">
      {/* Left side - Menu and Logo */}
      <div className="flex items-center gap-7">
        <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
          <Menu className="size-6 text-[#1B2528]" />
        </button>
        <div className="flex items-center gap-1">
          <img src={Logo} alt="" />
          <span className="text-[24px] text-[#437d8e] font-['Timmana:Regular',_sans-serif] tracking-[-0.48px]">
            FinTrack
          </span>
        </div>
      </div>

      {/* Right side - Search, Apps, Profile */}
      <div className="flex items-center gap-7">
        <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
          <Search className="size-6 text-[#1B2528]" />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
          <Grid3X3 className="size-6 text-[#1B2528]" />
        </button>
        <div className="size-10 rounded-full overflow-hidden">
          <img
            src={Image}
            alt="User profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}