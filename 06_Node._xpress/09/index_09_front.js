const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())//객채로 해석=>
                        //변환전:"(/":/"민수")
                        //변환후{name:"민수"}

app.use((req, res, next) => { 
 console.log(req.method, req.url)
next()
})


app.get('/api/users',(req,res)=> {
app.json([{id:1,name:"kim"}])
})

app.listen(3000, () => console.log('http://localhost:3000/api/users'))