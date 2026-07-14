import { useState } from "react";

function NameInput() {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  return (
    <div className="card">
      <h2>👋 이름 입력기</h2>
      <div className="tag">useState로 입력값 관리하기</div>
      <div className="todo-form">
        <input
          type="text"
          placeholder="이름을 입력하세요"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && setName(input)}
        />
        <button className="btn" onClick={() => setName(input)}>확인</button>
      </div>
      <div className="greet">
        {name ? `안녕하세요, ${name}님! 🎉` : "이름을 입력해 보세요"}
      </div>
    </div>
  );
}

export default NameInput;
