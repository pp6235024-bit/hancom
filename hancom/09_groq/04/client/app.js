const chatBox       = document.getElementById('chatBox')
const input         = document.getElementById('q')
const sendBtn       = document.getElementById('sendBtn')
const resetBtn      = document.getElementById('resetBtn')
const settingToggle = document.getElementById('settingToggle')
const settingPanel  = document.getElementById('settingPanel')
const systemPrompt  = document.getElementById('systemPrompt')
const applyBtn      = document.getElementById('applyBtn')

const API_URL = (window.location.hostname === 'localhost' && window.location.protocol !== 'file:')
  ? '/api/chat'
  : 'http://localhost:3000/api/chat'

let history = []
let currentSystem = systemPrompt.value.trim()

// 설정 패널 토글
settingToggle.addEventListener('click', () => {
  settingPanel.classList.toggle('hidden')
})

// 시스템 프롬프트 적용
applyBtn.addEventListener('click', () => {
  currentSystem = systemPrompt.value.trim()
  settingPanel.classList.add('hidden')
  addBubble('✅ AI 성격이 적용됐습니다.', 'ai')
})

function addBubble(text, who) {
  const div = document.createElement('div')
  div.className = 'bubble ' + who
  div.textContent = text
  chatBox.appendChild(div)
  chatBox.scrollTop = chatBox.scrollHeight
  return div
}

function addLoading() {
  const div = document.createElement('div')
  div.className = 'bubble ai loading'
  div.innerHTML = '<span>●</span><span>●</span><span>●</span>'
  chatBox.appendChild(div)
  chatBox.scrollTop = chatBox.scrollHeight
  return div
}

async function send() {
  const prompt = input.value.trim()
  if (!prompt) return

  input.value = ''
  sendBtn.disabled = true
  addBubble(prompt, 'user')
  history.push({ role: 'user', content: prompt })

  const loader = addLoading()

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: history, system: currentSystem })
    })
    const data = await res.json()
    const reply = data.reply || data.error || '(응답 없음)'

    loader.remove()
    addBubble(reply, 'ai')
    history.push({ role: 'assistant', content: reply })
  } catch {
    loader.remove()
    addBubble('❌ 서버가 연결되지 않았습니다. node index.js를 먼저 실행해주세요.', 'ai')
  }

  sendBtn.disabled = false
  input.focus()
}

sendBtn.addEventListener('click', send)

input.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    send()
  }
})

resetBtn.addEventListener('click', () => {
  history = []
  chatBox.innerHTML = '<div class="bubble ai">대화가 초기화됐습니다 😊</div>'
})
