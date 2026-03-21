export default function CyberBackground(): React.JSX.Element {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="cyber-grid absolute inset-0 opacity-40" />
      <div className="cyber-scanline absolute inset-x-0 top-0 h-40 opacity-40" />
      <div className="absolute left-[8%] top-[18%] h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl animate-pulse" />
      <div className="absolute right-[10%] top-[12%] h-56 w-56 rounded-full bg-violet-500/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-[10%] left-[15%] h-64 w-64 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />

      <div className="cyber-particle left-[14%] top-[22%]" />
      <div className="cyber-particle left-[32%] top-[68%]" />
      <div className="cyber-particle left-[74%] top-[30%]" />
      <div className="cyber-particle left-[82%] top-[72%]" />
      <div className="cyber-particle left-[55%] top-[48%]" />

      <div className="cyber-code absolute left-[4%] top-[28%] hidden xl:block">
        <div>nmap -sV target.local</div>
        <div>status: monitoring</div>
        <div>alert level: medium</div>
      </div>
      <div className="cyber-code absolute bottom-[18%] right-[5%] hidden xl:block">
        <div>python scan.py</div>
        <div>packets inspected: 1842</div>
        <div>endpoint integrity: true</div>
      </div>
    </div>
  );
}
