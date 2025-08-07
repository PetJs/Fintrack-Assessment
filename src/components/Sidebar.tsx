interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'transactions', label: 'Transactions' },
    { id: 'reports', label: 'Reports' },
    { id: 'settings', label: 'Settings' },
  ];

  return (
    <div className="w-80 bg-[#fcfdfd] flex flex-col py-7">
      <div className="space-y-0">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`w-full px-[18px] py-2 text-left rounded-2xl transition-all ${
              activeTab === item.id
                ? 'bg-[rgba(56,103,118,0.16)] text-[#3a6c7b]'
                : 'bg-[#fcfdfd] text-[#1b2528] hover:bg-gray-50'
            }`}
          >
            <span className="text-[15px] font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}