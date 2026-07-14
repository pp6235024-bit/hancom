import { useState, useEffect, useRef } from "react";

function Stopwatch() {
  const [ms, setMs] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const ref = useRef(null);
  useEffect(() => {
    if (running) {
      const start = Date.now() - ms;
      ref.current = setInterval(() => setMs(Date.now() - start), 47);
    }
    return () => clearInterval(ref.current);
  }, [running]);
  const fmt = (v) => {
    const m = String(Math.floor(v / 60000)).padStart(2, "0");
    const s = String(Math.floor((v % 60000) / 1000)).padStart(2, "0");
    const c = String(Math.floor((v % 1000) / 10)).padStart(2, "0");
    return `${m}:${s}.${c}`;
  };
  return (
    <div className="card">
      <h2>⏱️ 스톱워치</h2>
      <div className="tag">시작 · 정지 · 랩 기록</div>
      <div className="sw-time">{fmt(ms)}</div>
      <div className="row">
        <button className="btn" onClick={() => setRunning(!running)}>{running ? "정지" : "시작"}</button>
        <button className="btn ghost" onClick={() => running && setLaps([fmt(ms), ...laps])}>랩</button>
        <button className="btn ghost" onClick={() => { setRunning(false); setMs(0); setLaps([]); }}>리셋</button>
      </div>
      {laps.length > 0 && (
        <div className="laps">
          {laps.map((l, i) => (
            <div key={i}><span>랩 {laps.length - i}</span><span>{l}</span></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Stopwatch;
