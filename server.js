import express from "express"
import { routes } from "./Routes/index.js"
import { connection } from "./db/db.js"


const app = express()
const port = 3000

connection()

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

routes(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
