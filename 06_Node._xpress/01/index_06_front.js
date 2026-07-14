// 터미널에 물어보고 → 내가 입력한 문장을 서버로 보냄
const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

const url = 'http://192.168.10.28:5000/api/chat'
const hancomToken = 'HANCOM'

rl.question('메시지: ', (message) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': hancomToken
    },
    body: JSON.stringify({ message })
  })
    .then(response => response.json())
    .then(data => console.log('성공:', data))
    .catch(error => console.error('에러:', error))
    .finally(() => rl.close())
})