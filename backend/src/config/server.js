const port = 3333

const bodyParser = require( 'body-parser' )
const express = require( 'express' )
const server = express()

server.use( bodyParser.urlencoded({ extended: true }) )
server.use(bodyParser.json())

server.listen( port, () => { console.log( `Servidor rodando na porta ${port}` ) } )
