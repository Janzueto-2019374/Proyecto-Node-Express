//Importación
const express = require('express')
//Definicion de const (constante)
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Que onda wapo!')
})

app.listen(port, () => {
  console.log(`Ejemplo de app ejecuntandose ${port}`)
})