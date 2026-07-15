require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

app.use(cors())
app.use(express.json())

// client 폴더를 정적 파일로 서빙
app.use(express.static(path.join(__dirname, '../client')))

app.post('/api/chat', async (req, res) => {
  const key = process.env.GROQ_API_KEY
  const messages = req.body.messages

  if (!key) {
    return res.json({ reply: '(mock) ' + messages[messages.length - 1].content })
  }

  try {
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + key
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages
      })
    })
    const data = await groqRes.json()
    res.json({ reply: data.choices?.[0]?.message?.content || '(응답 없음)' })
  } catch (err) {
    res.status(500).json({ error: '서버 오류: ' + err.message })
  }
})

if (require.main === module) {
  app.listen(3000, () => console.log('서버 실행 중 → http://localhost:3000'))
}

module.exports = app
