import { useState } from "react";
import NameInput from "../components/mini_/Name.jsx";
import Counter from "../components/mini_/Counter.jsx";
import Clock from "../components/mini_/clock.jsx";
import TodoList from "../components/mini_/todo.jsx";
import Calendar from "../components/mini_/Calendar.jsx";
import Stopwatch from "../components/mini_/Stop.jsx";
import MusicPlayer from "../components/mini_/Music.jsx";
import Weather from "../components/mini_/Weather.jsx";

const css = `
  .dash { min-height: 100vh; padding: 28px 20px 60px; font-family: 'Pretendard', -apple-system, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif; transition: background .35s, color .35s; }
  .dash[data-theme='light'] { --bg:#eef2f7; --card:#ffffff; --ink:#1c2434; --sub:#68748a; --line:#e2e8f2; --accent:#3d6bff; --accent-soft:#e8eeff; --done:#9aa5b8; background:var(--bg); color:var(--ink); }
  .dash[data-theme='dark'] { --bg:#12151d; --card:#1b202c; --ink:#e8ecf4; --sub:#8d97ab; --line:#2a3143; --accent:#6c8cff; --accent-soft:#242c44; --done:#5b6478; background:var(--bg); color:var(--ink); }
  .dash * { box-sizing: border-box; }
  .head { max-width: 1100px; margin: 0 auto 26px; display:flex; align-items:center; justify-content:space-between; gap:12px; }
  .head h1 { font-size: 24px; font-weight: 800; letter-spacing:-0.5px; margin:0; }
  .head p { margin:4px 0 0; color:var(--sub); font-size:13px; }
  .theme-btn { border:1px solid var(--line); background:var(--card); color:var(--ink); border-radius:999px; padding:10px 18px; font-size:14px; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:8px; transition:transform .15s; }
  .theme-btn:hover { transform: scale(1.04); }
  .grid { max-width:1100px; margin:0 auto; display:grid; grid-template-columns:repeat(auto-fill, minmax(320px, 1fr)); gap:18px; }
  .card { background:var(--card); border:1px solid var(--line); border-radius:18px; padding:20px; box-shadow:0 4px 16px rgba(10,20,50,.05); }
  .card h2 { margin:0 0 4px; font-size:15px; font-weight:700; display:flex; align-items:center; gap:7px; }
  .tag { font-size:11px; color:var(--sub); font-weight:500; margin-bottom:14px; }
  .dash input[type='text'] { width:100%; padding:11px 14px; border-radius:12px; border:1px solid var(--line); background:var(--bg); color:var(--ink); font-size:14px; outline:none; }
  .dash input[type='text']:focus { border-color:var(--accent); }
  .btn { border:none; background:var(--accent); color:#fff; border-radius:11px; padding:10px 16px; font-size:14px; font-weight:600; cursor:pointer; }
  .btn.ghost { background:var(--accent-soft); color:var(--accent); }
  .btn:active { transform:scale(.96); }
  .greet { margin-top:14px; font-size:17px; font-weight:700; color:var(--accent); min-height:24px; }
  .count-num { font-size:52px; font-weight:800; text-align:center; margin:8px 0 14px; font-variant-numeric:tabular-nums; }
  .row { display:flex; gap:8px; justify-content:center; }
  .clock-time { font-size:40px; font-weight:800; text-align:center; font-variant-numeric:tabular-nums; letter-spacing:1px; }
  .clock-date { text-align:center; color:var(--sub); font-size:13px; margin-top:6px; }
  .todo-form { display:flex; gap:8px; margin-bottom:12px; }
  .todo-stat { font-size:12px; color:var(--sub); margin-bottom:10px; }
  .todo-stat b { color:var(--accent); }
  .todo-item { display:flex; align-items:center; gap:10px; padding:9px 4px; border-bottom:1px solid var(--line); }
  .todo-item span.txt { flex:1; font-size:14px; }
  .todo-item.done span.txt { text-decoration:line-through; color:var(--done); }
  .todo-item .date { font-size:11px; color:var(--sub); }
  .todo-item button.del { border:none; background:none; color:var(--sub); cursor:pointer; font-size:15px; }
  .weather-main { display:flex; align-items:center; gap:14px; }
  .weather-main .icon { font-size:46px; }
  .weather-main .temp { font-size:34px; font-weight:800; }
  .weather-sub { color:var(--sub); font-size:13px; margin-top:6px; }
  .city-row { display:flex; gap:6px; margin-top:14px; flex-wrap:wrap; }
  .city-row button { border:1px solid var(--line); background:var(--bg); color:var(--ink); border-radius:999px; padding:6px 12px; font-size:12px; cursor:pointer; }
  .city-row button.on { background:var(--accent); border-color:var(--accent); color:#fff; }
  .cal-head { display:flex; align-items:center; justify-content:space-between; margin-bottom:10px; }
  .cal-head b { font-size:15px; }
  .cal-head button { border:none; background:var(--accent-soft); color:var(--accent); border-radius:8px; width:30px; height:30px; cursor:pointer; font-size:15px; }
  .cal-grid { display:grid; grid-template-columns:repeat(7,1fr); gap:3px; text-align:center; }
  .cal-grid .dow { font-size:11px; color:var(--sub); padding:5px 0; font-weight:600; }
  .cal-grid .day { font-size:13px; padding:8px 0; border-radius:9px; }
  .cal-grid .day.today { background:var(--accent); color:#fff; font-weight:700; }
  .cal-grid .day.blank { visibility:hidden; }
  .sw-time { font-size:38px; font-weight:800; text-align:center; font-variant-numeric:tabular-nums; margin-bottom:14px; }
  .laps { margin-top:12px; max-height:110px; overflow:auto; font-size:13px; color:var(--sub); }
  .laps div { display:flex; justify-content:space-between; padding:4px 6px; border-bottom:1px dashed var(--line); font-variant-numeric:tabular-nums; }
  .player { text-align:center; }
  .disc { width:86px; height:86px; margin:6px auto 12px; border-radius:50%; background:conic-gradient(from 0deg, var(--accent), var(--accent-soft), var(--accent)); display:flex; align-items:center; justify-content:center; font-size:30px; }
  .disc.spin { animation: spin 3s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .track-name { font-weight:700; font-size:15px; }
  .track-sub { color:var(--sub); font-size:12px; margin:4px 0 14px; }
  @media (prefers-reduced-motion: reduce) { .disc.spin { animation:none; } }
`;

export default function Mini() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="dash" data-theme={theme}>
      <style>{css}</style>
      <div className="head">
        <div>
          <h1>🧩 mini_ 위젯 보드</h1>
          <p>이름입력 · 카운터 · 시계 · 투두 · 날씨 · 달력 · 스톱워치 · 음악</p>
        </div>
        <button className="theme-btn" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? "🌙 다크모드" : "☀️ 라이트모드"}
        </button>
      </div>
      <div className="grid">
        <NameInput />
        <Counter />
        <Clock />
        <TodoList />
        <Weather />
        <Calendar />
        <Stopwatch />
        <MusicPlayer />
      </div>
    </div>
  );
}
