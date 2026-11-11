// Original SVG placeholder artwork (logo mark, service illustrations, hero planet).
export function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="16" cy="16" r="14" stroke="#7fdcff" strokeWidth="1.5" opacity=".5" />
      <path d="M9 22 16 8l7 14" stroke="#7fdcff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="8" r="2" fill="#fff" />
    </svg>
  );
}

const grad = (id: string) => (
  <defs>
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#1b3a72" />
      <stop offset="1" stopColor="#0a1428" />
    </linearGradient>
  </defs>
);

export function ServiceArt({ i }: { i: number }) {
  const common = { viewBox: "0 0 400 220", className: "h-full w-full", preserveAspectRatio: "xMidYMid slice" as const };
  const bg = <rect width="400" height="220" fill={`url(#g${i})`} />;
  if (i === 0)
    return (
      <svg {...common}>{grad("g0")}{bg}
        <rect x="70" y="40" width="260" height="140" rx="10" fill="#0b1b38" stroke="#7fdcff" strokeOpacity=".6" />
        <rect x="70" y="40" width="260" height="22" rx="10" fill="#12284f" />
        {[0, 1, 2].map((k) => <circle key={k} cx={86 + k * 14} cy="51" r="3.5" fill="#7fdcff" opacity={0.4 + k * 0.2} />)}
        <rect x="90" y="80" width="90" height="10" rx="3" fill="#7fdcff" opacity=".7" />
        <rect x="90" y="100" width="140" height="8" rx="3" fill="#fff" opacity=".25" />
        <rect x="90" y="116" width="110" height="8" rx="3" fill="#fff" opacity=".25" />
        <rect x="250" y="80" width="60" height="80" rx="6" fill="#7fdcff" opacity=".2" />
        <path d="M262 140l14-18 12 10 14-24" stroke="#7fdcff" strokeWidth="2" fill="none" />
      </svg>
    );
  if (i === 1)
    return (
      <svg {...common}>{grad("g1")}{bg}
        {[[200,110],[120,60],[280,60],[120,160],[280,160],[60,110],[340,110]].map(([x,y],k)=>(
          <g key={k}>{k>0&&<line x1="200" y1="110" x2={x} y2={y} stroke="#7fdcff" strokeOpacity=".4" />}
          <circle cx={x} cy={y} r={k===0?22:8} fill={k===0?"#7fdcff":"#0b1b38"} stroke="#7fdcff" /></g>
        ))}
        <text x="200" y="115" textAnchor="middle" fontSize="14" fontWeight="700" fill="#07101f">AI</text>
      </svg>
    );
  if (i === 2)
    return (
      <svg {...common}>{grad("g2")}{bg}
        {[0, 1, 2].map((k) => (
          <g key={k}>
            <polygon points={`200,${50 + k * 32} 290,${80 + k * 32} 200,${110 + k * 32} 110,${80 + k * 32}`} fill="#0b1b38" stroke="#7fdcff" strokeOpacity={0.9 - k * 0.2} />
          </g>
        ))}
        <circle cx="200" cy="78" r="5" fill="#7fdcff" />
      </svg>
    );
  return (
    <svg {...common}>{grad("g3")}{bg}
      <rect x="60" y="35" width="280" height="150" rx="10" fill="#0b1b38" stroke="#7fdcff" strokeOpacity=".6" />
      <rect x="60" y="35" width="60" height="150" rx="10" fill="#12284f" />
      {[60, 85, 110, 135].map((y) => <rect key={y} x="74" y={y} width="32" height="8" rx="3" fill="#7fdcff" opacity=".5" />)}
      {[0, 1, 2].map((k) => <rect key={k} x={140 + k * 64} y="55" width="54" height="34" rx="6" fill="#7fdcff" opacity={0.15 + k * 0.1} />)}
      <rect x="140" y="105" width="190" height="62" rx="6" fill="#0a1428" stroke="#7fdcff" strokeOpacity=".3" />
      <path d="M150 155l30-24 28 12 34-30 30 18 40-22" stroke="#7fdcff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function Planet() {
  return (
    <div className="relative h-[360px] w-[360px] [perspective:1000px]">
      <div className="absolute inset-0 animate-[float_8s_ease-in-out_infinite] [transform-style:preserve-3d]">
        <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_80px_rgba(80,170,255,.45)]"
          style={{ background: "radial-gradient(circle at 30% 28%, #bfe9ff, #3a86d8 38%, #0e2a5c 70%, #050c1c)" }} />
        {[0, 1, 2].map((k) => (
          <div key={k} className="absolute left-1/2 top-1/2"
            style={{ width: 240 + k * 60, height: 240 + k * 60, margin: `${-(120 + k * 30)}px 0 0 ${-(120 + k * 30)}px`,
              transform: `rotateX(${68 - k * 10}deg) rotateY(${k * 12}deg)`, transformStyle: "preserve-3d" }}>
            <div className="h-full w-full rounded-full border border-cyan-300/40"
              style={{ animation: `ring ${18 + k * 6}s linear infinite${k % 2 ? " reverse" : ""}` }}>
              <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 rounded-full bg-cyan-200 shadow-[0_0_12px_#7fdcff]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
