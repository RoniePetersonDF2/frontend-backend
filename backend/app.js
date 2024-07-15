const app = require('express')

const app = express()

const port = 8000

app.length('/', (req, res) => {
    res.send("Olá mundo")
})

app.listen(port, () => {
    console.log(`Listening http://localhost:#{port}`)
})