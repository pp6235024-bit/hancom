import { useState } from "react";

function Calendar() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const first = new Date(year, month, 1).getDay();
  const last = new Date(year, month + 1, 0).getDate();
  const move = (d) => {
    const m = month + d;
    if (m < 0) { setYear(year - 1); setMonth(11); }
    else if (m > 11) { setYear(year + 1); setMonth(0); }
    else setMonth(m);
  };
  const isToday = (d) => d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
  return (
    <div className="card">
      <h2>📅 달력</h2>
      <div className="tag">이번 달 보기 · 오늘 표시</div>
      <div className="cal-head">
        <button onClick={() => move(-1)}>‹</button>
        <b>{year}년 {month + 1}월</b>
        <button onClick={() => move(1)}>›</button>
      </div>
      <div className="cal-grid">
        {["일", "월", "화", "수", "목", "금", "토"].map((d) => <div key={d} className="dow">{d}</div>)}
        {Array.from({ length: first }).map((_, i) => <div key={"b" + i} className="day blank">0</div>)}
        {Array.from({ length: last }).map((_, i) => (
          <div key={i} className={`day ${isToday(i + 1) ? "today" : ""}`}>{i + 1}</div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
