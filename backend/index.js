require('./mongo')
const express = require('express')
const app = express()

//Importacion del archivo de rutas
const usersRouter = require('./controllers/Users')

//Import body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', usersRouter)

app.get('/', (req, res) => {
    res.end("Hola")
})

//Configuracion server basico
const PORT = 3001
app.listen(3001, () => {
  console.log(`Server running on port ${PORT}`)
})