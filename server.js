import express from "express"
import { connection } from "./db/db"
import { produtoRoute } from "./Routes/produtos.routes.js"

const app = express()
const port = 3000

connection()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

produtoRoute(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
