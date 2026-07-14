const express = require('express')
const app = express(

//2.삭제할 데이터 목록
let users = [
    { id: 1, name: '지니' },
     { id: 2, name: '철수' }
    ]

    //3.규칙 만들기
    app.delete('/api/users/:id', (req, res) => {
        users = users.filter(u => u.id !== Number(req.params.id)) 
        res.json({ ok: true, 남은: users })
     })

     //4.문열기
     app.listen(3000, async () => {
        const res = await fetch('http://localhost:3000/api/users/2',{
             method: 'DELETE' 
            })
     console.log(await res.json())
     })
