import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 공부하기", done: true, date: "7/12" },
    { id: 2, text: "위젯 대시보드 만들기", done: false, date: "7/13" },
  ]);
  const [input, setInput] = useState("");
  const add = () => {
    if (!input.trim()) return;
    const d = new Date();
    setTodos([...todos, { id: Date.now(), text: input.trim(), done: false, date: `${d.getMonth() + 1}/${d.getDate()}` }]);
    setInput("");
  };
  const toggle = (id) => setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  const remove = (id) => setTodos(todos.filter((t) => t.id !== id));
  const doneCount = todos.filter((t) => t.done).length;
  return (
    <div className="card">
      <h2>✅ To-do 리스트</h2>
      <div className="tag">완료 개수 표시 + 추가한 날짜</div>
      <div className="todo-form">
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
        />
        <button className="btn" onClick={add}>추가</button>
      </div>
      <div className="todo-stat">
        완료 <b>{doneCount}</b> / 전체 <b>{todos.length}</b>개
      </div>
      {todos.map((t) => (
        <div key={t.id} className={`todo-item ${t.done ? "done" : ""}`}>
          <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
          <span className="txt">{t.text}</span>
          <span className="date">{t.date}</span>
          <button className="del" onClick={() => remove(t.id)}>✕</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
