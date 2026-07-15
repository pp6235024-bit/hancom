const chatBox = document.getElementById('chatBox')
const input   = document.getElementById('q')
const sendBtn = document.getElementById('sendBtn')
const resetBtn = document.getElementById('resetBtn')

// localhost에서 열릴 때만 상대경로, 그 외(Vercel 등)는 로컬 서버 직접 연결
const API_URL = (window.location.hostname === 'localhost' && window.location.protocol !== 'file:')
  ? '/api/chat'
  : 'http://localhost:3000/api/chat'

// 대화 기록 (멀티턴) — 서버로 통째로 보냄
let history = []

// 말풍선 추가
function addBubble(text, who) {
  const div = document.createElement('div')
  div.className = 'bubble ' + who
  div.textContent = text
  chatBox.appendChild(div)
  chatBox.scrollTop = chatBox.scrollHeight
  return div
}

// 로딩 말풍선 (점 3개 깜박)
function addLoading() {
  const div = document.createElement('div')
  div.className = 'bubble ai loading'
  div.innerHTML = '<span>●</span><span>●</span><span>●</span>'
  chatBox.appendChild(div)
  chatBox.scrollTop = chatBox.scrollHeight
  return div
}

// 전송
async function send() {
  const prompt = input.value.trim()
  if (!prompt) return

  input.value = ''
  sendBtn.disabled = true

  addBubble(prompt, 'user')

  // 대화 기록에 추가
  history.push({ role: 'user', content: prompt })

  const loader = addLoading()

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: history })
    })
    const data = await res.json()
    const reply = data.reply || data.error || '(응답 없음)'

    loader.remove()
    addBubble(reply, 'ai')

    // AI 답도 기록에 추가 (다음 질문에 문맥 전달)
    history.push({ role: 'assistant', content: reply })
  } catch {
    loader.remove()
    addBubble('❌ 서버가 안 켜져 있어요. server 폴더에서 node index.js 먼저 실행하세요.', 'ai')
  }

  sendBtn.disabled = false
  input.focus()
}

// 버튼 클릭
sendBtn.addEventListener('click', send)

// Enter 전송 (Shift+Enter = 줄바꿈)
input.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    send()
  }
})

// 대화 초기화
resetBtn.addEventListener('click', () => {
  history = []
  chatBox.innerHTML = '<div class="bubble ai">대화가 초기화됐어요. 새로 물어보세요 😊</div>'
})
