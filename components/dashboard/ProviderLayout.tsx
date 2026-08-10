import ProviderSidebar from './ProviderSidebar';

export default function ProviderLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#021410]">
      <ProviderSidebar />
      <div className="pt-20 pl-0 md:pl-64">
        {children}
      </div>
    </div>
  );
}