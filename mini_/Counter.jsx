import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <h2>🔢 카운터</h2>
      <div className="tag">숫자 증가 · 감소 · 리셋</div>
      <div className="count-num">{count}</div>
      <div className="row">
        <button className="btn ghost" onClick={() => setCount(count - 1)}>−1</button>
        <button className="btn ghost" onClick={() => setCount(0)}>리셋</button>
        <button className="btn" onClick={() => setCount(count + 1)}>+1</button>
      </div>
    </div>
  );
}

export default Counter;
