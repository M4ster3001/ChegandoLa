const express = require( 'express' )

module.exports = function( server ) {

    // API
    const router = express.Router()
    server.use( '/api', router )

    //ToDo
    const toDoService = require( '../api/todo/toDoServices' )
    toDoService.register( router, '/todos' )
}