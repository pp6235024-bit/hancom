import { useState, useEffect } from "react";

function Clock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const pad = (n) => String(n).padStart(2, "0");
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <div className="card">
      <h2>🕐 실시간 시계</h2>
      <div className="tag">useEffect + setInterval</div>
      <div className="clock-time">
        {pad(now.getHours())}:{pad(now.getMinutes())}:{pad(now.getSeconds())}
      </div>
      <div className="clock-date">
        {now.getFullYear()}년 {now.getMonth() + 1}월 {now.getDate()}일 ({days[now.getDay()]})
      </div>
    </div>
  );
}

export default Clock;
