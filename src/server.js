// importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

// iniciando o express
const server = express();
server

// utilizar body do req
.use(express.urlencoded({extended: true}))

//utilizando os arquivos estáticos
.use(express.static('public'))

// configurar template engine (handlebars)
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// criar uma rota
// server.get('/',(request, response) => {
// //     return response.sendFile(path.join(__dirname, 'views', 'index.html'))
// // })

// rotas da aplicação
.get('/', pages.index) 
.get('/place', pages.place)
.get('/places', pages.places) 
.get('/create-place', pages.createplace)
.post('/save-place', pages.saveplace)

// ligar o servidor(npm start)
server.listen(5500)