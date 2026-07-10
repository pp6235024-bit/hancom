import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div style={{ fontSize: "14px" }}>
      <button 
        style={{ padding: "4px 8px", fontSize: "12px" }}
        onClick={() => setCount(c => c - 1)}
      >
        −1
      </button>

      <span style={{ margin: "0 10px" }}>
        {count}
      </span>

      <button 
        style={{ padding: "4px 8px", fontSize: "12px" }}
        onClick={() => setCount(c => c + 1)}
      >
        +1
      </button>

      <button 
        style={{ padding: "4px 8px", fontSize: "12px", marginLeft: "5px" }}
        onClick={() => setCount(0)}
      >
        리셋
      </button>
    </div>
  )
}

export default Counter
